* 事件注册
> 组件在创建 mountComponent 和更新 updateComponent 的时候，都会调用 _updateDOMProperties() 方法
  _updateDOMProperties: function (lastProps, nextProps, transaction) {
    for (propKey in nextProps) {
      var nextProp = nextProps[propKey];
      var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps != null ? lastProps[propKey] : undefined;
      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
        continue;
      }
      if (propKey === STYLE) {
      } else if (registrationNameModules.hasOwnProperty(propKey)) {
        // 如果是props这个对象直接声明的属性，而不是从原型链中继承而来的，则处理它
        // 对于mountComponent，lastProp为null。updateComponent二者都不为null。unmountComponent则nextProp为null
        if (nextProp) {
          // mountComponent和updateComponent中，enqueuePutListener注册事件
          enqueuePutListener(this, propKey, nextProp, transaction);
        } else if (lastProp) {
          // unmountComponent中，删除注册的listener，防止内存泄漏
          deleteListener(this, propKey);
        }
      }
    }
  }
> 通过 enqueuePutListener() 方法进行注册事件
  function enqueuePutListener(inst, registrationName, listener, transaction) {
    listenTo(registrationName, doc);
    // 存储事件,放入事务队列中
    transaction.getReactMountReady().enqueue(putListener, {
      inst: inst,
      registrationName: registrationName,
      listener: listener
    });
  }
>调用 listenTo 把事件注册到 document 上
  事务方式调用 putListener 存储事件 (就是把 React 组件内的所有事件统一的存放到一个对象里，缓存起来，为了在触发事件的时候可以查找到对应的方法去执行)
  export function listenTo(
  registrationName: string,
  mountAt: Document | Element | Node
): void {
  const listeningSet = getListeningSetForElement(mountAt);
  const dependencies = registrationNameDependencies[registrationName];

  for (let i = 0; i < dependencies.length; i++) {
    const dependency = dependencies[i];
    // 调用该方法进行注册
    listenToTopLevel(dependency, mountAt, listeningSet);
  }
}
>注册事件的入口是 listenTo 方法, 通过对dependencies循环调用listenToTopLevel()方法，在该方法中调用 trapCapturedEvent 和 trapBubbledEvent 来注册捕获和冒泡事件。
/ReactBrowserEventEmitter.js

* 事件存储
> 将事件放入到事务队列
function enqueuePutListener(inst, registrationName, listener, transaction) {
  //...
  // 注册事件，将事件注册到document上
  listenTo(registrationName, doc);
  // 存储事件,放入事务队列中
  transaction.getReactMountReady().enqueue(putListener, {
    inst: inst,
    registrationName: registrationName,
    listener: listener
  });
}
putListener: function (inst, registrationName, listener) {
  // 用来标识注册了事件,比如onClick的React对象。key的格式为'.nodeId', 只用知道它可以标示哪个React对象就可以了
  // step1: 得到组件唯一标识
  var key = getDictionaryKey(inst);

  // step2: 得到listenerBank对象中指定事件类型的对象
  var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});

  // step3: 将listener事件回调方法存入listenerBank[registrationName][key]中,比如listenerBank['onclick'][nodeId]
  // 所有React组件对象定义的所有React事件都会存储在listenerBank中
  bankForRegistrationName[key] = listener;

  // ...
}

// 拿到组件唯一标识
var getDictionaryKey = function (inst) {
  return '.' + inst._rootNodeID;
};
* 事件分发
  function dispatchEventForPluginEventSystem(
    topLevelType: DOMTopLevelEventType,
    eventSystemFlags: EventSystemFlags,
    nativeEvent: AnyNativeEvent,
    targetInst: null | Fiber
  ): void {
    const bookKeeping = getTopLevelCallbackBookKeeping(
      topLevelType,
      nativeEvent,
      targetInst,
      eventSystemFlags
    );

    try {
      // Event queue being processed in the same cycle allows
      // `preventDefault`.
      batchedEventUpdates(handleTopLevel, bookKeeping);
    } finally {
      releaseTopLevelCallbackBookKeeping(bookKeeping);
    }
  }
> batchedEventUpdates()批量更新，它的工作是把当前触发的事件放到了批处理队列中。
handleTopLevel 是事件分发的核心所在
  function handleTopLevel(bookKeeping: BookKeepingInstance) {
    let targetInst = bookKeeping.targetInst;

    // Loop through the hierarchy, in case there's any nested components.
    // It's important that we build the array of ancestors before calling any
    // event handlers, because event handlers can modify the DOM, leading to
    // inconsistencies with ReactMount's node cache. See #1105.
    let ancestor = targetInst;
    do {
      if (!ancestor) {
        const ancestors = bookKeeping.ancestors;
        ((ancestors: any): Array<Fiber | null>).push(ancestor);
        break;
      }
      const root = findRootContainerNode(ancestor);
      if (!root) {
        break;
      }
      const tag = ancestor.tag;
      if (tag === HostComponent || tag === HostText) {
        bookKeeping.ancestors.push(ancestor);
      }
      ancestor = getClosestInstanceFromNode(root);
    } while (ancestor);
  }
  事件回调可能会改变 DOM 结构，所以要先遍历层次结构，以防存在任何嵌套的组件，然后缓存起来。
>React 自身实现了一套冒泡机制。从触发事件的对象开始，向父元素回溯，依次调用它们注册的事件 callback。
* 事件执行
>  runExtractedPluginEventsInBatch 
构造合成事件
批处理构造出的合成事件
runExtractedPluginEventsInBatch()
>构造合成事件->遍历plugin
extractPluginEvents 
  for (let i = 0; i < plugins.length; i++) {
      // Not every plugin in the ordering may be loaded at runtime.
      const possiblePlugin: PluginModule<AnyNativeEvent> = plugins[i];
      if (possiblePlugin) {
        const extractedEvents = possiblePlugin.extractEvents(
          topLevelType,
          targetInst,
          nativeEvent,
          nativeEventTarget,
          eventSystemFlags
        );
        if (extractedEvents) {
          events = accumulateInto(events, extractedEvents);
        }
      }
    }
    这个 plugins 就是所有事件合成 plugins 的集合数组，这些 plugins 是在 EventPluginHub 初始化时候注入的
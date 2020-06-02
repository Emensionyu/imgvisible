// function sendJsonp(url, callback) {
//     const script = document.createElement('script')
//     script.src = url + '?name=func'
//     window.func = callback
//     document.body.appendChild(script)
// }


// function haha(data) { console.log(data) }
// sendJsonp('localhost:8080', haha({ a: 1 }))
// function JSONP({
//     url,
//     params,
//     callbackKey,
//     callback
// }) {
//     // 在参数里制定 callback 的名字
//     params = params || {}
//     params[callbackKey] = 'jsonpCallback'
//         // 预留 callback
//     window.jsonpCallback = callback
//         // 拼接参数字符串
//     const paramKeys = Object.keys(params)
//     const paramString = paramKeys
//         .map(key => `${key}=${params[key]}`)
//         .join('&')
//         // 插入 DOM 元素
//     const script = document.createElement('script')
//     script.setAttribute('src', `${url}?${paramString}`)
//     document.body.appendChild(script)
// }

// JSONP({
//     url: 'http://s.weibo.com/ajax/jsonp/suggestion',
//     params: {
//         key: 'test',
//     },
//     callbackKey: '_cb',
//     callback(result) {
//         console.log(1)
//     }
// })
// JSONP({
//         url: 'http://s.weibo.com/ajax/jsonp/suggestion',
//         params: {
//             key: 'test',
//         },
//         callbackKey: '_cb',
//         callback(result) {
//             console.log(2)
//         }
//     })
// 上面的流程有一个问题，就是在只有一个 JSONP 调用时它工作的很正常，
// 但是当出现两个或者以上的请求，回调函数就会被覆盖，这样会出现混乱。
// 为了解决这个问题，我们需要对所有的回调函数进行编码，
// 并且在调用时告诉后端对应的独一无二的编号。
function JSONP({
    url,
    params,
    callbackKey,
    callback
}) {
    // 唯一 id，不存在则初始化
    JSONP.callbackId = JSONP.callbackId || 1
    params = params || {}
        // 传递的 callback 名，和下面预留的一致
    params[callbackKey] = `JSONP.callbacks[${JSONP.callbackId}]`
        // 不要污染 window
    JSONP.callbacks = JSONP.callbacks || []
        // 按照 id 放置 callback
    JSONP.callbacks[JSONP.callbackId] = callback
    const paramKeys = Object.keys(params)
    const paramString = paramKeys
        .map(key => `${key}=${params[key]}`)
        .join('&')
    const script = document.createElement('script')
    script.setAttribute('src', `${url}?${paramString}`)
    document.body.appendChild(script)
        // id 占用，自增
    JSONP.callbackId++
}

JSONP({
    url: 'http://s.weibo.com/ajax/jsonp/suggestion',
    params: {
        key: 'test',
    },
    callbackKey: '_cb',
    callback(result) {
        console.log(1)
    }
})
JSONP({
    url: 'http://s.weibo.com/ajax/jsonp/suggestion',
    params: {
        key: 'excited',
    },
    callbackKey: '_cb',
    callback(result) {
        console.log(2)
    }
})
import _ from 'lodash';

function component() {
    var element = document.createElement('pre');
    var btn = document.createElement('button');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }
  
   let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
   document.body.appendChild(element);
  
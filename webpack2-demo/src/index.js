import _ from 'lodash';
function component() {
  var element = document.createElement('div');
   var button = document.createElement('button');
   var br = document.createElement('br');
  
   button.innerHTML = 'Click me and look at the console!';
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      element.appendChild(br);
      element.appendChild(button);

   // Note that because a network request is involved, some indication
   // of loading would needcd to be shown in a production-level site/app.
   button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
     var print = module.default;
     print();
   });
      return element;
    }
   let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
   document.body.appendChild(element);
  
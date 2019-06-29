// // import _ from 'lodash';

// //  import Print from './print';

//   function component() {
//     return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
      
//           const element = document.createElement('div');
//           element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//           return element;
//       }).catch(error => 'An error occurred while loading the component');
//   }

//   // document.body.appendChild(component());
//   getComponent().then(component => {
    
//        document.body.appendChild(component);
    
//    })
// var $ = require('jquery');
// var str = require('./hello.js');
import './css/style.css';
import './less/style.less';
console.log('这里是打包文件入口-index.js');
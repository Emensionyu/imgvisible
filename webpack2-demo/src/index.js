// import { file } from './globals.js';
require('exports-loader?file,parse=helpers.parse!./globals.js');
function component() {
  var element = document.createElement('div');
      element.innerHTML = join(['Hello', 'webpack'], ' ');
      //shim 预置全局变量
      console.log(file)

      return element;
    }
   let element = component(); 
   document.body.appendChild(element);
  
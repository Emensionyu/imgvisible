function component() {
  var element = document.createElement('div');
      element.innerHTML = join(['Hello', 'webpack'], ' ');
      //shim 预置全局变量
      return element;
    }
   let element = component(); 
   document.body.appendChild(element);
  
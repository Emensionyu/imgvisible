function component() {
  var element = document.createElement('div');
   var button = document.createElement('button');
   var br = document.createElement('br');
  
   button.innerHTML = 'Click me and look at the console!';
      element.appendChild(br);
      element.appendChild(button);
      return element;
    }
   let element = component(); 
   document.body.appendChild(element);
  
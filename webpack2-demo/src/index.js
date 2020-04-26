// // import 'babel-polyfill';
// // function component() {
// //   var element = document.createElement('div');
// //       element.innerHTML = join(['Hello', 'webpack'], ' ');
// //       //shim 预置全局变量
// //       return element;
// //     }
// //    let element = component(); 
// //    document.body.appendChild(element);
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //       .then(response => response.json())
// //       .then(json => {
// //         console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
// //         console.log(json)
// //       })
// //       .catch(error => console.error('Something went wrong when fetching this data: ', error))

// import _ from 'lodash';
// // if ('serviceWorker' in navigator) {
// //   window.addEventListener('load', () => {
// //     navigator.serviceWorker.register('/service-worker.js').then(registration => {
// //       console.log('SW registered: ', registration);
// //     }).catch(registrationError => {
// //       console.log('SW registration failed: ', registrationError);
// //     });
// //   });
// // }
import _ from 'lodash';
 function getComponent() {
  var button = document.createElement('button');
    var br = document.createElement('br');
    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

   // Note that because a network request is involved, some indication
   // of loading would need to be shown in a production-level site/app.

    return element;
  }
 
  document.body.appendChild(getComponent());
window.navigator.serviceWorker.register('/test.js').then(
    function () {
       console.log('注册成功')
     }).catch(err => {
       console.error("注册失败")
     })
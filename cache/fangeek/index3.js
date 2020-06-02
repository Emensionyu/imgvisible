function promiseAll(promises) {
    return new Promise(function(resolve, reject) {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('arguments must be an array'));
        }
        var resolvedCounter = 0;
        var promiseNum = promises.length;
        // var resolvedValues = new Array(promiseNum);
        for (var i = 0; i < promiseNum; i++) {
            (function(i) {
                Promise.resolve(promises[i]).then(function(value) {
                        return resolve('成功')
                    },
                    function(reason) {
                        resolvedCounter++
                        // resolvedValues[i] = value
                        if (resolvedCounter == promiseNum) {
                            return reject('失败')
                        }
                    }
                )
            })(i)
        }
    })
}
var p1 = new Promise((resolve, reject) => {
    // resolve('1')
    reject('1')
})
var p2 = new Promise((resolve, reject) => {
    // resolve('1')
    reject('1')

})
promiseAll([p1, p2]).then(res => { console.log(res) }).catch(err => { console.log(err) })
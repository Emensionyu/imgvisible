function deepClone(data) {
    let type = Object.prototype.toString.call(data)
    let obj
    if (type === '[object Array]') {
        obj = []
    } else if (type === '[object Object]') {
        obj = {}
    } else {
        return data
    }

    if (type === '[object Array]') {
        for (let i = 0; i < data.length; i++) {
            obj.push(deepClone(data[i]))
        }
    } else if (type === '[object Object]') {
        for (let key in data) {
            obj[key] = deepClone(data[key])
        }
    }
    return obj
}

var data = {
    temp1: 'ooo',
    temp2: [1, 2, 3],
    temp3: {
        a: [1, 2, 3],
        b: { i: 1 }
    }
}

console.log(deepClone(data))
function getUrlParams(url) {
    let hashstr = url.split('#')[1],
        hash
    if (hashstr.indexOf('?') !== 0) {
        hash = hashstr.slice(0, hashstr.indexOf('?'))
    }

    let str = url.split('?')[1],
        params = {}
    let paramsarr = str.split('&')
    for (let i = 0; i < paramsarr.length; i++) {
        let strarr = paramsarr[i].split('=')
        let key = strarr[0]
        let value = strarr[1]
        params[key] = value
    }
    params['hash'] = hash
    return params

}
console.log(getUrlParams('https://flowkit-rtc.baidu.com/#/join?r=IE0kIVc200A'))
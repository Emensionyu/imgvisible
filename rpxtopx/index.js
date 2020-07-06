const fs = require('fs');
const path = require('path')
const postcss = require('postcss');
const rpxtopx = require('postcss-rpxtopx');
const dir = path.resolve(__dirname, './components');
console.log(dir)
const files = fs.readdirSync(dir)
files.forEach(function(item) {
        // console.log(item)
        const itempath = path.resolve(dir, item)
        const acss = fs.readFileSync(itempath, 'utf8');
        // console.log(acss)
        const css = Px2Rpx(acss)
            // const css = postcss(rpxtopx()).process(acss).css;

        // console.log(css)
        fs.writeFileSync(itempath, css, err => {
            if (err) {
                throw err;
            }
        });
        // let stat=fs.lstatSync(dir,item)
        // if(stat.isDirectory()===true){

        // }
    })
    // const files = fs.readFileSync(, 'utf8');
    // const css = postcss(rpxtopx()).process(acss).css;

// fs.writeFile('main.css', css, err => {
//     if (err) {
//         throw err;
//     }
//     console.log('Css file written.');
// });

function Px2Rpx(convertBeforeVal) {


    const pxs = convertBeforeVal.match(/\d+(?=rpx)rpx/g);
    let convertDoneVal = '';

    for (var i = 0; i < pxs.length; i++) {
        splitCach = convertBeforeVal.split(pxs[i]);
        convertDoneVal += splitCach[0];
        convertDoneVal += getConvertNum(pxs[i]);
        convertBeforeVal = convertBeforeVal.replace(splitCach[0], '').replace(pxs[i], '');
    };
    // console.log(convertDoneVal)
    return convertDoneVal
        // for (var i = 0; i < CSS.length; i++) {
        //     if (CSS[i].checked) {
        //         var cssFn = CSSBeauty[$(CSS[i]).attr('value')];
        //         convertDoneDom.val(cssFn.apply(null, [convertDoneVal + convertBeforeVal, $(CSS[i]).attr('data-type')]));
        //     };
        // };
};

function getConvertNum(num, ) {
    num = num.match(/\d+/g)[0];
    // dw = $('#designWidth').val();
    return parseFloat((num * (750 / 750) / 2).toFixed(2)) + 'px';
}
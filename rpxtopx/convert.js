function Px2Rpx(convertBeforeVal) {


    const pxs = convertBeforeVal.match(/\d+(?=px)px/g);
    let convertDoneVal = '';

    for (var i = 0; i < pxs.length; i++) {
        splitCach = convertBeforeVal.split(pxs[i]);
        convertDoneVal += splitCach[0];
        convertDoneVal += getConvertNum(pxs[i], toUnit);
        convertBeforeVal = convertBeforeVal.replace(splitCach[0], '').replace(pxs[i], '');
    };
    // for (var i = 0; i < CSS.length; i++) {
    //     if (CSS[i].checked) {
    //         var cssFn = CSSBeauty[$(CSS[i]).attr('value')];
    //         convertDoneDom.val(cssFn.apply(null, [convertDoneVal + convertBeforeVal, $(CSS[i]).attr('data-type')]));
    //     };
    // };
};

function getConvertNum(num, toUnit) {
    num = num.match(/\d+/g)[0];
    dw = $('#designWidth').val();

    if (toUnit == 'rpx') {
        return parseFloat((num * (750 / dw) * 2).toFixed(2)) + 'rpx';
    } else {
        return parseFloat((num * (dw / 750) / 2).toFixed(2)) + 'px';
    };
}
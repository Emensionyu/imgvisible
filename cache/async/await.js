function sleep(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(' enough sleep~');
        }, second);
    })
}

function normalFunc() {
    console.log('normalFunc');
}
async function awaitDemo() {
    await normalFunc();
    console.log('something, ~~');
    let result = await sleep(2000);
    console.log(result); // 两秒之后会被打印出来
}
awaitDemo();
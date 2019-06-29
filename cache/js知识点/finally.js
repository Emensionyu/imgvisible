function foo(){
    try{
        return 42
    }
    finally{
        //没有返回语句，所以没有覆盖
    }
}

function foo2(){
    try{
        return 42
    }
    finally{
        //覆盖前面的　return 42
        return;
    }
}

function foo3(){
    try{
        return 42
    }
    finally{
        return "hello";
        //覆盖前面的　return 42
    }
}

console.log(foo())
console.log(foo2())
console.log(foo3())


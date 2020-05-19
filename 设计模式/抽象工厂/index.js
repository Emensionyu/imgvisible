// 抽象工厂方法
function AbstractFactoryGirlFriend(child, parent) {
    if (typeof AbstractFactoryGirlFriend[parent] === 'function') {
        function F() {}
        F.prototype = new AbstractFactoryGirlFriend[parent]()
        child.constructor = parent
        parent.prototype = new F()

        // NorthGirl.prototype=new F();
        //  F.prototype=function(){this.position = 'north';this.author = '小何'}

    } else {
        throw new Error('不能创建该抽象类')
    }
}
// 定义抽象类的结构
// 北方姑娘抽象类
AbstractFactoryGirlFriend.NorthGirl = function() {
    this.position = 'north'
    this.author = '小何'
}
AbstractFactoryGirlFriend.NorthGirl.prototype = {
    northFeature() {
        return new Error('抽象方法不能调用')
    },
    myFeature() {
        return new Error('抽象方法不能调用')
    }
}

// 南方姑娘抽象类
// AbstractFactoryGirlFriend.SouthGirl = function() {
//     this.position = 'south'
// }
// AbstractFactoryGirlFriend.SouthGirl.prototype = {
//         southFeature() {
//             return new Error('抽象方法不能调用')
//         },
//         myFeature() {
//             return new Error('抽象方法不能调用')
//         }
// }
// 定义具体的类如下
// 北方姑娘: 东北的小姐姐
function NorthEastGirl(name, cup, customize) {
    this.category = '东北'
    this.name = name
    this.cup = cup
    this.customize = customize
}
// AbstractFactoryGirlFriend(NorthEastGirl, 'NorthGirl')
NorthEastGirl.prototype.northFeature = function() {
    return `我的名字是${this.name}, 我是个${this.category}姑娘，我的cup是${this.cup}`
}
NorthEastGirl.prototype.myFeature = function() {
    return JSON.stringify(this.customize)
}

// // 北方姑娘: 西北的小姐姐
// function NorthWestGirl(name, cup, customize) {
//     this.category = '西北'
//     this.name = name
//     this.cup = cup
//     this.customize = customize
// }
// AbstractFactoryGirlFriend(NorthWestGirl, 'SouthGirl')
// NorthWestGirl.prototype.northFeature = function() {
//     return `我的名字是${this.name}, 我是个${this.category}姑娘，我的cup是${this.cup}`
// }
// NorthWestGirl.prototype.myFeature = function() {
//     return JSON.stringify(this.customize)
// }

const TanNorthEastGirl = new NorthEastGirl('小谭女朋友', '36D', { beer: '随便灌', liquor: '五斤半' })
console.log(TanNorthEastGirl.northFeature())
console.log(TanNorthEastGirl.myFeature())
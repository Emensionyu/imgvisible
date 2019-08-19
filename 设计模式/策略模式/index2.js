// javascrirpt 的策略
var strategy={
    'S':function(salary){
        return salary*4
    },
    'A':function(salary){
        return salary*2
    },
    'B':function(salary){
        return salary
    },

}
var calculateBonus=function(level,salary){
    return strategy[level](salary)
}
console.log(calculateBonus('S',20000))
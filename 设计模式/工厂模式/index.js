function GirlFriend(name, age, cup, hobby, birthplace, eatType) {
    this.name = name;
    this.age = age;
    this.cup = cup;
    this.hobby = hobby;
    this.birthplace = birthplace;
    this.eatType = eatType
}

function FactoryGirlFriend(name, age, cup, hobby, birthplace) {
    let eatType = '';
    switch (birthplace) {
        case 'chongqing':
            eatType = '吃辣，辣的一匹';
            break;
        case 'guangzhou':
            eatType = '吃清淡，喝粥喝茶';
            break;
        case 'fuzhou':
            eatType = '沙县，闽南菜';
            break;
    }
    return new GirlFriend(name, age, cup, hobby, birthplace, eatType);
}
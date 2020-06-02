function counter() {
    var start = Date.now()
    this.num = 0
    this.timer1 = setInterval(() => {
        this.num++
            var gap = Date.now() - start
        console.log('t1', this.num, gap)
    }, 900)
    JSON.parse('{"desc":"ppppppppp"}')
    JSON.parse('{"desc":"ppppppppp"}')


    this.timer2 = setTimeout(() => {
        this.num++
            var gap = Date.now() - start
        console.log('t2', this.num, gap)
    }, 0);
}
counter()
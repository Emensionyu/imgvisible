var jdData = 3;
var option = {
    title: {
        text: "惰性加载，设计模式，抽象工厂，react事件合成",
        right: "45%",
        bottom: "25%",
        textStyle: {
            color: "#fff",
            fontSize: 24,
            fontWeight: "normal"
        }
    },
    series: [{
        type: 'liquidFill',
        animation: true,
        waveAnimation: true,
        data: [0.75, 0.70],
        color: [weakColor(s2Data), weakColor(s2Data)],
        amplitude: 8,
        radius: '80%',
        label: {
            normal: {
                formatter: function() {
                    return s2Data;
                },
                textStyle: {
                    fontSize: 48,
                    color: '#fff',
                    fontWeight: "normal"
                },
                position: ['50%', '50%']
            }
        },
        outline: {
            itemStyle: {
                borderColor: '#aaa4a4',
                borderWidth: 1,
                color: 'none',
                shadowBlur: 0,
                shadowColor: "#fff"
            },
            borderDistance: 0
        },
        itemStyle: {
            normal: {
                backgroundColor: '#fff',
                shadowBlur: 0,
                shadowColor: "#fff"
            }
        },
        backgroundStyle: {
            color: '#fff'
        }
    }]
};
//实时AQI波浪的另一个颜色
function weakColor(s2Data) {
    var color = s2Data > 0 && s2Data <= 5 ? "rgba(97,216,0,.7)" :
        s2Data > 5 && s2Data <= 10 ? "rgba(204,178,26,.7)" :
        s2Data > 10 && s2Data <= 15 ? "rgba(245,166,35,.7)" :
        s2Data > 15 && s2Data <= 20 ? "rgba(241,47,28,.7)" :
        s2Data > 20 && s2Data <= 25 ? "rgba(156,13,113,.7)" :
        s2Data > 25 ? "rgba(99,4,69,.7)" : "#C7C7CB";
    return color;
}
export default option
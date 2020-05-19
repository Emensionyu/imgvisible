function component() {
    var element = document.createElement('div');
    element.setAttribute('id', 'main');
    element.style.width = '600px';
    element.style.height = '600px'
    return element;
}
document.body.appendChild(component());
import echarts from 'echarts';
import 'echarts-liquidfill';
import option from '../config/option'

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption(option);
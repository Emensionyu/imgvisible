const { option } = require('./option.js')
const echarts = require('echarts')
var myChart = echarts.init(document.getElementById('main'));
myChart.setOption(option);
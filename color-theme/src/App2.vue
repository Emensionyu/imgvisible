<script>
export default {
  name:'App1',
  data(){
    console.log("App:data(from App)")
    return {
      name:'App2',
    }
  },
  mounted(){
    console.log('App:mounted(from App)')
  },
  methods:{
    from(){
      return 'App3'
    }
  },
  render:h=>h('h1')
}
</script>
// vue 全局混入，data,methods会合并，冲突的键使用组件的
// 生命周期会合并为一个数据，先输出混入的再输出组件的
// new 一个vue实例进行数据监听（data处理），模板渲染（render处理），将vue实例挂载到
// dom 节点上，渲染模板通过render函数渲染模板，挂载vue实例，mounted处理


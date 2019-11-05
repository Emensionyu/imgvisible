import Vue from 'vue'
import Router from 'vue-router'
import example from '@/components/myexample/example'
// import example from '/home/mensionyu/Desktop/workspace/code/dev/bi/bi/modules/components/chart/design/color-picker/example'
import cover from '@/components/relation-diagram/cover-list'


Vue.use(Router)

export default new Router({
  routes: [
    //color-picker的组件实例
    {
      path: '/example',
      name: 'example',
      component: example
    },
    //对象关系图的组件实例
    {
      path: '/cover',
      name: 'cover',
      component: cover
    }
  ]
})

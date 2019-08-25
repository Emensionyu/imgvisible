import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import example from '@/components/myexample/example'
// import example from '/home/mensionyu/Desktop/workspace/code/dev/bi/bi/modules/components/chart/design/color-picker/example'
import ORexample from '@/components/object-relation'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/example',
      name: 'example',
      component: example
    },
    {
      path: '/ORexample',
      name: 'ORexample',
      component: ORexample
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import bezier from '@/components/bezier'
import line from '@/components/line'
import clip from '@/components/clip'
import compose from '@/components/compose'
import colorfill from '@/components/colorfill'
import slot from '@/view/slot'
import phoneNumber from '@/view/phone-number'
import nextTick from '@/components/vuedemo/nextTick'
import slot2 from '@/components/vuedemo/slot'
Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/line',
      name: 'line',
      component: line
      // beforeEnter: (to, from, next) => {
      //   // ...
      //   console.log("beforeEnter line路由独享守卫")
      //   next()
      // }
    },
    {
      path: '/bezier',
      name: 'bezier',
      component: bezier
    },
    {
      path: '/clip',
      name: 'clip',
      component: clip
    },
    {
      path: '/compose',
      name: 'compose',
      component: compose
    },
    {
      path: '/colorfill',
      name: 'colorfill',
      component: colorfill
    },
    {
      path: '/slot',
      name: 'slot',
      component: slot
    },
    {
      path: '/phoneNumber',
      name: 'phoneNumber',
      component: phoneNumber
    },
    //key 为 index 
    {
      path: '/nextTick',
      name: 'nextTick',
      component: nextTick
    },
    {
      path: '/slot2',
      name: 'slot2',
      component: slot2
    }
  ]
})
// router.beforeEach((to, from, next) => {
  // if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // console.log(" beforeEach全局前置守卫来了")
    // console.log(this.$router)
    // debugger

    // console.log("params"+this.$router.params.id)
    // next()
    // $router.mached 数组保存了当前路由记录和父路由记录

  //   if (!auth.loggedIn()) {
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath }
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next() // 确保一定要调用 next()
  // }
// })

// // router.beforeEach((to, from, next) => {
// //   // ...
 
// //   next()
// //   console.log(" beforeEach全局前置守卫来了")
// // })
// router.beforeResolve((to,from,next)=>{
//   //在所有的组件内守卫和异步路由组件被解析之后 解析守卫就被调用
//   console.log("beforeResolve全局解析守卫")
//   next()
// })
// // beforeResolve next()以后 导航被确认了
// router.afterEach((to, from) => {
//   // ...
//   console.log("afterEach全局后置钩子来了")

// })
export default router

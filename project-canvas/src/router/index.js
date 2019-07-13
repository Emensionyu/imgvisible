import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bezier from '@/components/bezier'
import line from '@/components/line'
import clip from '@/components/clip'
import compose from '@/components/compose'
import foo from '@/components/router/foo'
import bar from '@/components/router/bar'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: (to, from, next) => {
        // ...
        console.log("beforeEnter路由独享守卫")
        next()
      }
    },
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
      path: '/foo?q',
      component: foo,
      meta:{hello:true},
      // children: [
      //   {
      //     path: 'bar',
      //     component: bar,
      //     // a meta field
      //     meta: { requiresAuth: true }
      //   }
      // ]
      // redirect:to=>{
      //   const {hash,params,query}=to
      //   console.log(hash+"hash")
      //   console.log(JSON.stringify(params)+"params")
      //   console.log(JSON.stringify(query)+"query")
      //   return "/bar"
        
      // }
    },
    // { path: '/foo/:id', component: foo }

  ]
})
router.beforeEach((to, from, next) => {
  // if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log(" beforeEach全局前置守卫来了")
    console.log(this.$router)
    debugger

    console.log("params"+this.$router.params.id)
    next()
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
})

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

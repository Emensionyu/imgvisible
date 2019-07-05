import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bezier from '@/components/bezier'
import line from '@/components/line'
import clip from '@/components/clip'
import compose from '@/components/compose'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/line',
      name: 'line',
      component: line
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
    }
  ]
})

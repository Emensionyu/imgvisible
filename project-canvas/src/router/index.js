import Vue from 'vue'
import Router from 'vue-router'
import bezier from '@/components/bezier'
import line from '@/components/line'
import clip from '@/components/clip'
import compose from '@/components/compose'
import colorfill from '@/components/colorfill'

Vue.use(Router)

export default new Router({
  routes: [
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
    },
    {
      path: '/colorfill',
      name: 'colorfill',
      component: colorfill
    }
  ]
})

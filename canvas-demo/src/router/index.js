import Vue from 'vue'
import Router from 'vue-router'
import father from '@/components/father'
import v_for from '@/components/v_for'
import customInput from '@/components/event/custom-input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: father
    },
    {
      path: '/event',
      name: 'customInput',
      component: customInput
    },
    
    
  ],

})

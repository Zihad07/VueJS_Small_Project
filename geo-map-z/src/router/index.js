import Vue from 'vue'
import Router from 'vue-router'
import Gmap from '@/components/Home/Gmap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gmap',
      component: Gmap
    }
  ]
})

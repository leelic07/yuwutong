import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CommodityManagement from '@/components/Content/Content'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
    {
      path:'/commodity_management',
      name:'CommodityManagement',
      component:CommodityManagement
    }
  ]
})

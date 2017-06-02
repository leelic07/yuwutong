import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CommodityManagement from '@/components/Commodity/Commodity_Management'
import CommodityEdit from '@/components/Commodity/Commodity_Edit'
import Login from '@/components/login/login'

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
      component:CommodityManagement,
      children:[
        {
          path:'/commodity_management/edit',
          component:CommodityEdit
        }
      ]
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'*',
      redirect:'/login'
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login/login'
import Index from '@/components/Index/Index.vue'

import CommodityManagement from '@/components/Commodity/commodity_management'
import CommodityEdit from '@/components/Commodity/commodity_edit'
import FamilyOrder from '@/components/Commodity/family_order'
import FamilyOrderDetail from '@/components/Commodity/family_order_detail'

import MessageManagement from '@/components/Message/message_management'
import LawsManagement from '@/components/Message/laws_management'
import LawsAdd from '@/components/Message/laws_add'
import AffairsManagement from '@/components/Message/prison_affairs_management'

import FamilyRegistManagement from '@/components/Examine/family_registration_management'
import MeetApplyManagement from '@/components/Examine/meeting_applycation_management'
import PrisonerAccountManagement from '@/components/Examine/prisoner_account_management'
import PrisonerInfoManagement from '@/components/Examine/prisoner_information_management'
import FamilyInfoManagement from '@/components/Examine/family_information_management'
import WardenMailBox from '@/components/Examine/warden_mailbox'
import MailDetail from '@/components/Examine/mail_detail'

Vue.use(Router)

export default new Router({
  routes: [
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
      path:'/family_order',
      component:FamilyOrder,
      children:[
        {
          path:'/family_order/detail/:orderId',
          component:FamilyOrderDetail
        }
      ]
    },

    {
      path:'/message_management',
      component:MessageManagement
    },
    {
      path:'/laws_management',
      component:LawsManagement
    },
    {
      path:'/laws_add',
      component:LawsAdd
    },
    {
      path:'/prison_affairs_management',
      component:AffairsManagement
    },

    {
      path:'/family_registration_management',
      component:FamilyRegistManagement
    },
    {
      path:'/meeting_applycation_management',
      component:MeetApplyManagement
    },
    {
      path:'/prisoner_account_management',
      component:PrisonerAccountManagement
    },
    {
      path:'/prisoner_information_management',
      component:PrisonerInfoManagement
    },
    {
      path:'/family_information_management',
      component:FamilyInfoManagement
    },
    {
      path:'/warden_mailbox',
      component:WardenMailBox,
      children:[
        {
          path:'/warden_mailbox/detail/:mailId',
          component:MailDetail
        }
      ]
    },

    {
      path:'/login',
      component:Login
    },
    {
      path:'/index',
      component:Index
    },
    {
      path:'*',
      redirect:'/login'
    }
  ]
})

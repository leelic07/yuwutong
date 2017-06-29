// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Filters from '../static/dist/js/filter.js'
//富文本编辑器 vue-kindeditor
import VueKindEditor from 'vue-kindeditor'
import 'kindeditor/kindeditor-all-min.js'
//import 'kindeditor/themes/default/default.css'

//关闭生产模式下给出的提示
Vue.config.productionTip = false

//注册 vue-kindeditor plugin
Vue.use(VueKindEditor)

//声明过滤器
Object.keys(Filters).forEach((key)=>Vue.filter(key,Filters[key]));


// axios.defaults.baseURL = 'http://10.10.10.2/var/run/mysqld/mysqld.sock';
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';

axios.defaults.baseURL = 'http://10.10.10.132:3000/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

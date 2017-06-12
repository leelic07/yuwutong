// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Filters from '../static/dist/js/filter.js'

Vue.config.productionTip = false

console.log(Filters);

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

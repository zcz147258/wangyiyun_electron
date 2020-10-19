/*
 * @Descripttion: 
 * @Author: mikasa
 * @Date: 2020-10-06 16:32:42
 */
import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
//引入进度条插件
import 'ant-design-vue/dist/antd.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
//表格插件
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
 
Vue.use(VXETable)
// import style
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.use(Antd);
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

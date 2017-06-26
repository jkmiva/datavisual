import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouer from 'vue-router'
import column from 'components/column'
import point from 'components/point'
import line from 'components/line'
import dashboard from 'components/dashboard'
import multipleColumn from 'components/multipleColumn'
import {DatePicker} from 'element-ui'

Vue.use(DatePicker)
Vue.use(VueRouer)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769']
  }
});
const router = new VueRouer({
  routes: [{
    path: '/column',
    component: column
  }, {
    path: '/point',
    component: point
  }, {
    path: '/dashboard',
    component: dashboard,
    alias: '/'
  }, {
    path: '/multipleColumn',
    component: multipleColumn
  }, {
    path: '/line',
    component: line
  }]
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  data: {
    charts: []  // not used, reserved
  }
})
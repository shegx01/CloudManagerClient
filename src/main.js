import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/styles.css'
// echarts installation

import Echarts from 'vue-echarts'

Vue.config.productionTip = false

Vue.component('v-echart', Echarts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

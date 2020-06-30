import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/styles.css'

// echarts installation
import Echarts from 'vue-echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'

Vue.config.productionTip = false

Vue.component('v-chart', Echarts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/styles.css'

// echarts installation
import Echarts from 'vue-echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'

// elementUI import
import { Table, TableColumn } from 'element-ui'

Vue.config.productionTip = false
Vue.use(Table)
Vue.use(TableColumn)
Vue.component('v-chart', Echarts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

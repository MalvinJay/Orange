// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import VueMoment from 'vue-moment'
import components from './components'
import VueSession from 'vue-session'
import IdleVue from 'idle-vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'element-ui/lib/theme-chalk/base.css'
import locale from 'element-ui/lib/locale/lang/en'
import './assets/styles/element-variables.scss'
import '@/assets/styles/app.scss'
import 'bootstrap'  
import 'bootstrap/dist/css/bootstrap.min.css'

import '../static/now-ui-kit/assets/css/now-ui-kit.css'

Vue.use(VueSession)
Vue.use(ElementUI, {locale})
Vue.use(VueMoment)
Vue.component(components)

const eventsHub = new Vue()
Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 900000,
  store
})

Vue.filter('money', function (value, currency, options) {
  try {
    value = parseFloat(Math.round(value * 100) / 100).toFixed(2)
  } catch (error) {
    return null
  }
  let symbol = ''
  options = options || {}
  currency = currency || 'GHS'
  if (currency === 'GHS') {
    // symbol = '\u20B5'
    symbol = 'GHS'
  }
  if (options.symbol === 'text') {
    symbol = 'GHS'
  }
  value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return `${symbol} ${value}`
})

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
})

Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import couriers from '@/pages/Couriers/store/couriers-store'
import vehicles from '@/pages/Vehicles/store/vehicles-store'
import deliveries from '@/pages/Deliveries/store/deliveries-store'

Vue.use(Vuex)
Vue.config.devtools = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
    modules: {
      user,
      couriers,
      vehicles,
      deliveries
    }
  })
  
import {
    COURIERS_FETCH, UPDATE_COURIER, SET_COURIERS, SET_COURIERS_STATE, SET_COURIERS_META, SET_COURIERS_FILTERS, CREATE_COURIER, DELETE_COURIER
  } from './couriers-store-constants'
  import { GET_BASE_URI } from '@/store/constants'
  import { apiCall } from '@/store/apiCall'
  import Utils from '@/utils/services'
  
  // state
  const state = {
    couriers: {
      data: [],
      meta: {},
      errors: [],
      state: 'DATA',
      filters: {},
      sortParams: {param: 'updated_at', order: 'DESC'}
    },
    currentCourier: {
      data: {},
      state: 'LOADING'
    }
  }
  
  // getters
  const getters = {
    couriers: state => state.couriers.data,
    couriersFilters: state => state.couriers.filters,
    couriersMeta: state => state.couriers.meta,
    couriersSortParams: state => state.couriers.sortParams,
    couriersState: state => state.couriers.state
  }
  
  // mutations
  const mutations = {
    [SET_COURIERS] (state, payload) {
      state.couriers.state = 'DATA'
      state.couriers.data = payload
    },
    [SET_COURIERS_STATE] (state, data) {
      state.couriers.state = data
    },
    [SET_COURIERS_META] (state, data) {
      let meta = {
        // total: data.total,  
        total: data.total_filtered,
        limit: data.limit | 12,
        page: data.page | 1,
      }
      state.couriers.meta = meta
    },
    [SET_COURIERS_FILTERS] (state, data) {
      state.couriers.filters = data
    }
  }
  
  // actions
  const actions = {
    [COURIERS_FETCH] ({ state, commit, rootGetters }, {page = 1, cache = true } = {}) {
      var filters = state.couriers.filters
      var query = ''
      if (Utils.empty(filters)) {
        query = `?page=${page}&limit=12`
      } else {
        query = Utils.createQueryParams(filters, page)
      }
      commit(SET_COURIERS_STATE, 'LOADING')
      commit(SET_COURIERS_FILTERS, filters)

      if (cache && state.couriers.data.length !== 0) {
        commit(SET_COURIERS_STATE, 'DATA')
      } else {
        return new Promise((resolve, reject) => {
          apiCall({
            url: `${GET_BASE_URI}v1/couriers/list.json${query}`,
            method: 'GET',
            token: rootGetters.token
          }).then((response) => {
            commit(SET_COURIERS_STATE, 'DATA')
            commit(SET_COURIERS, response.data.couriers.records)
            commit(SET_COURIERS_META, response.data.couriers)
            resolve(response)
          }).catch((error) => {
            commit(SET_COURIERS_STATE, 'ERROR')
            console.log(error)
            reject(error)
          })
        })
      }
    },
    [SET_COURIERS_FILTERS] ({ state, commit, rootGetters, dispatch }, filters) {
      commit(SET_COURIERS_FILTERS, filters)
      dispatch('getCouriers', {page: 1, cache: false})
    },
    [CREATE_COURIER] ({ state, commit, rootGetters }, courier) {
      return new Promise((resolve, reject) => {
        apiCall({
          url: `${GET_BASE_URI}v1/couriers/register.json`,
          method: 'POST',
          token: rootGetters.token,
          data: courier
        }).then((response) => {
          resolve(response)
        }).catch((error) => {
          console.log(error)
          reject(error)
        })
      })
    },
    [UPDATE_COURIER] ({ state, commit, rootGetters }, courier) {
      return new Promise((resolve, reject) => {
        apiCall({
          url: `${GET_BASE_URI}v1/couriers/register.json`,
          method: 'PUT',
          token: rootGetters.token,
          data: courier
        }).then((response) => {
          resolve(response)
        }).catch((error) => {
          console.log(error)
          reject(error)
        })
      })
    },    
    [DELETE_COURIER] ({ rootGetters }, msisdn) {
      return new Promise((resolve, reject) => {
        apiCall({
          url: `${GET_BASE_URI}v1/users.json?msisdn=${msisdn}`,
          method: 'DELETE',
          token: rootGetters.token
        }).then((response) => {
          resolve(response)
        }).catch(error => {
          reject(error)
          return error
        })
      })
    },  
  }
  
  export default {
    state,
    getters,
    mutations,
    actions
  }
  
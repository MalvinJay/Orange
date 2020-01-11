import {
    VEHICLES_FETCH, VEHICLE_LIST_TYPES, UPDATE_VEHICLE, SET_VEHICLES, SET_VEHICLES_STATE, 
    SET_VEHICLES_META, SET_VEHICLES_FILTERS, CREATE_VEHICLE, DELETE_VEHICLE, SET_VEHICLE_LIST_TYPES
  } from './vehicles-store-constants'
  import { GET_BASE_URI } from '@/store/constants'
  import { apiCall } from '@/store/apiCall'
  import Utils from '@/utils/services'
  
  // state
  const state = {
    vehicles: {
      data: [],
      meta: {},
      errors: [],
      state: 'DATA',
      filters: {},
      sortParams: {param: 'updated_at', order: 'DESC'}
    },
    currentVehicle: {
      data: {},
      state: 'LOADING'
    },
    vehicleListTypes: []
  }
  
  // getters
  const getters = {
    vehicles: state => state.vehicles.data,
    vehiclesFilters: state => state.vehicles.filters,
    vehiclesMeta: state => state.vehicles.meta,
    vehiclesSortParams: state => state.vehicles.sortParams,
    vehiclesState: state => state.vehicles.state,
    vehicleListTypes: state => state.vehicleListTypes
  }
  
  // mutations
  const mutations = {
    [SET_VEHICLES] (state, payload) {
      state.vehicles.state = 'DATA'
      state.vehicles.data = payload
    },
    [SET_VEHICLES_STATE] (state, data) {
      state.vehicles.state = data
    },
    [SET_VEHICLES_META] (state, data) {
      let meta = {
        total: data.total_filtered,
        limit: data.limit | 12,
        page: data.page | 1,
      }
      state.vehicles.meta = meta
    },
    [SET_VEHICLES_FILTERS] (state, data) {
      state.vehicles.filters = data
    },
    [SET_VEHICLE_LIST_TYPES] (state, data) {
      state.vehicleListTypes = data
    }    
  }
  
  // actions
  const actions = {
    [VEHICLES_FETCH] ({ state, commit, rootGetters }, {page = 1, cache = true } = {}) {
      var filters = state.vehicles.filters
      var query = ''
      if (Utils.empty(filters)) {
        query = `?page=${page}&limit=12`
      } else {
        query = Utils.createQueryParams(filters, page)
      }
      commit(SET_VEHICLES_STATE, 'LOADING')
      commit(SET_VEHICLES_FILTERS, filters)

      if (cache && state.vehicles.data.length !== 0) {
        commit(SET_VEHICLES_STATE, 'DATA')
        return
      } else {
        return new Promise((resolve, reject) => {
          apiCall({
            url: `${GET_BASE_URI}v1/vehicles/list.json${query}`,
            method: 'GET',
            token: rootGetters.token
          }).then((response) => {
            commit(SET_VEHICLES_STATE, 'DATA')
            commit(SET_VEHICLES, response.data.vehicles.records)
            commit(SET_VEHICLES_META, response.data.vehicles)
            resolve(response)
          }).catch((error) => {
            commit(SET_VEHICLES_STATE, 'ERROR')
            console.log(error)
            reject(error)
          })
        })
      }
    },
    [VEHICLE_LIST_TYPES] ({ state, commit, rootGetters }, {cache = true} = {}) {
      if (cache && state.vehicleListTypes.length !== 0) {
        return
      } else {
        return new Promise((resolve, reject) => {
          apiCall({
            url: `${GET_BASE_URI}v1/vehicles/types-list.json`,
            method: 'GET',
            token: rootGetters.token
          }).then((response) => {
            console.log('Vehicles List: ', response.data)
            commit(SET_VEHICLE_LIST_TYPES, response.data)
            resolve(response)
          }).catch((error) => {
            console.log(error)
            reject(error)
          })
        })
      }
    },    
    [SET_VEHICLES_FILTERS] ({ state, commit, rootGetters, dispatch }, filters) {
      commit(SET_VEHICLES_FILTERS, filters)
      dispatch('getVehicles', {page: 1, cache: false})
    },
    [CREATE_VEHICLE] ({ state, commit, rootGetters }, vehicle) {
      return new Promise((resolve, reject) => {
        apiCall({
          url: `${GET_BASE_URI}v1/vehicles/register`,
          method: 'POST',
          token: rootGetters.token,
          data: vehicle
        }).then((response) => {
          resolve(response)
        }).catch((error) => {
          console.log(error)
          reject(error)
        })        
    })
    },
    [UPDATE_VEHICLE] ({ state, commit, rootGetters }, vehicle) {
      return new Promise((resolve, reject) => {
        apiCall({
          url: `${GET_BASE_URI}v1/vehicles/register.json`,
          method: 'PUT',
          token: rootGetters.token,
          data: vehicle
        }).then((response) => {
          resolve(response)
        }).catch((error) => {
          console.log(error)
          reject(error)
        })
      })
    },    
    [DELETE_VEHICLE] ({ rootGetters }, msisdn) {
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
  
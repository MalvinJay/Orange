import {
    TICKETS_FETCH, GET_CURRENT_TICKET, SET_CURRENT_TICKET, SET_CURRENT_TICKET_STATE, 
    UPDATE_TICKET, SET_TICKETS, SET_TICKETS_STATE, SET_TICKETS_META, SET_TICKETS_FILTERS, CREATE_TICKET, 
    DELETE_TICKET, SEARCH_TICKETS
  } from './deliveries-store-constants'
  import { GET_BASE_URI } from '@/store/constants'
  import { apiCall } from '@/store/apiCall'
  import Utils from '@/utils/services'
  
  // state
  const state = {
    tickets: {
      data: [],
      meta: {},
      errors: [],
      state: 'DATA',
      filters: {},
      sortParams: {param: 'updated_at', order: 'DESC'}
    },
    currentTicket: {
      data: {},
      state: 'LOADING'
    }
  }
  
  // getters
  const getters = {
    tickets: state => state.tickets.data,
    ticketsFilters: state => state.tickets.filters,
    ticketsMeta: state => state.tickets.meta,
    ticketsSortParams: state => state.tickets.sortParams,
    ticketsState: state => state.tickets.state,
    currentTicket: state => state.currentTicket.data,
    currentTicketState: state => state.currentTicket.state
  }
  
  // mutations
  const mutations = {
    [SET_TICKETS] (state, payload) {
      state.tickets.state = 'DATA'
      state.tickets.data = payload
    },
    [SET_TICKETS_STATE] (state, data) {
      state.tickets.state = data
    },
    [SET_TICKETS_META] (state, data) {
      let meta = {
        total: data.total_filtered,
        limit: data.limit | 12,
        page: data.page | 1,
      }
      state.tickets.meta = meta
    },
    [SET_TICKETS_FILTERS] (state, data) {
      state.tickets.filters = data
    },
    [SET_CURRENT_TICKET] (state, data) {
      state.currentTicket.data = data
    },
    [SET_CURRENT_TICKET_STATE] (state, data) {
      state.currentTicket.state = data
    },    
  }
  
  // actions
  const actions = {
    [TICKETS_FETCH] ({ state, commit, rootGetters }, {page = 1, cache = true } = {}) {
      var filters = state.tickets.filters
      var query = ''
      if (Utils.empty(filters)) {
        query = `?page=${page}&limit=12`
      } else {
        query = Utils.createQueryParams(filters, page)
      }
      commit(SET_TICKETS_STATE, 'LOADING')
      commit(SET_TICKETS_FILTERS, filters)

      if (cache && state.tickets.data.length !== 0) {
        commit(SET_TICKETS_STATE, 'DATA')
      } else {
        return new Promise((resolve, reject) => {
          apiCall({
            url: `${GET_BASE_URI}v1/web-portal/delivery-request/list.json${query}`,
            method: 'GET',
            token: rootGetters.token
          }).then((response) => {
            commit(SET_TICKETS_STATE, 'DATA')
            commit(SET_TICKETS, response.data.delivery_requests.records)
            commit(SET_TICKETS_META, response.data.delivery_requests)
            resolve(response)
          }).catch((error) => {
            commit(SET_TICKETS_STATE, 'ERROR')
            console.log(error)
            reject(error)
          })
        })
      }
    },
    [GET_CURRENT_TICKET] ({ state, commit, rootGetters }, id) {
      commit(SET_TICKETS_STATE, 'LOADING')

      // if (cache && Utils.present(state.currentTicket.data)) {
      //   commit(SET_CURRENT_TICKET_STATE, 'DATA')
      //   commit(SET_TICKETS_STATE, 'DATA')
      // } else {
        return new Promise((resolve, reject) => {
          apiCall({
            url: `${GET_BASE_URI}v1/web-portal/delivery-request/list.json?ref=${id}`,
            method: 'GET',
            token: rootGetters.token
          }).then((response) => {
            // commit(SET_CURRENT_TICKET_STATE, 'DATA')
            commit(SET_TICKETS_STATE, 'DATA')
            let newArray = [];
            response.data.delivery_requests.records.map((el)=>{
              if(el.id === id)
                newArray.push(el)
            })
            console.log('New Record Array: ', newArray[0])
            commit(SET_CURRENT_TICKET, newArray[0])
            resolve(response)
          }).catch((error) => {
            // commit(SET_CURRENT_TICKET_STATE, 'ERROR')
            commit(SET_TICKETS_STATE, 'ERROR')
            console.log(error)
            reject(error)
          })
        })
      // }
    },    
    [SET_TICKETS_FILTERS] ({ state, commit, rootGetters, dispatch }, filters) {
      commit(SET_TICKETS_FILTERS, filters)
      dispatch('gettickets', {page: 1, cache: false})
    },
    [CREATE_TICKET] ({ state, commit, rootGetters }, ticket) {
      return new Promise((resolve, reject) => {
        apiCall({
          url: `${GET_BASE_URI}v1/web-portal/delivery-request.json`,
          method: 'POST',
          token: rootGetters.token,
          data: ticket
        }).then((response) => {
          resolve(response)
        }).catch((error) => {
          console.log(error)
          reject(error)
        })
      })
    },
    [UPDATE_TICKET] ({ state, commit, rootGetters }, ticket) {
      return new Promise((resolve, reject) => {
        apiCall({
          url: `${GET_BASE_URI}v1/web-portal/delivery-request.json`,
          method: 'PUT',
          token: rootGetters.token,
          data: ticket
        }).then((response) => {
          resolve(response)
        }).catch((error) => {
          console.log(error)
          reject(error)
        })
      })
    },    
    [DELETE_TICKET] ({ rootGetters }, reference) {
      return new Promise((resolve, reject) => {
        apiCall({
          url: `${GET_BASE_URI}v1/web-portal/delivery-request?id=${reference}`,
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
    [SEARCH_TICKETS] ({state, commit, rootGetters}, search) {
      return new Promise((resolve, reject) => {
        apiCall({
          url: `${GET_BASE_URI}v1/web-portal/delivery-request/list.json?search=${search}`,
          method: 'GET',
          token: rootGetters.token
        }).then((response) => {
          resolve(response)
        }).catch(error => {
          reject(error)
          return error
        })
      })      
    }
  }
  
  export default {
    state,
    getters,
    mutations,
    actions
  }
  
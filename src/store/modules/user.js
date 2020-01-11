import { AUTH_REQUEST, SET_TOKEN, SIGNUP, GET_CLIENT, SET_PAGE_LOADING, SET_TEST, SET_CLIENT,SET_PERMISSIONS, LOGIN, SEND_EMAIL, UPDATE_PROFILE, LOGOUT, SET_CLIENT_CRED, SET_BALANCE, GET_BALANCE, RESET_PASSWORD } from './user-store-constants'
  import { GET_BASE_URI} from '../constants'
  import { apiCall } from '../apiCall'
  import axios from 'axios'
  import Utils from '../../utils/services'
  
  const user = {
  // state
    state: {
      user: {
        data: {
          email: localStorage.getItem('email'),
          username: localStorage.getItem('username'),
        },
        token: localStorage.getItem('token'),
        client_id: localStorage.getItem('client_id'),
        client_secret: localStorage.getItem('client_secret')
      },
      userdata: {},
      client: {},
      logIn: localStorage.getItem('login'),
      test: false,
      permissions: {
        data: []
      },
      services: {
        data: []
      },
      banks: [],
      bills: [],
      pageLoading: false,
      isAdmin: Utils.returnBool(localStorage.getItem('isAdmin')),
      pageSize: 12,
      balance: {}
    },
  
    // getters
    getters: {
      user: state => state.userdata,
      token: state => state.user.token,
      client: state => state.client,
      test: state => state.test,
      permissions: state => state.permissions.data,
      pageLoading: state => state.pageLoading,
      logIn: state => state.logIn,
      isAdmin: state => state.isAdmin,
      pageSize: state => state.pageSize,
      balance: state => state.balance,
      banks: state => state.banks,
      bills: state => state.bills,
      services: state => state.services.data
    },
  
    // mutations
    mutations: {
      [SET_TOKEN] (state, data) {
        state.logIn = localStorage.getItem('login')
        state.user.token = data
      },
      // client data
      [SET_CLIENT] (state, data) {
        state.user.data = data
        state.userdata = data
      },
      //   test
      [SET_TEST] (state, data) {
        state.test = data
      },
      [SET_CLIENT_CRED] (state, data) {
        state.client = data
      },
      [LOGOUT] (state) {
        state.client = {}
        state.user = {
          data: {},
          token: localStorage.removeItem('token'),
          client_id: '',
          client_secret: ''
        }
        state.userdata = {}
        state.permissions = {
          data: []
        }
        state.logIn = false
        state.user.token = null
      },
      // PERMISSIONs
      [SET_PERMISSIONS] (state, data) {
        state.permissions.data = data
      },
      // page loading
      [SET_PAGE_LOADING] (state, data) {
        state.pageLoading = data
      },
      // available balance
      [SET_BALANCE] (state, data) {
        state.balance = data
      }
    },
  
    // actions
    actions: {
      [LOGIN] ({ state, commit }, {email, password}) {
        return new Promise((resolve, reject) => {
          var url = `${GET_BASE_URI}v1/web-portal/back-office-login.json`
          var loginData = {
            'email': email,
            'password': password
          }
          
          axios.post(url,
            loginData,
            {
              headers: {
                'X-Api-Key': 'awesomeorange',
              }
            }          
            )
          .then((response) => {
            if(response.data != null) {
              localStorage.setItem('login', true)
              localStorage.setItem('client_id', response.data.client_id)
              localStorage.setItem('client_secret', response.data.client_secret)
              localStorage.setItem('username', response.data.username)
              localStorage.setItem('fullname', `${response.data.info.first_name} ${response.data.info.last_name}`)
              
              commit(SET_CLIENT, response.data)
              resolve(response)
            } else {
              reject(error)
            }
          }).catch((error) => {
            console.log('Error Reached!!', error)
            reject(error)
          })
        })
      },
      [AUTH_REQUEST] ({ state, commit }) {
        return new Promise((resolve, reject) => {
          var url = `${GET_BASE_URI}v1/login.json`
          var params = {
            grant_type: 'client_credentials'
          }
          
          localStorage.setItem('login', true)
          params.client_id = localStorage.getItem('client_id')
          params.client_secret = localStorage.getItem('client_secret')

          axios.post(url, params)
            .then((response) => {
              localStorage.setItem('token', response.data.access_token)
              resolve(response)
              commit(SET_TOKEN, response.data.access_token)
            }).catch((error) => {
              console.log(error)
              reject(error)
            })
        })
      },
      [SET_TOKEN]({state, commit}, data) {
        commit( SET_TOKEN, data)
      },
      [LOGOUT] ({ state, commit }) {
        return new Promise((resolve, reject) => {
          commit(LOGOUT)
          localStorage.clear()
        })
      },
      [SIGNUP] ({ state, commit }, owner) {
        return new Promise((resolve, reject) => {
        var url = `${GET_BASE_URI}v1/web-portal/fleet-owner-sign-up`

        axios.post(
          url, 
          owner,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Api-Key': 'awesomeorange',
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*/*'
            }
          }          
          )
        .then((response) => {
          resolve(response)
        }).catch((error) => {
          console.log(error)
          reject(error)
        })
      })
      },      
    }
  }

export default user
  
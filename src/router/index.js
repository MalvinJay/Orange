import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import NotFound from '@/pages/NotFound'
import EventBus from '@/event-bus.js'

const ComingSoon = () => import('@/components/ComingSoon')
const Index = () => import('../pages/Index')
const Site = () => import('../pages/Site')
const About = () => import('../pages/About')
const Careers = () => import('../pages/Career')
const Support = () => import('../pages/Support')
const Contacts = () => import('../pages/Contacts')

const Login = () => import('../pages/Login')
const Signup = () => import('../pages/Signup')
const ResetPassword = () => import('../pages/ResetPassword')

const App = () => import('../pages/App')
const Dashboard = () => import('../pages/Dashboard/Dashboard')
const LiveTrack = () => import('../pages/LiveTrack/LiveTrack')
const Vehicles = () => import('../pages/Vehicles/Vehicles')
const Couriers = () => import('../pages/Couriers/Couriers')
const Deliveries = () => import('../pages/Deliveries/pages/Deliveries')
const Earnings = () => import('../pages/Earnings/pages/Earnings')
const Reports = () => import('../pages/Reports/pages/Reports')
const Settings = () => import('../pages/Settings/Settings')

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'Site',
          component: Site,
        },        
        {
          path: '/about',
          name: 'About',
          component: About,
        },
        {
          path: '/careers',
          name: 'Careers',
          component: Careers,
        },
        {
          path: '/support',
          name: 'Support',
          component: Support,
        },
        {
          path: '/contacts',
          name: 'Contacts',
          component: Contacts,
        },        
      ]
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },    
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        guest: true
      }      
    },   
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: ResetPassword,
    }, 
    {
      path: '/app/',
      name: 'App',
      component: App,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/app/dashboard',
          name: 'Dashboard',
          component: Dashboard,
        }, 
        {
          path: '/app/live_track',
          name: 'LiveTrack',
          component: LiveTrack,
        },
        {
          path: '/app/vehicles',
          name: 'Vehicles',
          component: Vehicles,
        }, 
        {
          path: '/app/couriers',
          name: 'Couriers',
          component: Couriers,
        },  
        {
          path: '/app/deliveries',
          name: 'Deliveries',
          component: Deliveries,
        },
        {
          path: '/app/earnings',
          name: 'Earnings',
          component: Earnings,
        },
        {
          path: '/app/reports',
          name: 'Reports',
          component: Reports,
        },     
        {
          path: '/app/settings',
          name: 'Settings',
          component: Settings,
        },                  
        {
          path: '/404', 
          component: NotFound 
        },
        { path: '*', redirect: '/app/dashboard'},
        { path: '404', name: 'Comin_Soon', component: ComingSoon }                           
      ]
    },      
  ]
})

router.beforeEach((to, from, next) => {
  console.log('to route', to)

  EventBus.$emit('sideNavClick', to.name)

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('client_secret') === '' || localStorage.getItem('client_secret') === null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('client_secret') === '' || localStorage.getItem('client_secret') === null) {
      next()
    } else {
      next({ name: 'LiveTrack'})
    }
  } else {
    next()
  }
})

export default router

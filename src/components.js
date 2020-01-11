import Vue from 'vue'

const NewRequest = () => import('@/components/NewTicket')
// const RequestItem = () => import('@/components/TicketItem')
const ComingSoon = () => import('@/components/ComingSoon')
const Tag = () => import('@/components/Tag')
const SideNav = () => import('@/components/SideNav')
const MapView = () => import('@/components/MapView')
const AddressMap = () => import('@/components/AddressMap')
const TicketsDrivers = () => import('@/components/TicketsDrivers')
const AddVehicle = () => import('@/components/AddVehicle')
const LineChart = () => import('@/pages/Dashboard/components/LineChart')
const NewEditCourier = () => import('@/pages/Couriers/components/Add_EditCourier')
const SummaryCard = () => import('@/components/SummaryCard')

Vue.component('new-request', NewRequest)
// Vue.component('ticket-item', RequestItem)
Vue.component('coming-soon', ComingSoon)
Vue.component('color-tag', Tag)
Vue.component('side-nav', SideNav)
Vue.component('map-view', MapView)
Vue.component('address-map', AddressMap)
Vue.component('tickets-drivers', TicketsDrivers)
Vue.component('add-vehicle', AddVehicle)
Vue.component('line-chart', LineChart)
Vue.component('add-edit-courier', NewEditCourier)
Vue.component('summary-card', SummaryCard)

export default {
    NewRequest: NewRequest,
    // RequestItem: RequestItem,
    ComingSoon: ComingSoon,
    Tag: Tag,
    SideNav: SideNav,
    MapView: MapView,
    AddressMap: AddressMap,
    TicketsDrivers: TicketsDrivers,
    AddVehicle: AddVehicle,
    LineChart: LineChart,
    NewEditCourier: NewEditCourier,
    SummaryCard: SummaryCard,
}

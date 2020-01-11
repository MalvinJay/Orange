<template>
    <!-- <coming-soon /> -->
    <div>
        <div class="block-header nav_option text-left">
            <div class="row">
            <div class="col-md-6">
                <h2>TICKETS MANAGER</h2>
            </div>
            <div class="col-md-6 text-right">
                <div class="right-icons cursor">
                    <!-- <el-tooltip class="item" effect="dark" content="Create New Courier Driver" placement="left">   
                        <a @click="toggleAdd" class="tipl">
                            <i class="ion-plus-circled green-text"></i>
                        </a>
                    </el-tooltip> -->

                    <el-tooltip class="item" effect="dark" content="Refresh Table" placement="bottom">
                        <a @click.prevent="fetchTickets" class="refresh-table tipl">
                            <i class="ion-refresh green-text"></i>
                        </a>
                    </el-tooltip>
                </div>
            </div>
            </div>
        </div>

        <!-- add search & table -->
        <div class="container-fluid">
            <div class="d-flex justify-content-between py-4">
                <el-input @keyup.enter.native="searchButton" v-model="search" class="is-shadow border-rounded search-div" :prefix-icon="loadingI" placeholder="Search Tickets"></el-input>
            </div>

            <div class="table-processing">
                <div class="center h-80" v-if="error">
                    <div class="center flex-column">
                        <p class="m-0 p-0">Unable to load this page</p>
                        <el-button @click.prevent="fetchTickets" icon="sync icon" type="text">Retry</el-button>
                    </div>
                </div>
                <div v-else>
                    <el-table 
                        @row-click="clickRow"
                        row-class-name="cursor"
                        :data="filteredTickets" 
                        style="width: 100%"
                        empty-text="No tickets are available at the moment"
                        v-loading="loading"
                        header-row-class-name="table-header"
                        >
                        <el-table-column prop="reference" label="Id" width="150"></el-table-column>
                        <el-table-column prop="delivery_type" label="Type" width="auto"></el-table-column>
                        <el-table-column prop="description" label="Description" width="auto">
                            <template slot-scope="scope">
                                {{scope.row.description || 'N/A'}}
                            </template>
                        </el-table-column>
                        <el-table-column prop="driver" label="Courier" width="auto">
                            <template slot-scope="scope">
                                {{scope.row.driver || 'N/A'}}
                            </template>                            
                        </el-table-column>
                        <el-table-column prop="customer_name" label="Name" width="auto">
                            <template slot-scope="scope">
                                {{scope.row.customer_name | 'N/A'}}
                            </template>                            
                        </el-table-column>
                        <el-table-column prop="address" label="Address" width="auto">
                            <template slot-scope="scope">
                                {{scope.row.address || 'N/A'}}
                            </template>                            
                        </el-table-column>
                        <el-table-column prop="deliver_before" label="Delivery Date" width="200">
                            <template slot-scope="scope">
                                {{scope.row.deliver_before | moment("D MMM,YY hh:mm:ss A") || '-'}}
                            </template>                              
                        </el-table-column>  
                        <!-- <el-table-column prop="ratings" label="ratings" width="auto">
                            <template slot-scope="scope">
                                {{scope.row.ratings || '-'}}
                            </template>                        
                        </el-table-column> -->
                        <el-table-column prop="status" label="Status" width="120">
                            <template slot-scope="scope">
                                <div class="flex">
                                    <color-tag v-if="scope.row.status === 'assigned'" status="verified" title="Assigned" icon="detail check icon"></color-tag>
                                    <color-tag v-else status="unverified" title="Unassigned" icon="close icon"></color-tag>
                                </div>
                            </template>                        
                        </el-table-column>                        
                        <el-table-column width="50px">
                            <template slot-scope="scope">
                                <div>
                                    <el-dropdown class="mini-menu" @command="command => handleTableCommand(command, scope.row)" trigger="click">
                                        <i class="el-icon-more cursor"></i>
                                        <el-button class="trans-icon-only-button" type="text" size="mini" plain icon="ellipsis horizontal icon"></el-button>
                                        <el-dropdown-menu class="w-200" slot="dropdown">
                                            <el-dropdown-item disabled>
                                                <div class="table-dropdown-header blue-text bold-600 text-uppercase">
                                                    action
                                                </div>
                                            </el-dropdown-item>
                                            <el-dropdown-item command="view" class="s-12" divided>View Details</el-dropdown-item>
                                            <el-dropdown-item command="edit" class="s-12">Edit</el-dropdown-item>
                                            <el-dropdown-item command="delete" class="s-12">Delete</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </template>
                        </el-table-column> 
                    </el-table>
                </div>
                <div class="flex justify-content-between align-items-center px-10 s-14">
                    <div class="">
                        {{total}} results
                    </div>
                    <el-pagination class="my-2 flex justify-content-end"
                        @current-change="handleCurrentChange"
                        :page-size="pageSize"
                        layout="prev, pager, next"
                        :total="total">
                    </el-pagination>
                </div>        
            </div>
        </div>

        <!-- View Single Delivery - Do it as a standalone component Yh!! -->
        <!-- <div class="ticket-dialog">
            <el-dialog custom-class="pb-5"
                :title="ticketId"
                @close="close"
                :visible="ticketView"
                width="58%"
                top="4vh">
                <div class="d-flex justify-content-center bg-white">
                    <el-form hide-required-asterisk class="w-100" ref="form" :model="form" label-position="left">
                        <el-tabs v-model="activeName" class="default-tab ticket_tab position-relative" stretch type="border-card" @tab-click="handleClick">
                            <el-tab-pane label="Ticket Details" name="ticket_details">
                                <div class="ticket_details bg-white py-2">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="mt-1">
                                                <div class="d-flex justify-content-center">
                                                    <img src="@/assets/images/avatar.png" class="rounded-circle" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="form-group left-form-group">
                                                <span class="v customer_name s20">George Arthur</span>
                                            </div>
                                            <div class="form-group left-form-group">
                                                <label class="font-medium"><i class="ion-ios-telephone"></i></label>
                                                <span class="v phone_number">+233545515497</span>
                                            </div> 
                                            <div class="form-group left-form-group">
                                                <label class="font-medium"><i class="ion-ios-email"></i></label>
                                                <span class="v email_address">arthurgeorgekojo@gmail.com</span>
                                            </div> 
                                            <div class="form-group left-form-group">
                                                <label class="font-medium"><i class="ion-ios-location"></i></label>
                                                <span class="v delivery_address">Kasoa</span>
                                            </div>                                                                                                                          
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="col-md-6">
                                            <div class="delivery_info">
                                                <summary-card header="Delivery Information" :data="Delivery"></summary-card>
                                            </div>
                                            <div class="customer_account">
                                                <summary-card header="Customer Account" :data="Account"></summary-card>
                                            </div>                                            
                                        </div>
                                        <div class="col-md-6">
                                            <div class="delivery_info">
                                                <summary-card header="Driver Information" :data="Driver"></summary-card>
                                            </div>
                                            <div class="delivery_info">
                                                <summary-card header="External Information" :data="External"></summary-card>
                                            </div> 
                                            <div class="delivery_info">
                                                <summary-card header="Order Information" :data="Order"></summary-card>
                                            </div>                                                                                                                                                                         
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <el-card class="my-3">
                                                <div slot="header">
                                                    <span class="bold-600">Ticket Description</span>
                                                </div>
                                                <div>
                                                    <div class="flex align-items-center mb-1">
                                                        <p class="s-14 m-0 mr-2"> This is a dummy description</p>
                                                    </div>
                                                </div>
                                            </el-card>                                            
                                        </div>
                                    </div>
                                </div>
                            </el-tab-pane>

                            <el-tab-pane label="Order Details" name="order_details">

                            </el-tab-pane>

                            <el-tab-pane label="Status Updates" name="status_updates">

                            </el-tab-pane>
                        </el-tabs>
                            
                        <div class="tabs-common">

                        </div>                                
                    </el-form>
                </div>
                <div class="position-absolute footer">
                    <el-button type="primary" class="">Assign Driver</el-button>
                    <el-button type="primary" class="bg-orange">Edit Ticket</el-button>
                    <el-button type="primary" class="blue-pure">Change Status</el-button>
                    <el-button type="danger" style="background: red;">Delete Ticket</el-button>
                </div>            
            </el-dialog>        
        </div>  -->
    
        <ticket-details :ticketView.sync="ticketView"></ticket-details>
    </div>    
</template>

<script>
import EventBus from '@/event-bus.js'
import { mapGetters } from 'vuex'
import TicketDetails from '../components/TicketDetails'

export default {
    name: 'Deliveries',
    components: {
        'ticket-details': TicketDetails
    },
    data() {
        return {
            activeName: 'ticket_details',
            loadingI: 'el-icon-search',
            search: '',
            mode: 'add',
            ticketVisible: false,
            ticketView: false,
            form: {

            },
            ticketId: `Ticket Id: 97654`,
            Delivery: {
                'Transaction Type :': 'delivery',
                'Complete After :': '',
                'Complete Before :': 'Feb 20, 2019 12:20 pm',
                'Created On :': 'Feb 20, 2019 1:02 pm'
            },
            Driver: {
                'Team :': '',
                'Driver :': ''
            },
            Account: {
                'Account ID: ': '171019',
                'Customer Name :': 'George Arthur',
                'Email :': 'arthurgeorgekojo@gmail.com',
                'Phone :': '+233545515497'
            },
            External: {
                'Ext. Order ID:': '',
                'Ext. Customer #:': '',
                'Ext. Invoice #:': ''
            },
            Order: {
                'Order Source:': '',
                'Order ID:': '',
                'Promo Code:': '',
                'Delivery Fee:': `Ghs `,
                'Processing Fee: ': 'Ghs',
                'Total Tax:': 'Ghs',
                'Total Due: ': 'Ghs '
            }
        }
    },
    created() {
        this.$store.dispatch('getTickets', {cache: false})
        .then((response)=>{
            console.log('CurrentTicket: ', this.Ticket)
        })
    },
    mounted() {
        // EventBus.$emit('sideNavClick', 'deliveries')
        EventBus.$on('ticketDetails', (val) => {
            this.ticketView = false
        })        
    },
    beforeDestroy () {
        EventBus.$off('sideNavClick', this.updateNav)
    },
    methods: {
        clickRow (row, event, column) {
            if (column.property || !column.status === 'error') {
                this.$store.dispatch('getCurrentTicket', row.id)
                .then((response) => {
                    this.ticketView = true
                })
            }
        },        
        searchButton () {
            this.loadingI = 'el-icon-loading'
            this.$store.dispatch('searchTickets', {search: this.search})
            .then(() => {
                this.loadingI = 'el-icon-search'
            })
        },
        deleteTicket (reference) {
            this.$confirm('This will permanently delete this Ticket. Continue?', 'Warning', {
                confirmButtonText: 'Delete',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                this.$store.dispatch('deleteTicket', reference)
                .then((response) => {
                if (response.data.success) {
                    this.$message({
                        type: 'success',
                        message: response.data.response.message
                    })
                    this.$store.dispatch('searchTickets', {cache: false})
                } else {
                    this.$message({
                        type: 'error',
                        message: response.data.response.message
                    })
                }  
                }).catch((error) => {
                    this.$message({
                        type: 'error',
                        message: "Ticket couldn't be deleted"
                    })
                })
            }).catch(() => {
                this.$message({
                    type: 'error',
                    message: "Ticket couldn't be deleted"
                }) 
            })
        },         
        handleCurrentChange (val) {
            this.$store.dispatch('getTickets', {page: val, cache: false})
        },

        fetchTickets () {
            this.$store.dispatch('getTickets', {cache: false})
        },    

        handleTableCommand (command, row) {
            switch (command) {
                case 'edit':
                    this.form = row
                    this.mode = 'edit'
                    this.ticketVisible = true
                break

                case 'view':
                    this.ticketView = true
                    this.$store.dispatch('getCurrentTicket', row.reference)
                    .then((response) => {                    
                        console.log('Current Ticket: ', this.currentTicket)
                    })                    
                break

                case 'delete':
                    this.deleteTicket(row.reference)
                break

                default:

                break
            }
        },   

        close () {
            this.loading = false
            this.ticketView = false
        },
        handleClick() {

        },
    },
    computed: {
        ...mapGetters({
        tickets: 'tickets',
        state: 'ticketsState',
        meta: 'ticketsMeta',
        Ticket: 'currentTicket',
        currentTicketState: 'currentTicketState'
    }),

    filteredTickets() {        
        return this.tickets
    },
    error() {
        return this.state === 'ERROR' && this.state !== 'LOADING'
    },
    total() {
        return this.meta.total
    },
    pageSize() {
        return this.meta.limit
    },
    loading() {
        return this.state === 'LOADING'
    },
    currentTicket() {
        return this.Ticket
    },
    loadingCurrent() {
        return this.currentTicketState === 'LOADING'
    }
  }
}
</script>

<style>
    .rounded-circle {
        border: 3px solid #f1f1f1;
    }
    .block-header {
        margin-bottom: 15px;
        padding: 4px 20px !important;
        margin-top: 20px;
        margin-bottom: 30px;
        font-size: 24px;
        background: #f7f7f7;
        margin-left: -3px;
    }

    .nav_option {
        padding: 10px 20px;
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 24px;
        background: #f7f7f7;

        .right-icons {
            float: right;
        }

        a {
            margin-right: 10px;
        }
    }

    .block-header h2 {
        margin: 0 !important;
        color: #2f2f2f !important;
        font-weight: normal;
        font-size: 23px;
        line-height: 34px;
    }

    .search-div{
        width: 40%;
    } 

    .footer {
        left: 0;
        right: 0;
        bottom: 0;
        padding: 10px;
        border-top: 1px solid #c5c9cf;
        background: #f7fafc;   
        display: flex;
        justify-content: space-evenly     
    }
</style>

<template>
    <div class="ticket-dialog">
        <el-dialog custom-class=""
            title="New Ticket"
            @close="close"
            :visible="modalVisible"
            width="60%"
            top="3vh">

            <div class="bg-white flex justify-content-between">
                <div class="col-md-6 p-0">
                    <el-form hide-required-asterisk class="" size="mini" ref="form" :model="form" label-position="top">
                        <el-tabs v-model="activeName" class="default-tab ticket_tab position-relative" stretch type="border-card" @tab-click="handleClick">
                            <el-tab-pane label="Ticket Details" name="ticket_details">
                                <div class="module-wrap border-rounded">
                                    <el-popover placement="top" trigger="hover">
                                        <div class="">
                                            <div class="popover-title p-2">External Account</div>
                                            <div class="popover-content p-2">
                                                <span>
                                                    For informational purposes, you can provide the Order ID, 
                                                    Customer Number and Invoice Number to reference an external 
                                                    transaction.
                                                </span>
                                            </div>
                                        </div>
                                        <h5 class="s-14 p-0 my-2 font-weight-bold" slot="reference">
                                            Link Delivery Ticket To External Account
                                            <span class="customEL">                                 
                                                <el-button icon="el-icon-question" type="text"></el-button>
                                            </span>
                                        </h5>
                                    </el-popover>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <el-input size="mini" placeholder="Order ID" v-model="form.orderId" clearable></el-input>
                                        </div>
                                        <div class="col-md-4">
                                            <el-input size="mini" placeholder="Customer #" v-model="form.customerId" clearable></el-input>
                                        </div>
                                        <div class="col-md-4">
                                            <el-input size="mini" placeholder="Invoice" v-model="form.invoiceId" clearable></el-input>
                                        </div>
                                    </div>
                                    <h5 class="s-14 p-0 my-2 font-weight-bold">Ticket Description</h5>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <el-input size="mini" type="textarea" placeholder="Write some notes about the delivery here..." v-model="form.description" clearable></el-input>
                                        </div>
                                    </div>
                                </div>
                            </el-tab-pane>

                            <el-tab-pane label="Order Details" name="order_details">
                                <div class="module-wrap border-rounded">
                                    <el-popover placement="top" trigger="hover">
                                        <div class="">
                                            <div class="popover-title p-2">Product Information</div>
                                            <div class="popover-content p-2">
                                                <span>
                                                    This is the product information.
                                                </span>
                                            </div>
                                        </div>
                                        <h5 class="s-14 p-0 my-2 font-weight-bold" slot="reference">
                                            Product Information
                                            <span class="customEL">                                 
                                                <el-button icon="el-icon-question" type="text"></el-button>
                                            </span>
                                        </h5>
                                    </el-popover>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <el-input size="mini" placeholder="Select an Option" v-model="form.product_info">
                                                <i class="el-icon-edit el-input__icon" slot="suffix"></i>
                                            </el-input>
                                        </div>
                                    </div>
                                    <div class="row pt-2">
                                        <div class="col-md-4">
                                            <el-input size="mini" placeholder="Quantity" type="number" v-model="form.quantity"></el-input>
                                        </div>
                                        <div class="col-md-4">
                                            <el-input size="mini" placeholder="Amount" v-model="form.amount">
                                                <i class="d-flex align-items-center h-100" slot="prefix">Ghs</i>
                                            </el-input>
                                        </div>
                                        <div class="col-md-4">
                                            <el-input size="mini" placeholder="Weight" v-model="form.weight" clearable></el-input>
                                        </div>                                                                        
                                    </div>   

                                    <hr class="my-2">    

                                    <div class="row">
                                        <div class="col-md-4">
                                            <el-input size="mini" placeholder="Tax %" v-model="form.tax" clearable></el-input>
                                        </div>
                                        <div class="col-md-4">
                                            <el-input size="mini" placeholder="Promo Code" v-model="form.promo_code" clearable></el-input>
                                        </div>
                                    </div>             

                                    <div class="d-flex row mt-2">
                                        <div class="col-md-6">
                                            <label for="" class="s-14 font-weight-bold m-0">Delivery Fee</label>
                                            <el-input size="mini" type="text" placeholder="Delivery Fee" v-model="form.delivery_fee"></el-input>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="" class="s-14 font-weight-bold m-0">Processing Fee</label>
                                            <el-input size="mini" type="text" placeholder="Processing Fee" v-model="form.processing_fee"></el-input>
                                        </div>                                        
                                    </div>

                                    <div class="pt-3">
                                        <h5 class="s-14 p-0 my-2 font-weight-bold">TOTAL DUE</h5>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <el-input size="mini" type="text" placeholder="0" v-model="total" class="w-50" readonly=""></el-input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                            
                        <!-- COMMON UI -->
                        <div class="">
                            <div class="">
                                <el-popover placement="top" trigger="hover">
                                    <div>
                                        <div class="popover-title p-2">Product Pickup Location</div>
                                        <div class="popover-content p-2">
                                            <div>
                                                Not to be confused with a pickup transaction, a product pickup location is a location 
                                                that the driver should stop by before traveling to the delivery destination. If no product 
                                                pickup location is provided, driver should assume the product pickup is at your stores main location.
                                            </div>
                                        </div>
                                    </div> 
                                    <div class="s-13 p-1 my-3 mx-2 font-weight-bold bg-orange-green d-flex justify-content-center cursor" slot="reference"> ADD PRODUCT PICKUP LOCATION </div>                                   
                                </el-popover>                                
                            </div>

                            <div class="mt10 row transaction-seperator customEL">
                                <div class="col-md-4">
                                    <el-radio class="m-0" v-model="form.delivery_type" label="delivery">Delivery</el-radio>
                                    <el-popover placement="top" trigger="hover">
                                        <div class="">
                                            <div class="popover-title p-2">Destination Transaction Type</div>
                                            <div class="popover-content p-2">
                                                <span>
                                                    Dropoff product to customer's delivery address.
                                                </span>
                                            </div>
                                        </div>                                    
                                        <span class="customEL" slot="reference">                                 
                                            <el-button icon="el-icon-question" type="text"></el-button>
                                        </span>        
                                    </el-popover>                            
                                </div>
                                <div class="col-md-4">
                                    <el-radio class="m-0" v-model="form.delivery_type" label="pickup">Pickup</el-radio>
                                    <el-popover placement="top" trigger="hover">
                                        <div class="">
                                            <div class="popover-title p-2">Destination Transaction Type</div>
                                            <div class="popover-content p-2">
                                                <span>
                                                    Pickup product from customer's delivery address.
                                                </span>
                                            </div>
                                        </div>                                     
                                        <span class="customEL" slot="reference">                                 
                                            <el-button icon="el-icon-question" type="text"></el-button>
                                        </span>
                                    </el-popover>
                                </div>
                                <div class="col-md-4">
                                    <el-checkbox class="m-0" v-model="form.leave_it">Leave It</el-checkbox>
                                    <el-popover placement="top" trigger="hover">
                                        <div class="">
                                            <div class="popover-title p-2">Leave It</div>
                                            <div class="popover-content p-2">
                                                <span>
                                                    Instruct the delivery driver to leave the package at the front door.
                                                </span>
                                            </div>
                                        </div>                                       
                                        <span class="customEL" slot="reference">                                 
                                            <el-button icon="el-icon-question" type="text"></el-button>
                                        </span>
                                    </el-popover>
                                </div>
                            </div>

                            <div class="delivery-info mt-3 module-wrap border-rounded">
                                <div class="row d-flex">
                                    <label for="" class="s-14 font-weight-bold col-md-6">Existing customer?</label>
                                    <div class="col-md-6">
                                        <el-switch v-model="form.existing" active-color="#89d541"></el-switch>
                                    </div>
                                </div>

                                <div class="customer-wrap">
                                    <div class="d-flex row mt-2">
                                        <div class="col-md-6">
                                            <label for="" class="s-14 font-weight-bold m-0">Customer Name</label>
                                            <el-input size="mini" placeholder="Customer Name*" v-model="form.customer_name" clearable></el-input>
                                        </div>                                        
                                        <div class="col-md-6">
                                            <label for="" class="s-14 font-weight-bold m-0">Phone Number</label>
                                            <el-input size="mini" placeholder="Phone Number" v-model="form.phone_number" clearable></el-input>
                                        </div>
                                    </div>

                                    <div class="d-flex row mt-2">
                                        <div class="col-md-6">
                                            <label for="" class="s-14 font-weight-bold m-0">Email Address</label>
                                            <el-input size="mini" placeholder="Email Address" v-model="form.email" clearable></el-input>                                            
                                        </div>
                                        <div class="col-md-6">
                                            <label for="" class="s-14 font-weight-bold m-0">Deliver Before</label>
                                            <el-popover placement="top" trigger="hover">
                                                <div class="">
                                                    <div class="popover-title p-2">Deliver Before</div>
                                                    <div class="popover-content p-2">
                                                        <span>
                                                            Please make sure to select a date and time from the 
                                                            popup calendar and time picker and don't change the 
                                                            date and time manually through the input field.
                                                        </span>
                                                    </div>
                                                </div>                                               
                                                <span class="customEL" slot="reference">                                 
                                                    <el-button icon="el-icon-question" type="text"></el-button>
                                                </span>
                                            </el-popover>    
                                            <el-date-picker
                                                size="mini"
                                                class="w-100"
                                                v-model="form.deliver_before"
                                                type="datetime"
                                                placeholder="Deliver Before"
                                                default-time="12:00:00" 
                                                clearable>
                                            </el-date-picker>                                                                                 
                                        </div>                                        
                                    </div>    

                                    <div class="d-flex row mt-2">
                                        <div class="col-md-12">
                                            <label for="" class="s-14 font-weight-bold m-0">Destination Address</label>
                                            <el-popover placement="top" trigger="hover">
                                                <div class="">
                                                    <div class="popover-title p-2">Destination Address  </div>
                                                    <div class="popover-content p-2">
                                                        <span>
                                                            Please enter the full destination address including the 
                                                            street address, city state/province and country.
                                                        </span>
                                                    </div>
                                                </div>                                                       
                                                <span class="customEL" slot="reference">                                 
                                                    <el-button icon="el-icon-question" type="text"></el-button>
                                                </span>            
                                            </el-popover>  

                                            <el-input id="search_with_geo" size="mini" type="text" placeholder="Destination Address" v-model="form.location"></el-input>                                                
                                            
                                            <div @click="toggleGeocoding" class="d-flex justify-content-start mt-2 orange-text cursor">
                                                <i class="ion-arrow-right-c pr-1"></i>
                                                <span>{{add_mode}} add location to map</span>
                                            </div>                                            
                                        </div>
                                    </div> 
                                </div>

                                <div class="row d-flex py-2">
                                    <label for="" class="s-14 font-weight-bold col-md-6">Disable Notifications</label>
                                        <el-popover placement="top" trigger="hover">
                                            <div class="">
                                                <div class="popover-title p-2">Disable Notifications</div>
                                                <div class="popover-content p-2">
                                                    <span>
                                                        Disabling notifications will bypass your global notification 
                                                        settings by disabling notifications for this delivery ticket 
                                                        only..
                                                    </span>
                                                </div>
                                            </div>                                           
                                            <span class="customEL">                                 
                                                <el-button icon="el-icon-question" type="text" slot="reference"></el-button>
                                            </span>     
                                        </el-popover>                               
                                    <div class="col-md-6">
                                        <el-switch v-model="form.no_notification" active-color="#89d541"></el-switch>
                                    </div>
                                </div>
                            </div>
                        </div>                                
                    </el-form>
                </div>
                
                <div class="col-md-6 pr-0">
                    <div class="w-100 h-50">
                        <address-map name="address">
                        <div id="infowindow-content" class="">
                            <img src="" width="16" height="16" id="place-icon" >
                            <span id="place-name" ></span> <br>
                            <span id="place-address"></span>
                        </div>                            
                        </address-map>
                        <div class="manual-map-dragged">
                                <div class="my-2">
                                    Drag the marker above to the correct delivery location.
                                </div>
                                <div id="mm-info-panel">
                                    <div id="mm-marker-status"><i>Click and drag the marker.</i></div>
                                    <b>GPS coordinates:</b> <div id="mm-info">(<span><b>Lng:</b> {{cordinates.lat}}, <b>Lat:</b> {{cordinates.lng}}</span>)</div>
                                </div>
                        </div>                    
                    </div>
                </div>

            </div>

            <div class="flex justify-content-end pt-3">
                <div class="flex">
                    <el-button @click="close">Cancel</el-button>
                    <el-button @click="createTicket('form')" type="primary" :loading="loading">Submit</el-button>
                </div>
            </div>            
        </el-dialog>        
    </div>
</template>

<script>
import EventBus from '@/event-bus.js'
export default {
    name: "NewTicket",
    props:  ['modalVisible'],
    data() {
        return {
            cordinates: {
                lng: '',
                lat: ''
            },
            add_mode: 'Manually',
            toggle: false,
            activeName: 'ticket_details',
            form: {
                orderId: '',
                customerId: '',
                invoiceId: '',
                description: '',
                delivery_type: 'delivery',
                leave_it: false,
                deliver_before: '',
                destination: {
                    from_longitude: '',
                    from_latitude: '',
                    to_longitude: '',
                    to_latitude: ''
                },
                unit_of_weight: "kg",
                totalAmount: '',
                amount: '',
                quantity: ''
            },
            loading: false
        }
    },
    mounted() {
        EventBus.$on('getCoordinates', this.handleGeoCordinate)
        console.log('Form: ', this.form)

        EventBus.$on('setInitialCoordinates', this.setInitial)
    },
    methods: {
        handleClick(tab, event) {
            // console.log(tab, event);
        },
        createTicket(form) {
            this.loading = true
            this.$store.dispatch('createTicket', this.form)
            .then((response) => {
                this.loading = false
                if (response.data.status === "00") {
                    this.$message({
                        type: 'success',
                        message: response.data.message,
                    })                
                    this.$store.dispatch('getTickets', {cache: false})
                    this.$router.push('/app/deliveries')
                    this.close()
                } else {
                    this.$message({
                        message: response.data.message,
                        type: 'error'
                    })
                }
            }).catch((error) => {
                this.loading = false
                let resp = '';

                if(error.response != undefined) {
                    switch (error.response.status) {
                        case 400:
                            resp = error.response.data.message
                            break;
                        case 500:
                            resp = error.response.data.error
                            break;
                        default:
                            resp = 'An error occured, please try again'
                            break;
                    }
                }
                else
                    resp = '500 - (Internal Server Error)'

                this.$message({
                    message: resp,
                    type: 'error'
                })               
            })        
        },  
        close () {
            this.loading = false
            EventBus.$emit('newTicket', false)
            // this.$router.push('/app/deliveries')
        },  
        toggleGeocoding() {
            this.toggle = !this.toggle
            this.toggle? this.add_mode = 'Automatically': this.add_mode = 'Manually'
        },
        handleGeoCordinate(pos) {
            if (this.form.delivery_type === "delivery") {
                console.log('Doing A Delivery request')
                // this.form.destination.from_longitude = this.cordinates.lng
                // this.form.destination.from_latitude = this.cordinates.lat

                this.form.destination.to_longitude = pos.lat()
                this.form.destination.to_latitude = pos.lng()

                console.log('Final Delivery Form: ', this.form)               
            } else {
                console.log('Doing A Pickup request')
                this.form.destination.from_longitude = pos.lat()
                this.form.destination.from_latitude = pos.lng()

                // this.form.destination.to_longitude = this.cordinates.lng
                // this.form.destination.to_latitude = this.cordinates.lat     
                
                console.log('Final Pickup Form: ', this.form)
            }                
        },
        setInitial(pos) {
            console.log('Init Position: ', pos)
            this.cordinates.lat = pos.lat;
            this.cordinates.lng = pos.lng;
            
            if (this.form.delivery_type === "delivery") {
                this.form.destination.from_longitude = pos.lat
                this.form.destination.from_latitude = pos.lng           
            } else {
                this.form.destination.to_longitude = pos.lat
                this.form.destination.to_latitude = pos.lng                   
            }
            
            console.log('Form: ', this.form)            
        }
    },
    computed: {
        total() {
            return this.form.amount * this.form.quantity
        }
    }
}
</script>

<style lang="scss" scoped>
    // @import '../static/now-ui-kit/assets/css/now-ui-kit.css';   
    
    .el-dialog__body {
        padding: 0!important;
    }
    .popover-title {
        background: #e9e9e9;
    }
    .module-wrap {
        padding: 6px;
        background: #fbfbfb;
        border: 1px solid #e8e8e8;
    }
    @media (min-width: 576px) {
        .modal-dialog {
            max-width: 600px;
            margin: 1.75rem auto;
        }
    }
    .bg-orange-green {
        border: 1px solid #8BC34A;
        border-radius: 4px;
        color: #89d541;
        background: #fff;
        box-shadow: none;

        &:hover {
            background: #89d541;
            color: #fff;
        }
    }
    .transaction-seperator {
        background: #ffffff;
        padding: 14px 0px;
        border-top: 4px solid #f1f1f1;
        border-bottom: 4px solid #f1f1f1;
        margin-right: 0px;
        margin-left: 0px;
    }  
</style>

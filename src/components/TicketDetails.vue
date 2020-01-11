<template>
    <div>
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
                <h5 class="s-14 p-0 my-2 font-weight-bold" slot="reference"> Link Delivery Ticket To External Account </h5>
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
                    <el-input size="mini" placeholder="Write some notes about the delivery here..." v-model="form.description" clearable></el-input>
                </div>
            </div>
        </div>
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
                <div class="s-13 p-1 my-2 font-weight-bold bg-orange-green d-flex justify-content-center" slot="reference"> ADD PRODUCT PICKUP LOCATION </div>                                   
            </el-popover>                                
        </div>
        <div class="mt10 row transaction-seperator">
            <div class="col-md-4">
                <el-radio v-model="form.delivery" label="1">Delivery</el-radio>
            </div>
            <div class="col-md-4">
                <el-radio v-model="form.pickup" label="1">Pickup</el-radio>
            </div>
            <div class="col-md-4">
                <el-checkbox v-model="checked">Leave It</el-checkbox>
            </div>
        </div>

        <div class="delivery-info mt-3 module-wrap border-rounded">
            <div class="row d-flex">
                <label for="" class="s-14 font-weight-bold col-md-6">Existing customer?</label>
                <div class="col-md-6">
                    <el-switch v-model="form.existing" active-color="#89d541"></el-switch>
                </div>
            </div>

            <div class="new-customer-wrap">
                <div class="d-flex row mt-2">
                    <div class="col-md-6">
                        <label for="" class="s-14 font-weight-bold m-0">Phone Number</label>
                        <el-input size="mini" placeholder="Phone Number" v-model="form.phone" clearable></el-input>
                    </div>
                    <div class="col-md-6">
                        <label for="" class="s-14 font-weight-bold m-0">Email Address</label>
                        <el-input size="mini" placeholder="Email Address" v-model="form.email" clearable></el-input>
                    </div>                                        
                </div>

                <div class="d-flex row mt-2">
                    <div class="col-md-6">
                        <label for="" class="s-14 font-weight-bold m-0">Customer Name</label>
                        <el-input size="mini" placeholder="Customer Name" v-model="form.name" clearable></el-input>
                    </div>
                    <div class="col-md-6">
                        <label for="" class="s-14 font-weight-bold m-0">Deliver Before</label>
                        <el-input size="mini" placeholder="Deliver Before" v-model="form.due_delivery" clearable></el-input>
                    </div>                                        
                </div>    

                <div class="d-flex row mt-2">
                    <div class="col-md-12">
                        <label for="" class="s-14 font-weight-bold m-0">Destination Address</label>
                        <el-input size="mini" placeholder="Destination Address" v-model="form.destination" clearable></el-input>                                                
                    </div>
                </div>                                                                    
            </div>

            <div class="row d-flex">
                <label for="" class="s-14 font-weight-bold col-md-6">Disable Notifications</label>
                <div class="col-md-6">
                    <el-switch v-model="form.no_notification" active-color="#89d541"></el-switch>
                </div>
            </div>                                

            <div>
                <h5 class="s-14 p-0 my-2 font-weight-bold">Select Team</h5>
                <div class="row">
                    <div class="col-md-12">
                        <el-select size="mini" placeholder="Write some notes about the delivery here..." v-model="form.description" clearable></el-select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TicketDetails',
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>

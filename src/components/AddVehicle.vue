<template>
    <el-dialog custom-class="new-courier text-left"
        title="Add A Vehicle"
        @close="close"
        :visible="ticketVisible"
        width="30%">
        <div class="flex justify-content-center new-courier-bg">
            <el-form style="width:90%" 
                size="mini" 
                label-position="left"
                class="transaction-form"
                :rules="rules" 
                :model="form"
                label-width="150px"
                ref="form">

                <el-form-item label="Vehicle type">
                    <el-select class="w-100" v-model="form.code_type" placeholder="Select A Vehicle Type">
                        <el-option
                            v-for="(item, index) in vehicleList" :key="index"
                            :label="item.name"
                            :value="item.code_type">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Brand">
                    <el-input v-model="form.brand" placeholder="brand"></el-input>
                </el-form-item>
                <el-form-item label="Model">
                    <el-input v-model="form.model" placeholder="model"></el-input>
                </el-form-item>
                <el-form-item label="Registration No">
                    <el-input v-model="form.registration_number" placeholder="reg. no"></el-input>
                </el-form-item>
                <el-form-item label="Color">
                    <el-input v-model="form.colors" placeholder="colors"></el-input>
                </el-form-item>    
                <el-form-item label="Owner">
                    <el-input v-model="form.owner" placeholder="owner"></el-input>
                </el-form-item>                            
            </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button size="mini" class="z-depth-button b-0 open-sans black-text" @click="close">Cancel</el-button>
            <el-button size="mini" class="z-depth-button b-0 bold-500 open-sans white-text bg-orange" :loading="createLoading" type="primary" @click="submitForm('form')">Add Vehicle</el-button>
        </span>
    </el-dialog>    
</template>

<script>
import { mapGetters } from 'vuex'
import EventBus from '@/event-bus.js'

export default {
    name: 'AddVehicle',
    props: ['mode', 'form', 'ticketVisible'],
    data() {
        return {
            createLoading: false,
            rules: {
                vehicle_type: [
                    { required: true, message: 'Please specify a type', trigger: 'blur' }
                ],
                registration_no: [
                    { required: true, message: 'Please specify the registration number', trigger: 'blur' }
                ]
            }
        }
    },
    mounted(){
        
    },
    methods: {
        close () {
            EventBus.$emit('addVehicle', false)
        },        
        submitForm(form) {
            this.createLoading = true
            // console.log('Ref: ', this.$refs[form])

            // this.$refs[form].validate((valid) => {
            //     if (valid) {           
                    this.$store.dispatch('createVehicle', this.form)
                    .then((response) => {
                        this.createLoading = false
                        if (response.data.status === "00") {
                            this.$message({
                                message: response.data.message,
                                type: 'success',
                            }) 

                            this.$store.dispatch('getVehicles', {cache: false})
                            this.close()
                        } else {
                            this.$message({
                                message: response.data.message,
                                type: 'error'
                            })
                        }
                    })
                    .catch((error) => {
                        this.createLoading = false
                        let responded = ''

                        if(error) 
                            responded = error.response.data.error
                        else 
                            responded = 'An error occured, please try again'

                        this.$message({
                            message: responded,
                            type: 'error',
                        })
                    })
            //     }
            // })            
        },
        resetForm(form) {

        }
    },
    computed: {
        ...mapGetters({
            list: 'vehicleListTypes'
        }),
        vehicleList() {
            return this.list
        }          
    },    
}
</script>

<style lang="scss" scoped>

</style>


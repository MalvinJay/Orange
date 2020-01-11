<template>
    <el-dialog custom-class="new-courier text-left"
        :title=label
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
                
                <el-form-item label="First Name">
                    <el-input v-model="form.first_name" placeholder="First Name"></el-input>
                </el-form-item>
                <el-form-item label="Last Name">
                    <el-input v-model="form.last_name" placeholder="Last Name"></el-input>
                </el-form-item>                
                <el-form-item label="Username">
                    <el-input v-model="form.username" placeholder="Username"></el-input>
                </el-form-item>
                <el-form-item label="Phone Number">
                    <el-input v-model="form.phone_number" placeholder="Phone number"></el-input>
                </el-form-item>
                <el-form-item label="E-mail">
                    <el-input v-model="form.email" type="email" placeholder="Email Address"></el-input>
                </el-form-item>                              
                <el-form-item label="Password" v-if="mode=='add'"> 
                    <el-input v-model="form.password" type="password" placeholder="Password"></el-input>
                </el-form-item>
                <el-form-item label="Pin" v-if="mode=='add'">
                    <el-input v-model="form.pin" placeholder="Pin"></el-input>
                </el-form-item>
            </el-form>           
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button size="mini" class="z-depth-button b-0 open-sans black-text" @click="close">Cancel</el-button>
            <el-button size="mini" class="z-depth-button b-0 bold-500 open-sans white-text bg-orange" :loading="createLoading" type="primary" @click="createCourier('form')">Add Vehicle</el-button>
        </span>
        </el-dialog>         
</template>

<script>
import EventBus from '@/event-bus.js'
import { mapGetters } from 'vuex'

export default {
    name: "AddEdit",
    props: ['mode', 'ticketVisible', 'editData'],
    data() {
        return {
            loading: 'el-icon-search',
            createLoading: false,
            rules: {
                email: [
                    { required: true, message: 'Please input email', trigger: 'blur' }
                ]
            },      
            form: {},
            initForm: {
                first_name: '',
                last_name: '',
                username: '',
                email: '',
                phone_number: '',
            },
            label: "Add A Courier"                  
        }
    },
    methods: {
        close () {
            EventBus.$emit('addEditCourier', false)
        },       
        searchButton () {
            this.loading = 'el-icon-loading'
            // this.$store.dispatch('searchcouriers', {search: this.search})
            // .then(() => {
            //     this.loading = 'el-icon-search'
            // })
        },    
        createCourier(form) {
            this.createLoading = true

            switch (this.mode) {
                case 'edit':
                    this.$refs[form].validate((valid) => {
                        if (valid) {           
                            this.$store.dispatch('updateCourier', this.form)
                            .then((response) => {
                                this.createLoading = false
                                if (response.data.status === "00") {
                                    this.$store.dispatch('getCouriers', {cache: false})
                                    this.$message({
                                        type: 'success',
                                        message: response.data.message,
                                    })                
                                    this.close
                                } else {
                                    this.$message({
                                        message: response.data.message,
                                        type: 'error'
                                    })
                                }
                            }).catch((error) => {
                                this.createLoading = false
                                let response = ''
                                if(error) 
                                    response = error.response.data.message
                                else 
                                    response = error.response.data.message

                                this.$message({
                                    message: response,
                                    type: 'error',
                                })
                            })
                        }
                    })                    
                    break;

                default:
                    this.$refs[form].validate((valid) => {
                        if (valid) {           
                            this.$store.dispatch('createCourier', this.form)
                            .then((response) => {
                                this.createLoading = false
                                if (response.data.status === "00") {
                                    this.$store.dispatch('getCouriers', {cache: false})
                                    this.$message({
                                        type: 'success',
                                        message: response.data.message,
                                    })                
                                    this.close
                                } else {
                                    this.$message({
                                        message: response.data.message,
                                        type: 'error'
                                    })
                                }
                            }).catch((error) => {
                                this.createLoading = false
                                let response = ''
                                if(error) 
                                    response = error.response.data.message
                                else 
                                    response = error.response.data.message

                                this.$message({
                                    message: response,
                                    type: 'error',
                                })
                            })
                        }
                    })
                    break;
            }
        },    
        handleCurrentChange (val) {
            this.$store.dispatch('getCouriers', {page: val, cache: false})
        },      
    },  
    beforeUpdate() {
        if (this.mode === 'edit') {
            this.form = this.editData
            this.form.phone_number = this.editData.phone
            let str = this.editData.full_name
            let words = str.split(' ')
            this.form.first_name = words[0]
            this.form.last_name = words[1] || words[2]
            this.label = `Edit Courier - ${this.editData.username}`
        } else {
            this.label = "Add A Courier"
            this.form = this.initForm
        }
    }  
}
</script>

<style>

</style>

<template>
    <div>
        <div class="block-header nav_option text-left">
            <div class="row">
            <div class="col-md-6">
                <h2>COURIERS MANAGER</h2>
            </div>
            <div class="col-md-6 text-right">
                <div class="right-icons cursor">
                    <el-tooltip class="item" effect="dark" content="Create New Courier Driver" placement="left">   
                        <a @click="toggleAdd" class="tipl">
                            <i class="ion-plus-circled green-text"></i>
                        </a>
                    </el-tooltip>

                    <el-tooltip class="item" effect="dark" content="Refresh Table" placement="bottom">
                        <a @click.prevent="fetchCouriers" class="refresh-table tipl">
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
                <el-input @keyup.enter.native="searchButton" v-model="search" class="is-shadow border-rounded search-div" :prefix-icon="loading" placeholder="Search Courier Drivers"></el-input>
            </div>

            <div class="table-processing">
                <div class="center h-80" v-if="error">
                    <div class="center flex-column">
                        <p class="m-0 p-0">Unable to load this page</p>
                        <el-button @click.prevent="fetchCouriers" icon="sync icon" type="text">Retry</el-button>
                    </div>
                </div>
                <div v-else>
                    <el-table 
                        :data="filteredCouriers" 
                        style="width: 100%"
                        empty-text="No couriers are available at the moment"
                        v-loading="loadingS"
                        header-row-class-name="table-header"
                        >
                        <el-table-column prop="id" label="Id" width="100"></el-table-column>
                        <el-table-column prop="username" label="Username" width="auto"></el-table-column>
                        <el-table-column prop="full_name" label="Name" width="auto"></el-table-column>
                        <el-table-column prop="email" label="Email" width="auto"></el-table-column>
                        <el-table-column prop="phone" label="Phone" width="auto"></el-table-column>
                        <el-table-column prop="is_verified" label="Status" width="auto">
                            <template slot-scope="scope">
                                <div class="flex">
                                    <color-tag v-if="scope.row.is_verified === 'true'" status="verified" title="Verified" icon="detail check icon"></color-tag>
                                    <color-tag v-else status="unverified" title="Unverified" icon="close icon"></color-tag>
                                </div>
                            </template>                        
                        </el-table-column>
                        <el-table-column prop="address" label="Address" width="200"></el-table-column>   
                        <el-table-column width="80px">
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

        <!-- Add or edit courier -->
        <add-edit-courier :mode="mode" :ticketVisible.sync="ticketVisible" :editData="form"></add-edit-courier>  
    </div>
</template>

<script>
import EventBus from '@/event-bus.js'
import { mapGetters } from 'vuex'

export default {
  name: "Couriers",
  data() {
    return {
        search: '',
        mode: 'add',
        load: false,
        loading: 'el-icon-search',
        createLoading: false,
        ticketVisible: false,
        rules: {
            email: [
                { required: true, message: 'Please input email', trigger: 'blur' }
            ]
        },
        form: {}                
    };
  },
  created() {
    this.$store.dispatch('getCouriers', {cache: true})
  },
  mounted() {
    // EventBus.$emit('sideNavClick', 'couriers')
    EventBus.$on('addEditCourier', (val) => {
        this.ticketVisible = false
    })    
  },
    beforeDestroy () {
        EventBus.$off('sideNavClick', this.updateNav)
    },
  methods: {
    close() {
        // EventBus.$emit('addEditCourier', false)
        // this.ticketVisible = false
    },

    searchButton () {
        this.loading = 'el-icon-loading'
        // this.$store.dispatch('searchcouriers', {search: this.search})
        // .then(() => {
        //     this.$router.push('/payments')
        //     this.loading = 'el-icon-search'
        // })
    },

    refresh(){
        this.created
    },

    toggleAdd(){
        this.mode = 'add'
        this.ticketVisible = true
    },

    createCourier(form) {
        this.createLoading = true
        this.$store.dispatch('createCourier', this.form)
        .then((response) => {
            this.$message({
                type: 'success',
                message: response.data.response.message,
            })

            this.createLoading = false

            if (response.data.status === "00") {
                this.$message({
                    type: 'success',
                    message: response.data.response.message,
                })                
                this.ticketVisible = false
                this.$store.dispatch('getCouriers', {cache: false})
            } else {
                this.$message({
                    message: response.data.message,
                    type: 'error'
                })
            }
        }).catch((error) => {
            this.createLoading = false
            const response = error.response.data.message
            this.$message({
                type: 'error',
                message: response,
            })
        })        
    },

    handleCurrentChange (val) {
        this.$store.dispatch('getCouriers', {page: val, cache: false})
    },

    fetchCouriers () {
      this.$store.dispatch('getCouriers', {cache: false})
    },    

    handleTableCommand (command, row) {
        switch (command) {
            case 'edit':
                console.log('Row Content: ', row)
                this.form = row
                this.mode = 'edit'
                this.ticketVisible = true
            break

            case 'delete':

            break

            default:

            break
        }
    },   
  },
  computed: {
    ...mapGetters({
      couriers: 'couriers',
      state: 'couriersState',
      meta: 'couriersMeta',
    }),

    filteredCouriers() {
        if(this.couriers['0']) {
            this.couriers['0'].email = this.couriers['0'].emails['0'].value
            this.couriers['0'].phone = this.couriers['0'].phone_numbers['0'].value
            this.couriers.address = this.couriers.address | 'N/A'
        }
        
        return this.couriers
    },
    error () {
        return this.state === 'ERROR' && this.state !== 'LOADING'
    },
    total () {
        return this.meta.total
    },
    pageSize(){
        return this.meta.limit
    },
    loadingS () {
        return this.state === 'LOADING'
    }, 
  }
};
</script>

<style lang="scss" scoped>
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

    .el-form-item__label {
        text-align: left;
    }
</style>

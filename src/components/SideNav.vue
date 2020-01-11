<template>
    <div class="sidebar bg nav-container" id="sidebar">
        <div class="flex align-items-center">
            <el-button type="text" class="side-button w-100 p-0 no-border">
            <el-popover placement="right" trigger="hover">
                    <div>
                        <div class="popover-title p-2">Adminstrator</div>
                        <div class="popover-content p-2">
                            <span>
                                You are signed in as the administrator and you 
                                have all permissions under your membership level!
                            </span>
                        </div>
                    </div>
                    <div class="user-info" slot="reference">
                        <div class="work-user-icon">
                            <img style="width: 1em" src="../assets/images/app/portfolio.svg" alt="work">
                        </div>
                        <div class="info-container white-text">
                            <div class="name concat-text s-14"> {{fleetName}} </div>
                            <div class="email concat-text s-12 flex justify-content-between align-items-center">
                                <span>{{fleetEmail}}</span>
                                <el-dropdown trigger="click">
                                    <img class="white-filter-color cursor p-1" src="../assets/images/arrow_down.svg" alt="">
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>My Profile</el-dropdown-item>
                                        <el-dropdown-item divided>Membership</el-dropdown-item>
                                        <el-dropdown-item>Payment History</el-dropdown-item>
                                        <el-dropdown-item>Payment Methods</el-dropdown-item>
                                        <el-dropdown-item>Balance</el-dropdown-item>
                                        <el-dropdown-item>Permissions</el-dropdown-item>
                                        <el-dropdown-item divided>Call In PIN: 102</el-dropdown-item>                                        
                                    </el-dropdown-menu>  
                                </el-dropdown>                              
                            </div>
                        </div>                    
                    </div>
                </el-popover>
            </el-button>
        </div>

        <el-menu router class="menu" :unique-opened="true" :default-active="defaultActive" active-text-color='#586ADA' text-color="#999999" background-color="#f1f6f8">
            <li class="header s-12 bold-600 text-left py-2 px-10">DISPATCH SOFTWARE</li>

            <el-menu-item route="/app/dashboard" index="Dashboard">
                <template slot="title">
                    <img class="mr-10" src="../assets/images/app/home.svg" alt="">
                    Dashboard
                </template>
            </el-menu-item>
            <el-menu-item route="/app/live_track" index="Livetrack">
                <template slot="title">
                    <img class="mr-10" src="../assets/images/app/beenhere.svg" alt="">
                    Live Track Couriers
                </template>                    
            </el-menu-item>
            <el-menu-item ref="sideMenu" route="/app/vehicles" index="Vehicles">
                <template slot="title">
                    <img class="mr-10" src="../assets/images/app/calendar_today.svg" alt="">
                    <span>Manage Vehicles </span>
                </template>
            </el-menu-item>
            <el-menu-item route="/app/couriers" index="Couriers">
                <template slot="title">
                    <img class="mr-10" src="../assets/images/app/directions.svg" alt="">
                    <span>Manage Couriers</span>
                </template>
            </el-menu-item>
            <el-menu-item route="/app/deliveries" index="Deliveries">
                <template slot="title">
                    <img class="mr-10" src="../assets/images/app/shopping_cart.svg" alt="">
                    <span>Manage Delivery Requests</span>
                </template>
            </el-menu-item>     
            <el-menu-item route="/app/earnings" index="Earnings">
                <template slot="title">
                    <img class="mr-10" src="../assets/images/app/pin_drop.svg" alt="">
                    <span>Manage Earnings</span>
                </template>
            </el-menu-item>        
            <el-menu-item route="/app/reports" index="Reports">
                <template slot="title">
                    <img class="mr-10" src="../assets/images/app/person_pin_circle.svg" alt="">
                    <span>Reports </span>
                </template>
            </el-menu-item>    
            <el-menu-item route="/app/settings" index="Settings">
                <template slot="title">
                    <img class="mr-10" src="../assets/images/app/directions_car.svg" alt="">
                    <!-- <span>Drivers</span> -->
                    <span>Account Settings</span>
                </template>
            </el-menu-item>  
            <el-menu-item index="login" @click="logout">
                <template slot="title">
                    <img class="mr-10" src="../assets/images/app/subdirectory_arrow_right.svg" alt="">
                    <span>Logout</span>
                </template>
            </el-menu-item>                                                                         
        </el-menu>

        <div class="legal">
            <div class="copyright">
                © 2019 <a>Orange Delivery Management</a>.
            </div>
            <div class="version">
                <b>Version: </b> 1.0.0
            </div>
        </div>        
    </div>
</template>

<script>
import EventBus from '../event-bus.js'
import { mapGetters } from 'vuex'

export default {
    name: 'SideNav',
    data () {
        return {
            defaultActive: '',
            fleetName: localStorage.getItem('fullname'),
            fleetEmail: localStorage.getItem('email'),
        }
    },
    mounted() {
        EventBus.$on('sideNavClick', this.updateNav)
    },
    // beforeDestroy () {
    //     EventBus.$off('sideNavClick', this.updateNav)
    // },
    methods: {
        updateNav (payload) {
            console.log('CurrentNav: ', payload)
            this.defaultActive = payload
        },

        logout() {
            localStorage.clear()
            this.$session.destroy()
            this.$router.push('/login')           
        }
    },
    computed: {
        ...mapGetters({
            user: 'user',
        }),
    }
}
</script>

<style lang="scss" scoped>
    .menu {
        img {
            width: 20px!important;
            filter: invert(66%) sepia(0%) saturate(0%) hue-rotate(206deg) brightness(93%) contrast(84%);

            &:active {
                filter: invert(80%) sepia(22%) saturate(1233%) hue-rotate(40deg) brightness(94%) contrast(88%);
            }
        }
    }
    .popover-title {
        background: #e9e9e9;
    }
    .material-icons {
        font-size: 20px!important;
    }
    .mr-10{
        margin-right: 10px;
    }
    .pt-20{
        padding-top: 20px
    }
    .el-menu-item.is-active{
        font-weight: 600
    }
    .el-menu-item:focus, .el-menu-item:hover{
        background: transparent !important;
    }
    .el-menu {
        background-color: rgb(241, 246, 248);
        height: calc(100vh - 198px);
        width: 100%;
        overflow-x: hidden; 

        .header {
            background: #eee !important;
        }
    }
    .el-submenu {
        .el-menu-item {
            height: 30px !important;
            line-height: 30px !important;
            padding-left: 60px !important;
            font-size: 13px;
        }
    }
    .el-menu-item, .el-submenu__title {
        display: flex;
        padding-left: 0.5rem;
        padding-right: 0;
    }
    .nav-container{
        margin: 0 auto;
    }
    .navigation-card{
        width: 80%;
        padding: 5px 0px;
        background: #f1f6f8;
        color: #999999;
    }
    .client_name{
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 90%;
        display: block;
        overflow: hidden;
        color: #999999;
    }
    // @media only screen and (max-width: 1650px) and (min-width: 1450px){
    //     .page-single .sidebar {
    //         width: 250px;
    //     }
    // }

    .sidebar {
        position: absolute;
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
        overflow: hidden;
        left: 0;
        -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        -ms-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        z-index: 11 !important;
        width: 250px !important;
        height: inherit;
    }

    .side-button {
        .user-info {
            padding: 5px 10px;
            white-space: nowrap;
            position: relative;
            border-bottom: 1px solid #e9e9e9;
            background: #2f2f2f;

            .work-user-icon {
                float: left;
                margin-right: 12px;
                padding: 7px;
                border: 1px solid #fff;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .info-container {
                cursor: default;
                display: block;
                position: relative;

                .name, .email,  {
                    white-space: nowrap;
                    -ms-text-overflow: ellipsis;
                    -o-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 14px;
                    color: #fff;
                    text-align: left;
                    line-height: 1.42857143;
                }            
            }        
        }
    }
    .legal {
        background-color: #eee;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #eee;
        padding: 15px;
        overflow: hidden;

            .copyright {
                font-size: 13px;
                white-space: nowrap;
                -ms-text-overflow: ellipsis;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                overflow: hidden;

            a {
                color: #000 !important;
                font-weight: bold;
                text-decoration: none;
            }            
        }        
    }    
    .version {
        white-space: nowrap;
        -ms-text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-top: 5px;
        font-size: 13px;
    }
</style>

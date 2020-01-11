<template>
    <el-container>
        <el-header class="w-100 p-0">
            <div class="top-menu">
                <el-row type="flex" justify="space-between">
                    <el-col :span="4" class="flex justify-content-between px-20">
                        <div class="grid-content bg-purple">
                            <router-link to="/">
                                <img class="logo" style="width: 45px" src="../assets/images/delivery-truck.svg">
                            </router-link>
                        </div>
                    </el-col>
                    <el-col :span="20" class="flex justify-content-end">
                        <ul class="flex align-items-center menus p-0 m-0 s-14" id="top-nav">
                                <li @click="ticket =true" class="desktop-new-ticket-btn add-new-ticket" slot="reference" data-toggle="modal" data-target="#exampleModalLong">
                                    <a class="left rounded" id="desktop-new-ticket">
                                        New Request
                                    </a>
                                </li>
                            <li class="dropdown">
                                <el-tooltip class="item" effect="light" content="Notifications" placement="bottom">
                                    <a data-original-title="View Notifications" class="dropdown tipb seen-notifications flex align-items-center p-0 m-0" data-toggle="dropdown" role="button" aria-expanded="true">
                                        <!-- <i class="material-icons">notifications</i> -->
                                        <!-- <span id="header-notification-balloon" class="label-count hidden"> 0 </span> -->
                                        <img class="white-filter-color search-icon white-text" src="@/assets/images/app/notifications.svg" alt="">
                                    </a>
                                </el-tooltip>
                            </li>
                            <li class="pull-right pl-0">
                                <el-tooltip class="item" effect="light" content="Toggle Side Nav" placement="left">
                                    <a class="js-right-sidebar tipb flex align-items-center m-0">
                                        <!-- <i class="material-icons">menu</i> -->
                                        <img src="@/assets/images/app/menu.svg" alt="" class="white-filter-color white-text">
                                    </a>
                                </el-tooltip>
                            </li>                                                       
                        </ul>
                    </el-col>
                </el-row>
            </div>
        </el-header>            
        <el-container>
            <!-- <el-aside style="width: 250px" :class="{'position-absolute': adjust, 'open': adjust}" v-if="showMenu">
                <side-nav></side-nav>                
            </el-aside> -->
            <el-aside style="width: 250px">
                <side-nav></side-nav>                
            </el-aside>
            <el-main class="p-0" style="height: calc(100vh - 60px);">
                <router-view/>
            </el-main>
        </el-container>

        <!-- New Request -->
        <new-request :modalVisible.sync="ticket"></new-request>

    </el-container>        
</template>

<script>
import EventBus from '@/event-bus.js'
export default {
    name: 'App',
    data() {
        return {
            // showMenu: true,
            // adjust: false,
            ticket: false
        }
    },
    created() {
        // EventBus.$on('hideSide', this.hideSide)
    },
    mounted() {
        if (!this.$session.exists()) {
            this.logout()
        }
        EventBus.$on('newTicket', (val) => {
            this.ticket = val
        })        
    }, 
    // beforeDestroy () {
    //     EventBus.$off('hideSide', this.hideSide)
    //     EventBus.$off('adjustSide', this.adjustBool)
    //     EventBus.$off('newTicket')
    // },
    methods: {
        leaving () {
            this.$store.dispatch('getToken')
        },
        logout () {
            this.$store.dispatch('logout')
            .then(() => {
                this.$session.remove('client')
                this.$session.remove('token')
                this.$session.remove('vue-session-key')
                this.$session.destroy()
                this.$router.push('/login')
            })
        }        
    },
    
    onIdle() {
        this.logout()
    },
    onActive() {
        setInterval(() => {
            this.$store.dispatch('setClient', JSON.parse(this.$session.get('client')))
            this.$store.dispatch('getToken')
        }, 3300000)
    }    
}
</script>

<style lang="scss" scoped>
    .open {
        right: 0!important;
        
    }

    .right-side {
        right: 0;
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
        right: -250px;
    }
    
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        height: calc(100vh - 60px);
        overflow: hidden;
        right: 250px;
        transition: 0.5s;
    }
    
    .el-main {
        // background-color: #dde2e3;
        // text-align: center;
        color: #333;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    // HEADER
    .el-header{
        background-color: #2f2f2f;
        text-align: center;
        z-index: 1;
    }

    ul.menus {
        list-style: none!important;
        float: right;

        li {
            float: left;
            padding: 0 30px;
            cursor: pointer;      
        }

        a {
            color: #fff;
            text-decoration: none;

            &:hover {
                color: #91dc5a;
            }            
        }
    }

    .desktop-new-ticket-btn {
        background: #424242;

        &:hover {
            background: #272727;
        }

        &:hover > a {
            color: #91dc5a;
        }
    }    
</style>

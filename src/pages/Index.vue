<template>
    <el-container>
        <el-header class="position-absolute w-100 py-10 px-20" id="bgc">
            <div class="top-menu">
                <el-row type="flex" justify="space-between">
                    <el-col :span="3" class="flex justify-content-start">
                        <div class="grid-content bg-purple">
                            <router-link to="/">
                                <img class="logo" style="width: 50px" src="../assets/images/delivery-truck.svg">
                            </router-link>
                        </div>
                    </el-col>
                    <el-col :span="21" class="flex justify-content-end">
                        <ul class="flex align-items-center menus p-0 m-0 s-13" id="top-nav">
                            <li class="active"><router-link to="/app/dashboard">Home</router-link></li>
                            <!-- <li><router-link to="/features">Features</router-link></li> -->
                            <!-- <li><router-link to="/pricing">Pricing</router-link></li> -->
                            <!-- <li><router-link to="/how-it-works">How It Works</router-link></li> -->
                            <li><router-link to="/about">About</router-link></li>
                            <!-- <li><router-link to="/faqs">FAQS</router-link></li> -->
                            <li><router-link to="/careers">Careers</router-link></li>
                            <li><router-link to="/support">Support</router-link></li>
                            <li><router-link to="/contacts">Contact Us</router-link></li>
                            <li class="border-30 signup free-account">
                                <router-link to="/signup">Free Account</router-link>
                            </li>
                            <li class="border border-30 login sign-in">
                                <router-link to="/login" class="orange-text w-100 bold-600 m-0 s-13" v-if="loggedIn">
                                    <i class="ion-android-lock"></i>
                                    LOGIN
                                </router-link>
                                <router-link to="/login" class="orange-text w-100 bold-600 m-0 s-13" v-else>
                                    <i class="ion-android-lock"></i>
                                    DASHBOARD
                                </router-link>                                
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
        </el-header>     
            <router-view/>
        <el-footer></el-footer>
    </el-container> 
</template>

<script>
import EventBus from "@/event-bus.js";
import { mapGetters } from "vuex";

export default {
name: 'Index',
    data() {
        return {

        }
    },

    computed: {
        ...mapGetters({
            isLogin: 'logIn',
            loggedIn() {
                return this.isLogin
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .el-header, .el-footer {
        height: inherit!important;
        background: rgba(0,0,0,.3)!important;   
        color: #333;
        text-align: center;
        z-index: 1;
    }

    .el-aside {
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .bg {
        background-image: url("../assets/images/driver-using-delivery-software.jpg");
        background-attachment: fixed;
        max-height: 650px;
    }

    ul.menus {
        list-style: none!important;
        float: right;

        li {
            float: left;
            margin-right: 20px;

            a {
                text-decoration: none;
                color: #fff;

                &:hover {
                    color: #89d541!important;
                    text-decoration: none;
                }
            }

            &.free-account {
                display: flex;
                justify-content: center;                
                border: 1.5px solid #fff;

                a {
                    margin: 0;
                    font-size: 13px;
                    font-weight: 700;
                    color: #fff;
                }                
            }

            &.sign-in {             
                background: #333;
                padding: 5px 10px;
                border-color: #91dc5a!important;
                width: 135px;
                -moz-border-radius: 6px;
                -webkit-border-radius: 6px;
                border-radius: 6px;
                -khtml-border-radius: 6px;
                position: relative;
                transition: all .3s ease-out;    
                
                &:hover {
                    background: #91dc5a;  
                    text-decoration: none;
                    outline: 0;
                }

                a i {
                        position: absolute;
                        left: 10px;
                        // top: 8px;
                    } 

                a:hover {
                    color: #fff!important;                           
                }              
            }
        }

        .signup, .login {
            padding: 5px 10px;
            width: 150px;
        }    
    }

    // Banner section
    .banner {
        color: #fff;

        .row-bg {
            .sec {
                padding-top: 100px;
                min-height: 650px;

                .delivery-phone-wrapper {
                    width:424px;
                    height:723px;
                    background: url('../assets/images/fon1.png') no-repeat;
                }
            }  
            
            .inner {
                width: 80%;
                margin: auto;
                
                h1 {
                    margin: 20px 0 30px 0;
                    font-size: 40px;
                    font-weight: 600;

                    span {
                        color: #89d541;
                    }                    
                }

                .slogan {
                    margin-bottom: 50px;
                    line-height: 200%;
                }                
            }
        }

        h3 {
            font-size: 21px;
            font-weight: 300;
        }

        .slogan {
            margin-bottom: 50px;
            line-height: 200%;
        }                
    }  
    
    .left {
        float: left;
    }

    .black-round-button, .green-round-button {
        color: #fff;
        padding: 8px 35px;
        font-size: 16px;
        font-weight: 500;
    }    

    .black-round-button {
        border: 2px solid #fff;
        background: 0 0;
        border-radius: 25px;
    }

    .green-round-button {
        border: 2px solid #89d541;
        background: #89d541;
        border-radius: 25px;

        &:hover {
            background: #fff;
            color: #89d541;
            text-decoration: none;
        }
    }    

    .sections {
        padding-top: 40px;
        padding-bottom: 40px;
    }    

    .feature-title-box, .l-title {
        border-bottom: 1px solid #efefef;
    }    
    .l-title {
        color: #89d541;
        padding-bottom: 10px;
        margin: 20px auto;
        font-size: 28px;
        width: 100%;
        height: 154px;
        font-weight: 500;
        align-items: flex-end;
    }  
    .feature-title-box {
        font-weight: 700;
        padding-bottom: 4px;
        margin-bottom: 10px;
        min-height: 49px;
        vertical-align: middle;
    }      
    .color-black {
        color: #000;
    }
    .home-works img {
        width: 200px;
        height: 200px;
    }   
    .play-feature {
        min-width: 200px;
        max-width: 270px;
        border: 2px solid #333;
        border-radius: 5px;
        padding: 10px;
        margin: 15px auto 0;

        i {
            padding: 3px 7px 3px 9px;
            border: 1px solid #333;
            border-radius: 15px;
            margin-right: 8px;
        }        
    }    
    .small-play-vid-txt {
        font-size: 10px;
        margin-top: 4px;
        border-top: 1px solid #efefef;
    }    
    .feature-icon {
        width: 120px;
        height: 120px;
        margin-bottom: 15px;
    }
    .available-wrap a {
        color: #fff;
        font-size: 35px;
        display: inline;
        margin-right: 5px;
    }   
    .home-f-arrow {
        position: absolute;
        top: 50%;
        right: -10px;
        font-size: 30px;
        color: #CCC;
    }     
    .learn-more {
        font-size: 10px;
        font-weight: 700;
        margin-top: 10px;

        a {
            color: #89d541!important;
        }        
    }
</style>


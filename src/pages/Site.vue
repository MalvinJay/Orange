<template>
    <el-container>
        <div class="bg">
            <el-header class="position-absolute w-100 py-10 px-20">
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
                                <li class="active"><router-link to="/app/live_track">Home</router-link></li>
                                <!-- <li><router-link to="/app/features">Features</router-link></li> -->
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
                                    <router-link to="/login" class="orange-text w-100 bold-600 m-0 s-13">
                                        <i class="ion-android-lock"></i>
                                        LOGIN
                                    </router-link>
                                </li>
                            </ul>
                        </el-col>
                    </el-row>
                </div>
            </el-header>

            <div class="p-0 banner">
                <el-row class="row-bg">
                    <el-col :xs="24" :sm="24" :md="16" class="sec p-grid">
                        <div class="inner">
                            <h1>
                                Powerful and easy to use <b>delivery management software</b> for your  <span>local  delivery business</span>
                            </h1>
                            <p class="slogan">
                                Streamline your whole delivery operation with our <b>powerful delivery software</b> that offers your customers an 
                                "Uber-like" experience while offering your drivers and back office robust features you would expect to see from a 
                                large courier company. 
                            </p>    
                            <h3 class="">
                                <b>Create a FREE</b> orange account:
                            </h3>  
                            <el-row>
                                <div :span="24" class="mt-3">
                                    <div class="left mr-3 mb-2">
                                        <router-link to="/features">
                                            <button type="button" class="black-round-button">
                                                FEATURES				  
                                            </button>                                        
                                        </router-link>
                                    </div>
                                    <div class="left mb-1">
                                        <router-link to="/signup">
                                            <button type="button" class="green-round-button">
                                                SIGN UP FOR FREE&nbsp; 
                                                <i class="ion-ios-arrow-thin-right"></i>
                                            </button>                                        
                                        </router-link>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </el-row>    
                            <h3 class="mt-3 mb-2">Available on:</h3>   
                            <div class="available-wrap">
                                <a href="https://itunes.apple.com/us/app/orange/id1198716935" target="_blank"><i class="ion-social-apple"></i></a>
                                <a href="https://play.google.com/store/apps/details?id=orange.driver.app" title="Download Android App" target="_blank"><i class="ion-social-android"></i></a>
                            </div>                                                                                                                               
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="8" class="sec p-grid relative">
                        <div class="delivery-phone-wrapper"></div>
                        <div style="position:absolute;bottom:135px;left:80px;">
                            <!-- <video width="278" height="490" poster="../assets/images-front/orange-app-screenshot.jpg" autoplay="" loop="" muted="" __idm_id__="569463809"> -->
                            <!-- <source src="../assets/images-front/videos/orange-app-home-page.mp4" type="video/mp4"> -->
                            <!-- <source src="../assets/images-front/videos/orange-app-home-page.m4v" type="video/m4v"> -->
                            <!-- </video> -->
                        </div>                          
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="sections section-1">
            <el-container class="container p-grid text-center">
                <div class="flex justify-content-center l-title">
                    <span class="color-black">How Our </span> <b class="px-10">Delivery Software</b> <span class="color-black"> Works</span>
                </div>
            </el-container>
            <el-container class="container p-grid text-center home-works">
                <el-col :xs="24" :lg="8" class="watch-view mob-mb-25 position-relative">
                    <div class="mb-3">Your Store Receives An Order</div>
                    <div>
                        <img src="../assets/images/view-delivery-software-pos.jpg" alt="Your Store Receives an Order">
                    </div>
                    <i class="ion-arrow-right-c home-f-arrow"></i>
                </el-col>
                <el-col :xs="24" :lg="8" class="watch-view mob-mb-25 position-relative">
                    <div class="mb-3">Store Assigns Delivery to Driver</div>
                    <div>
                        <img src="../assets/images/view-driver-receives-delivery-ticket.jpg" alt="Store Assigns Delivery to Driver">
                    </div>
                    <i class="ion-arrow-right-c home-f-arrow"></i>
                </el-col>
                <el-col :xs="24" :lg="8" class="watch-view mob-mb-25 position-relative">
                    <div class="mb-3">Driver Receives Delivery &amp; Updates Store &amp; Customer</div>
                    <div>
                        <img src="../assets/images/view-driver-in-route.jpg" alt="Driver Receives Delivery">
                    </div>
                    <i class="ion-arrow-right-c home-f-arrow"></i>
                </el-col>
                <el-col :xs="24" :lg="8" class="watch-view mob-mb-25 position-relative">
                    <div class="mb-3">Driver Delivers Package To Customer</div>
                    <div>
                        <img src="../assets/images/view-driver-delivers-package.jpg" alt="Driver Delivers Package to Customer">
                    </div>
                </el-col>
            </el-container>
        </div>

        <div class="sections section-1 bg-color-grey">
            <div class="container">
                <div class="row mb50 text-center">
                    <div class="flex justify-content-center l-title" style="height: 60px;">
                        <span class="color-black">Manage Your <b>Delivery Business</b> With Ease</span>
                    </div>
                    <span class="color-black">Orange's delivery software has automated many of the processes and logistics you would normally have to do by hand.  Your online orders can be automatically sent to your delivery drivers by using our easy to integrate API.  Assign your drivers to delivery territories or assign delivery fees to zones around town and let orange take care of the rest.  orange offers the flexibility to customize and automate your entire delivery business. Compare our automation features to other delivery software companies to see how powerful the orange platform is.</span>
                </div>
            </div>
        </div>    

        <div class="sections section-1">
            <el-container class="container p-grid text-center">
                <div class="flex justify-content-center l-title" style="height: 70px;">
                    <span class="color-black">See how Orange looks through the eyes of a </span><b class="px-10" stule> customer, driver and staff!</b>
                </div>
            </el-container>
            <el-container class="container p-grid text-center">
                <el-col :xs="24" :lg="8" class="watch-view mob-mb-25">                  
                    <div>
                        <img src="../assets/images/view-customer.jpg" alt="Customer Tracks Delivery Driver">
                    </div>
                    <div class="play-feature mb-2" id="watch-customer-view">
                        <i class="ion-play"></i>Customer View</div>
                    <div class="small-play-vid-txt">CLICK ABOVE TO PLAY VIDEO</div>
                </el-col>
                <el-col :xs="24" :lg="8" class="watch-view mob-mb-25">
                    <div>
                        <img src="../assets/images/view-driver-delivers-package.jpg" alt="Driver Uses Driver's Application to Delivery Product">
                    </div>
                    <div class="play-feature mb-2" id="watch-driver-view"><i class="ion-play"></i>Driver View</div>
                    <div class="small-play-vid-txt">CLICK ABOVE TO PLAY VIDEO</div>
                </el-col>
                <el-col :xs="24" :lg="8" class="watch-view mob-mb-25">
                    <div>
                        <img src="../assets/images/view-software.jpg" alt="Dispatch Operators Track Delivery Drivers">
                    </div>
                    <div class="play-feature mb-2" id="watch-dispatch-view"><i class="ion-play"></i>Backend Dispatch View</div>
                    <div class="small-play-vid-txt">CLICK ABOVE TO PLAY VIDEO</div>
                </el-col>
            </el-container>
        </div>

        <div class="sections section-1 home-icons">
            <el-container class="container p-grid text-center">
                <el-col :xs="24" :lg="6" class="watch-view mob-mb-25">
                    <img src="../assets/images/delivery-route.svg" alt="Optimize Delivery Routes" class="feature-icon">
                    <div class="feature-title-box">Optimize Routes</div>
                    <div class="feature-desc-box">Whether you’re on foot, on a bicycle, taking the transit or driving, Orange's route optimization can find the best route between delivery destinations.
                        <div class="learn-more">
                            <a href="../features/"><i class="ion-ios-arrow-thin-right"></i>LEARN MORE</a>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :lg="6" class="watch-view mob-mb-25">
                    <img src="../assets/images/customer-service.svg" alt="Automate Dispatch" class="feature-icon">
                    <div class="feature-title-box">Automate Dispatch</div>
                    <div class="feature-desc-box">Avoid sending delivery tickets one by one, use our auto-assign feature to assign newly created tickets to the driver closest to the destination or to the driver who firsts accepts the delivery ticket.
                        <div class="learn-more">
                            <a href="../features/"><i class="ion-ios-arrow-thin-right"></i>LEARN MORE</a>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :lg="6" class="watch-view mob-mb-25">
                    <img src="../assets/images/tracking-alerts.svg" alt="Real Time Tracking and Alerts" class="feature-icon">
                    <div class="feature-title-box">Real Time Tracking and Alerts</div>
                    <div class="feature-desc-box">Your office staff can use our dispatch delivery software to take orders over the phone and send the delivery details to the delivery drivers while tracking the driver’s locations through our interactive dashboard map.
                        <div class="learn-more">
                            <a href="../features/"><i class="ion-ios-arrow-thin-right"></i>LEARN MORE</a>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :lg="6" class="watch-view mob-mb-25">
                    <img src="../assets/images/signature-verification.svg" alt="Digital Proof of Delivery" class="feature-icon">
                    <div class="feature-title-box">Digital Proof of Delivery</div>
                    <div class="feature-desc-box">Drivers can now show proof of delivery by adding photos and signature verification to the delivery ticket which also logs the drivers GPS coordinates.
                        <div class="learn-more">
                            <a href="../features/"><i class="ion-ios-arrow-thin-right"></i>LEARN MORE</a>
                        </div>
                    </div>
                </el-col>
                <div class="clear"></div>
            </el-container>
        </div>  
                          
        <el-footer></el-footer>
    </el-container>        
</template>

<script>
export default {
    name: 'Site',
    data() {
        return {

        }
    }
    
}
</script>

<style lang="scss" scoped>
    h3 {
        margin-bottom: 8px!important; 
    }
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

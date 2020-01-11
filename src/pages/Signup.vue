<template>
    <el-container>
        <el-header class="position-absolute w-100 py-10 px-20" id="bgc" style="position: fixed!important;">
            <div class="top-menu">
                <el-row type="flex" justify="space-between">
                    <el-col :span="3" class="flex justify-content-start">
                        <div class="grid-content bg-purple">
                            <router-link to="/">
                                <img class="logo" style="width: 50px" src="@/assets/images/delivery-truck.svg">
                            </router-link>
                        </div>
                    </el-col>
                    <el-col :span="21" class="flex justify-content-end">
                        <ul class="flex align-items-center menus p-0 m-0 s-13" id="top-nav">
                            <li class="active"><router-link to="/app/dashboard">Home</router-link></li>
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
        <div class="page-content sections" >
            <div class="container">
                
                <h2 class="text-center orange-text bold-600 mb-4">Signup in a minute..</h2>
                
                <div class="row">
                    <div class="col-lg-4 position-relative mt-2">
                        <h5> What to expect...</h5>
                        <span>
                            You will not be asked for your credit card information and will get instant access to your account after 
                            filling in the form on this page.  We offer free data migration, so if you are using a delivery management 
                            software and want to migrate your old delivery history, customer and product information, we can help.                        
                        </span>
                        <br> <br>
                        <span>Our</span>
                        <b>free tier</b>
                        <span> 
                            account gives you 50 free delivery tickets every month at no cost. You can download our Android and 
                            IOS driver's app in the Google play or Apple store for free.  Once you have downloaded our Orange 
                            Delivery App and once you have created an account here, you can start sending deliveries to your drivers.
                        </span>
                        <br> <br>

                        <span class="orange-text"><router-link to="/features">Click here</router-link></span>
                        <span> to see a full list of features.</span>

                        <div class="pricing-info-box hidden">
                            <div class="pricing-info-box-close pointer">
                                <i class="ion-close s24 color-white"></i>
                            </div>
                            It appears that you estimate more deliveries per month than our free plan allows.
                            <br><br>
                            We recommend that sign up for a free trial of our 
                            <span class="recommended-plan">Meadow Plan</span>.
                            <br><br>
                            <a href="/pricing-chart" class="orange-text" target="_blank">Click here</a> 
                            to check out all the awesome features this plan comes with!
                        </div>
                    </div>

                    <div class="col-lg-8 signup-fields">
                        <!-- Bootstrap form -->
                        <form id="frm" class="">
                            <div class="row">
                                <div class="col m6 col-xs-12">
                                    <label for="first_name" class="active">First name</label>
                                    <input class="validate" placeholder="Enter first name" type="text" v-model="form.first_name" name="first_name" id="first_name">			   
                                </div>
                                <div class="col m6 col-xs-12">
                                    <label for="last_name" class="active">Last name</label>
                                    <input class="validate" placeholder="Enter last name" type="text" v-model="form.last_name" name="last_name" id="last_name">					  
                                </div>
                            </div> <!--row-->
                            
                            <div class="row">
                                <div class="col m6 col-xs-12">   
                                    <label for="phone_number">Phone Number</label>
                                    <input class="validate" placeholder="Phone number" type="text" v-model="form.phone_number" name="phone_number" id="phone_number">					  
                                </div>
                            
                                <div class="col m6 col-xs-12">
                                    <label class="active">Username</label>
                                    <input class="validate" placeholder="Enter Username" type="text" v-model="form.username" name="username" id="username">			  
                                </div>
                            </div><!-- row-->   
                            
                            <div class="row">
                                <div class="col m6 col-xs-12">
                                    <label class="active">Email address</label>
                                    <input class="validate" placeholder="Enter email address" type="email" v-model="form.email" name="email" id="email">			  
                                </div>  
                                <div class="col m6 col-xs-12">   
                                    <label class="active">Password</label>
                                    <input class="validate" placeholder="Enter a password" type="password" v-model="form.password" name="password" id="password">			  
                                </div>   
                            </div>  <!--row-->
                            
                            <div class="row">
                                <div class="col m6 col-xs-12">
                                    <label class="active">Country</label>
                                    <el-select
                                        v-model="form.country_code"
                                        remote
                                        reserve-keyword
                                        placeholder="Please select a country"
                                        :remote-method="remoteMethod">
                                        <el-option v-for="(country, index) in countries" :key="index" :label="country.name" :value="country.code" class="w-100"></el-option>
                                    </el-select>                                    
                                </div>
                                <div class="col m6 col-xs-12">   
                                    <label class="active">Company name</label>
                                    <input class="validate" placeholder="Enter your company name" type="text" v-model="form.company" name="company" id="company">			  
                                </div>
                            
                            </div><!-- row-->    

                            <div class="row">
                                <div class="col m6 col-xs-12">   
                                    <label class="active">Address</label>
                                    <input class="validate" placeholder="Enter your Address" type="text" v-model="form.address" name="address" id="address">			  
                                </div>
                            
                                <div class="col m6 col-xs-12">   
                                    <label class="active">Current deliveries per month (est)</label>
                                    <input class="validate" placeholder="How many deliveries do you perform?" type="text" v-model="form.deliveries_per_month" name="deliveries_per_month" id="deliveries_per_month">			  
                                </div>
                            </div><!-- row-->                               
                            
                            <div class="row">
                                <div class="col m6 col-xs-12">
                                    <label class="active">Cities </label>
                                    <el-select
                                        v-model="city"
                                        multiple
                                        filterable
                                        remote
                                        reserve-keyword
                                        placeholder="Please enter a city/town"
                                        :remote-method="remoteMethod"
                                        :loading="loading">
                                        
                                        <el-option v-for="city in cities" :key="city.id" :label="city.name" :value="city.name" class="w-100"></el-option>
                                    </el-select>
                                </div>
                                <div class="col m6 col-xs-12">
                                    <label class="active">How did you hear about us?</label>
                                    <input class="validate" placeholder="..." type="text" v-model="form.how_did_you_know" name="how_did_you_know" id="how_did_you_know">			  
                                </div>
                            </div>

                            <!-- <div class="row">
                                <div class="col m6 col-xs-12 flex align-items-center">   
                                    <label class="active">Add Vehicles Info</label>
                                    <el-button @click="ticketVisible = true" type="primary" icon="el-icon-plus" circle style="background:#89d541; border:none;"></el-button>
                                </div>
                            
                                <div class="col m6 col-xs-12">   
                                    <label class="active">Current deliveries per month (est)</label>
                                    <input class="validate" placeholder="How many deliveries do you perform?" type="text" v-model="form." name="est_deliveries" id="est_deliveries">			   
                                </div>
                            </div> -->
                                
                            <div class="mt-3">
                                <el-checkbox v-model="remember" class="mr-2"></el-checkbox>
                                <label for="agree_to_terms">I accept the <a href="../terms/" target="_blank" class="orange-text">terms &amp; conditions</a> and <a href="../privacy/" target="_blank" class="orange-text">privacy policy</a>!</label>
                            </div>

                            <div class="card-action mt-3">
                                <!-- <button class="btn waves-effect waves-light bg-orange white-text p-grid" type="submit" name="action">
                                    Sign up		 
                                </button> -->
                                <el-button @click="signup('form')" type="primary" :loading="loading" class="bg-orange white-text border-0">Sign up</el-button>
                            </div>
                        </form>
                    </div>  
                </div>

                <el-row>
                    <el-col :lg="8" class=""></el-col>
                    <el-col :lg="16" class="color-gray s12 mt30"></el-col>
                </el-row>
            </div>
        </div>            
        <el-footer></el-footer>
    </el-container> 
</template>

<script>
import EventBus from '@/event-bus.js'
export default {
    name: 'Signup',
    data() {
        return {
            remember: false,
            city: [],
            cities: [
                {
                    id: 1,
                    name: 'Accra',
                },
                {
                    id: 2,
                    name: 'Tema',
                },
                {
                    id: 3,
                    name: 'Lapaz',
                },
                {
                    id: 4,
                    name: 'Achimota',
                },
                {
                    id: 5,
                    name: 'Legon',
                },                                                                
            ],
            country: '',
            countries: [
                {
                    code: 'ghana',
                    name: 'Ghana'
                },
                {
                    code: 'nigeria',
                    name: 'Nigeria'
                },
                {
                    code: 'kenya',
                    name: 'Kenya'
                }                                
            ],
            loading: false,
            type: 'password',
            form: {
                
            },
            rules: {
                email: [
                    { required: true, message: 'Please input email', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Please input password', trigger: 'blur' }
                ]
            },
            exportVisible: false,
            ticketVisible: false,            
        }
    },
    methods: {
        signup(form) {
            this.loading = true
            // this.$refs[form].validate((valid) => {
            //     if (valid) {           
                // JSON.stringify(this.form)
                    this.$store.dispatch('signup', this.form)
                    .then((response) => {
                        this.loading = false

                        if (response.data.status === '00') {
                            this.$message({
                                message: response.data.message,
                                type: 'success'
                            })
                            this.$router.push('/login')
                        } else {
                            this.$message({
                                message: response.data.message,
                                type: 'error'
                            })
                        }                  
                        this.loading = false
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
            //     }
            // })         
        },
        remoteMethod() {

        }
    },
    mounted() {
        // EventBus.$on('addVehicle', () => {
        //     this.ticketVisible = false
        // })        
    }
}
</script>

<style lang="scss" scoped>
.el-header, .el-footer {
        height: inherit!important;
        background: rgba(0,0,0,.8)!important;
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
        background-image: url("/@/assets/images/driver-using-delivery-software.jpg");
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

    #frm {
        .row {
            margin-bottom: 20px;

            .col {
                float: left;
                box-sizing: border-box;
                padding: 0 0.75rem;
            }            

            @media only screen and (min-width: 601px) {
                .col.m6 {
                    width: 50%;
                    margin-left: auto;
                    left: auto;
                    right: auto;
                }
            }            

            label {
                color: #6b6b6b!important;
                width: 100%;
                margin-bottom: 5px;
                font-weight: 700;        
            } 
            
            input {
                height: 2rem;
                border: 1px solid #e1e1e1;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
                padding: 2px 8px;
                margin: 0!important;
                font-size: 12px;
                background: #fff;
                width: 97%;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            } 
            
            .select-wrapper {
                position: relative;

                span.caret {
                    width: 0;
                    height: 0;
                    border-right: 4px solid transparent;
                    right: 10px !important;
                    top: 10px !important;
                    z-index: 10;
                    position: absolute;
                    font-size: 10px;
                }  
            }          
        }
    }

    .page-content {
        min-height: 400px;
        padding-top: 80px!important;

        h2 {
            font-size: 41px;
            font-weight: 700;
        }
    }
    .sections {
        padding-top: 20px;
        padding-bottom: 40px;
    }
    h5 {
        font-size: 1.64rem;
        line-height: 110%;
        margin: 0.82rem 0 0.656rem 0;
    }
    .signup-fields {
        border-left: 1px solid #e8e8e8;
        padding-left: 30px;
    }
</style>

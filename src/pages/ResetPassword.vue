<template>
    <div class="login-background">
        <section class="login-background" id="particles-js">
            <div id="particles-js"></div>
        </section>
        <el-container>
            <div class="login-wrap rounded s-13">
                <router-link to="/">
                    <img src="../assets/images/delivery-truck.svg">  
                </router-link>

                <el-form @keyup.enter.native="login('form')" :model="form" :rules="rules" ref="form" class="frm rounded3" id="frm_login">
                    <div class="inner">
                        <p class="text-center mb-5 s-14">Enter your email address and we will send you a link to reset your password.</p>
                        <el-form-item prop="email">
                            <el-input autocomplete="on" class="lightblue-fields rounded no-border-input" placeholder="Email" v-model="form.email" type="email"></el-input>
                        </el-form-item>

                        <el-form-item class="my-2">
                            <el-button class="w-100" :loading="loading" type="warning" @click="login('form')">Send Password to reset email</el-button>
                        </el-form-item>
                    </div>
                </el-form>                

                <hr>

                <p class="center white-text s-14">
                    <router-link to="/login" class="green-text px-1">Go back to Login</router-link>
                </p>
            </div>
        </el-container>        
    </div>
</template>

<script>
export default {
    name: 'ResetPassword',
    data() {
        return {
            remember: false,
            loading: false,
            // type: 'password',
            form: { },
            rules: {
                email: [
                    { required: true, message: 'Please input email', trigger: 'blur' }
                ],
                // password: [
                //     { required: true, message: 'Please input password', trigger: 'blur' }
                // ]
            }            
        }
    },
    mounted() {
        require('particles.js')
        particlesJS.load('particles-js', this.initParticlesJS(), function() {
        console.log('callback - particles.js config loaded');
        });              
    },
    methods: {
        initParticlesJS() {
            particlesJS('particles-js', {
               "particles": {
                    "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                    },
                    "color": {
                    "value": "#454343"
                    },
                    "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#454343"
                    },
                    "polygon": {
                        "nb_sides": 8
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                    },
                    "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 25,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                    },
                    "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false,
                        "color": "#454343"
                    }
                    },
                    "line_linked": {
                    "enable": true,
                    "distance": 120,
                    "color": "#454343",
                    "opacity": 0.4,
                    "width": 1
                    },
                    "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                    },
                    "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                        "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 1,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                    }
                },
                "retina_detect": true              
            })
        },      
        login() {
            this.$router.push(`/app/dashboard`)
        },
        showPassword() {
            this.type = this.type === 'password' ? 'text' : 'password'
        },
        forgotPassword() {
            // this.$router.push('/forgot-password')
            alert('Coming Soon!')
        }        
    }
}
</script>

<style lang="scss" scoped>
    .login-background {
        background: #1e1e1e;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        z-index: -1;
        overflow: hidden;
    }
    .rounded {
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        -khtml-border-radius: 2px;
    }
    .login-wrap {
        margin: auto;
        margin-top: 7%;
        width: 350px;

        .frm {
            border: 1px solid #d8d8d8;
            background: #f7f8fa;
            border-radius: 3px;
            .inner {
                padding: 20px;
            }
            p {
                margin-bottom: 3px;
            }
            input{
                border: 1px solid #d8d8d8;
                padding: 8px 10px;
                font-size: 14px;
                width: 100%;
                border-radius: 7px;
                background-image: none !important;
            }
        }
        img {
            display: block;
            margin: auto;
            max-width: 80px;
            margin-bottom: 10px;
        }
        hr {
            border-top: 1px solid #605b61;
            height: 1px;
        }        
        .sub-section {
            border-top: 1px solid #e1e1e1;
            padding: 10px 20px;

            a {
                color: #939598!important;
                text-decoration: underline;
            }             
        }
        .green-button.large {
            display: block;
            text-align: center;
            width: 100%;
            padding: 10px 8px;
        }
        .green-button{
            background:#89d541;
            border:1px solid #89d541;
            color:#fff;
            padding: 5px 15px;
            -webkit-border-radius: 30px;
            -moz-border-radius: 30px;
            border-radius: 30px;
        }
        .green-button:hover{
            color:#89d541 !important;
            background:#fff !important;
            border:1px solid #89d541 !important;	
        }
        .green-button-o{
            background:#fff;
            border:1px solid #89d541;
            color:#89d541;
            padding: 5px 15px;
            -webkit-border-radius: 30px;
            -moz-border-radius: 30px;
            border-radius: 30px;
            font-weight:bold;
            overflow:hidden;
        }
        .green-button-o:hover {
            color:#fff !important;
            background:#89d541 !important;
            border:1px solid #89d541 !important;	
        }
    }  
</style>

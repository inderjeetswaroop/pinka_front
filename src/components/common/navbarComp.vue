<template>
    <div>
        <div id="sticky-header" class="datatech_nav_manu d-md-none d-lg-block d-sm-none d-none">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-3">
                        <div class="logo">
                            <router-link :to="{name:'homepage'}" class="logo_img" title="Pinak">
                                <img src="/static/logo-2.png" alt="Pinak Logo" />
                            </router-link>
                            <router-link :to="{name:'homepage'}" class="main_sticky" title="Pinak">
                                <img src="/static/logo.png" alt="Pinak Logo" />
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <nav class="datatech_menu">
                            <mainmenu :logged="login"></mainmenu>			
                        </nav>
                    </div>
                    <div class="col-lg-4">
                        <div class="header-btn-socails">	
                            <div class="header-button">
                                <router-link v-if="login == 1" :to="{name:'mydashboard'}"  title="account" class="dtbtn">Dashboard</router-link>
                                <router-link v-else :to="{name:'login'}"  title="account" class="dtbtn">Login</router-link>
                            </div>
                            <div class="socails-icon">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=100085772086954"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/Pinak_Ai"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/i_am_pinakai?igshid=Zjc2ZTc4Nzk="><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/88950421/admin/"><i class="fab fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>	
                    </div>
                </div>
            </div>
        </div>
        <!-- datatech Mobile Menu Area -->
        <div class="mobile-menu-area d-sm-block d-md-block d-lg-none ">
            <div class="mobile-menu">
                <nav class="datatech_menu">
                    <mainmenu :logged="login"></mainmenu>
                </nav>
            </div>
        </div>

    </div>
</template>

<script>

import Vue from 'vue'
Vue.component('mainmenu', require('./menuCom.vue').default);
export default ({
    data() { 
        return{
            login:0
        }
    },
    created(){
        if (this.$session.has('userId') || this.$session.exists()) {
                this.login = 1
        }
            
    },
    mounted() {
        this.$root.$on("loggedIn",(token)=>{
            this.login = token;
        })
    }  
})
</script>

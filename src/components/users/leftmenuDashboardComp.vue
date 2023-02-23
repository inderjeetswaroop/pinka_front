<template>
    <div class="col-lg-2 col-md-4 pt-n2 pl-1 ">
        <div class="dashboard-sidebar ml-2 rounded">
            <div class="d-flex flex-nowrap userdetails">
                <div>
                    <i class="fa fa-user"></i>
                </div>
                <div >
                    <div class="text-center ml-3">
                        <h5 class="font-weight-bold">{{userDetail.user_name}}</h5>    
                        <p >{{usertype}}</p>
                    </div>
                </div>
            </div>
            <div class="menudetails">
                <ul>
                    <li>
                        <router-link :to="{name:'mydashboard'}">
                            <p>
                                <i class="fa fa-home menu-icon"></i> <span>DASHBOARD</span>
                            </p>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'addnewaudio'}">
                            <p>
                                <i class="fa fa-volume-up menu-icon"></i> <span>AUDIOS SETTING</span>
                            </p>
                        </router-link>
                    </li>
                    <li>
                        <a href="#" data-toggle="collapse" data-target="#myaccount">
                            <p>
                                <i class="fa fa-user menu-icon"></i> <span>MY ACCOUNT</span> <i class="text-theme fa fa-angle-down float-right mr-2 mt-1"></i>
                            </p>
                        </a>
                        <div id="myaccount" class="collapse">
                            <ul class="ml-5">
                                <li>
                                    <p>
                                        <router-link :to="{name:'myaccount'}"> <span class="text-theme">-</span> Manager Info</router-link>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <router-link :to="{name:'myaccount'}"> <span class="text-theme">-</span> My Account</router-link>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <router-link :to="{name:'myaccount'}"> <span class="text-theme">-</span> Password Setting</router-link>
                                    </p>
                                </li>
                            </ul>
                        </div>    
                            
                    </li>
                    <li v-if="usertype == 'admin' || usertype == 'manager'">
                        <router-link :to="{name:'addnewuser'}">
                            <p>
                                <i class="fa fa-volume-up menu-icon"></i> <span>USER SETTING</span>
                            </p>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'logout'}">
                            <p>
                                <i class="fa fa-sign-out-alt menu-icon"></i> <span>LOGOUT</span>
                            </p>
                        </router-link>
                    </li>
                    
                </ul>    
            </div>
            <div class="sidebar-bottom">
                <ul>
                    <li>
                        <p>
                            <i class="fa fa-arrow-left text-theme mr-5"></i> <span class="ml-5 text-theme">CLOSE</span>
                        </p>
                    </li>
                </ul>
            </div>

        </div>
        
    </div>
                    
</template>
<script>

import Vue from 'vue'
export default {
    data() { 
        return{
            userid: "0",
            userDetail:{},
            usertype:""
        }
    },
     beforeCreate(){
        

        if (!this.$session.has("userId") || !this.$session.exists()) {
            this.$router.push("/user-login");
        }
        
    },
    created(){
            //
        
        this.userid = this.$session.get("userId");
        this.usertype = this.$session.get("iAMUser");
        this.merchantId = this.$session.get("merch");

        if (this.usertype == "admin") {
            Vue.axios.get(this.$flask_api_link+"/get-single-user-detail/"+this.userid)
            .then((response) => this.userDetail = response.data)
            .catch((error) => console.log(error));
            //     
        }
        else{
            Vue.axios.get(this.$flask_api_link+"/get-single-user-detail/"+this.userid+"/"+this.merchantId)
            .then((response) => this.userDetail = response.data)
            .catch((error) => console.log(error));
            // 
        }
        
        
    }
    
    

}
</script>
<style scoped>
.contact-icon i{
    font-size: 24px;
    margin-top: 1px;
    color:#f16722;
}
.contact-location{
    padding: 0;
}
.dashboard-sidebar{
    background-color: #fff;
    padding: 10px;
    height: 100%;
    position: fixed;
    width: 15%;
    z-index: 1000;
}
.userdetails .fa-user{
    font-size: 36px;
    padding: 15px 18px;
    border-radius: 50%;
    background: #f16722;
    color: white;
}
.dashboard-sidebar .userdetails{
    border-bottom: 1px solid #B6B6B6;
    align-content: center;
    padding-bottom: 20px;
    
}
.menudetails{
    padding-top: 40px;
}
.menudetails ul{
    list-style: none;
}
.menudetails .menu-icon{
    border-radius: 50%;
    background: #f16722;
    color: white;
    padding: 6px;
    margin-right: 11px;
    font-size: 11px;
}
.menudetails span{
    font-size:14px;
    color:#000;
}
.fa-dash{
    color:#f16722
}
#myaccount a{
    color:#000;
}
.sidebar-bottom
{
    border-top: 1px solid #B6B6B6;
    align-content: center;
    padding-top: 20px;
    position: absolute;
    bottom: 1px;
}
@media only screen and (max-width: 768px) {
    .style-two.contact-us-area
    {
        padding: 17px 0 100px;
    }   
}

</style>
<template>
    <div>
        <div class="contact-us-area style-two">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                    </div>
                    <div class="col-lg-6 p-2 mt-4">
                        <div class="contact-bg card p-3 shadow rounded">
                            <div class="card-body ">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="dreamit-section-title text-left pb-3">
                                            <h5>LogIn To Your Account</h5>
                                            <div class="em_bar_bg text-left"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="contact-form-box">
                                        <form method="POST" id="dreamit-form" @submit.prevent="login">
                                            <div class="row">
                                                <div v-if="userType !=0" class="col-md-12" >
                                                    <div class="from-box">
                                                        <input type="text" v-model="mid" placeholder="Enter Merchant Id" :required="mid_require">
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="from-box">
                                                        <input type="text" v-model="uemail" :placeholder="usernameplaceholder" required>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="from-box">
                                                        <input type="password" v-model="upassword" placeholder="Enter Password" required>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-check-inline">
                                                        <label class="form-check-label" @change="checkUser" >
                                                            <input type="radio" class="form-check-input"  value="0" v-model="userType">Root User 
                                                        </label>
                                                    </div>
                                                    <div class="form-check-inline">
                                                        <label class="form-check-label" @change="checkUser">
                                                            <input type="radio" class="form-check-input"  value="1" v-model="userType">I am Manager
                                                        </label>
                                                    </div>
                                                    <div class="form-check-inline">
                                                        <label class="form-check-label" @change="checkUser">
                                                            <input type="radio" class="form-check-input" value="2" v-model="userType">I am Employee
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="contact-button text-center">
                                                        <p :class="msgColor">{{ msg }}</p>
                                                        <button :disabled="dis" type="submit">Login</button>
                                                        
                                                        <div class="row mt-4">
                                                            <div class="col-md-7 px-2">
                                                                <p>Dont't have account? Register <router-link :to="{name:'register'}"  title="Products">Here</router-link></p>
                                                            </div>
                                                            <div class="col-md-5 px-2">
                                                                <p><router-link :to="{name:'forgotPass'}"  title="Products">Forgot Password</router-link></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </form>
                                        <div id="status"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default({
    data(){
        return{
            uemail:"",
            upassword:"",
            msgColor:"",
            msg:"",
            dis:false,
            userType:0,
            usernameplaceholder:"Enter Email/ 10 digit Phone Number",
            mid:0,
            mid_require:false,
            
        }
    },
    methods:{
        login(){
                this.dis = true
                this.msgColor="text-success";
                this.msg="Please Wait...";
                const formdata = new FormData();
                formdata.append("useremail",this.uemail);
                formdata.append("userpass",this.upassword);
                formdata.append("merch_id",this.mid);
                formdata.append("usertype",this.userType);
                
                Vue.axios.post(this.$flask_api_link+"/user-login-data",formdata)
                .then((data) =>{
                    // console.log(data.data);
                    if (data.data.status == "success") {
                        this.$session.start();
                        this.$session.set("userId",data.data.message);
                        this.$session.set("iAMUser",data.data.iAMUser);
                        this.$session.set("merch",data.data.merchant);
                        this.$root.$emit("loggedIn",1)    
                        this.$router.push('/my-dashboard'); 
                        this.msg="";
                    }
                    else{
                        this.msg="Invalid Credentials! please try again!";
                    }
                    this.dis = false
                    
                })
                .catch(error => {
                    this.msgColor="text-danger";
                    this.msg="Please Fix Errors";
                    this.error = error.response.data.errors;
                    console.log(this.error);
                    this.dis = false
                })

                
                
        },
        checkUser() {
            if (this.userType == 0) {
                this.usernameplaceholder="Enter Email/ 10 digit Phone Number"
            }
            else{
                this.usernameplaceholder = "Enter Username"    
                this.mid_require = true
                this.mid=""
                
            }
            
        }
    },
    beforeCreate(){
        this.$Progress.start();

        if (this.$session.has("userId") || this.$session.exists()) {
            if (this.$session.has("userId")) {
                this.$router.push("/");   //last push was my-course 
            }
        }
    },
    created(){
        var merchantId = this.$route.query.merchantId
        var user = this.$route.query.usertype
        if(merchantId && user){
            this.mid = merchantId
            this.usernameplaceholder = "Enter Username"    
            if(user == "employee"){
                this.userType = 2
            }
            else if(user == "manager"){
                this.userType = 1
            }
            else{
                this.userType = 0
            }
        }
        else{
                this.userType = 0
            }
        this.$Progress.finish();
    }

})
</script>
<style scoped>
    label {
        color: #616161;
    }
    input[type='radio']:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -4px;
        left: -1px;
        position: relative;
        background-color: #d1d3d1;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }

    input[type='radio']:checked:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -4px;
        left: -1px;
        position: relative;
        background-color: #ffa500;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }
</style>
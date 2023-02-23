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
                                            <h5>Register To Your Account</h5>
                                            <div class="em_bar_bg text-left"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="contact-form-box">
                                        <form id="dreamit-form" @submit.prevent="register">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <div class="from-box">
                                                        <input type="text" v-model="uname" placeholder=" Name" required :disabled="dis">
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <div class="from-box">
                                                        <input type="email" v-model="uemail" placeholder="Email" required :disabled="dis">
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <div class="from-box">
                                                        <input type="text" v-model="uphone" placeholder=" Phone" required :disabled="dis">
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-12">
                                                    <div class="from-box">
                                                        <input type="password" v-model="upassword" placeholder="Enter Password" required :disabled="dis">
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12">
                                                    <div class="from-box">
                                                        <input type="text" v-model="ucompany" placeholder="Enter your Comapny name" required :disabled="dis">
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="contact-button text-center">
                                                        <p :class="msgColor">{{ msg }}</p>
                                                        <button type="submit">Register</button>
                                                        <br>
                                                        <p>Already have account? Login <router-link :to="{name:'login'}"  title="Products">Here</router-link></p>
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
            uname:"",
            uemail:"",
            uphone:"",
            upassword:"",
            ucompany:"",
            msgColor:"",
            msg:"",
            dis:false,
        }
    },
    methods:{
        register(){
                this.dis = true
                this.msgColor="text-success";
                this.msg="Please Wait...";
                const formdata = new FormData();
                formdata.append("username",this.uname);
                formdata.append("userphone",this.uphone);
                formdata.append("useremail",this.uemail);
                formdata.append("userpass",this.upassword);
                formdata.append("usercompany",this.ucompany);
                Vue.axios.post(this.$flask_api_link+"/user-register",formdata)
                .then((data) =>{
                    if (data.data.status == "success") {
                        this.msgColor="text-success";
                        this.uname=""
                        this.uemail=""
                        this.uphone=""
                        this.upassword=""
                        this.ucompany=""
                    }
                    else{
                        this.msgColor="text-danger";
                    }
                    console.log(data.data)
                    this.msg= data.data.message;
                    this.dis = false
                    
                })
                .catch(error => {
                    this.msgColor="text-danger";
                    this.msg = error.response.data.errors;
                    console.log(this.error);
                    this.dis = false
                })
        }
    },
    beforeCreate(){
        this.$Progress.start();
    },
    created(){
        this.$Progress.finish();
    }

})
</script>
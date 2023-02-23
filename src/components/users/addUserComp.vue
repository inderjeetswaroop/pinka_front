<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="dreamit-section-title text-left pb-3">
                    <h5>User Setting</h5>
                    {{ userid }} -- {{ usertype }} -- {{ merchantId }}
                    <div class="em_bar_bg text-left"></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <form method="POST" id="dreamit-form" @submit.prevent="addUser" class="form-inline">
                    <div class="from-box">
                        <input type="text" v-model="fullName" placeholder="Enter Full Name">
                    </div>
                    <div class="from-box ml-2">
                        <input type="text" v-model="username" placeholder="Enter User Name">
                    </div>
                    <div class="from-box ml-2">
                        <input type="text" v-model="password" placeholder="Enter User Password">
                    </div>
                    <div class="from-box ml-2">
                        <select v-model="userlevel" @change="getemployee()">
                            <option v-if="usertype == 'admin'" value="1">Manager</option>
                            <option value="0">Employee</option>
                        </select>
                    </div>
                    <div v-if="emp == 1" class="from-box ml-2">
                        <select v-model="managers">
                            <option value="0">Select Manager</option>
                            <option v-for="(mngs,index) in myuserList" :key="index" :value="mngs.user_name">{{ mngs.user_name }}</option>
                        </select>
                    </div>
                    <div class="contact-button text-center ml-2 mb-3">
                        <button type="submit">Add User</button>
                    </div>
                    
                </form>
                    <p :class="msgColor">{{ msg }}</p>
                <br>
                <table class="table table-bordered table-hovered">
                    <thead>
                        <tr>
                            <th>
                                Sr. No
                            </th>
                            <th>
                                Full Name
                            </th>
                            <th>
                                Username
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Action  
                            </th>
                            <th>
                                Login Link
                            </th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in myuserList" :key="index">
                            <td>{{ index+1 }}</td>
                            <td>
                                {{ item.user_fullname }}
                                <br>
                                <!-- {{ item._id.$oid }} -->
                            </td>
                            <td>
                                {{ item.user_name }}
                                <br>
                                <!-- {{ item._id.$oid }} -->
                            </td>
                            <td>
                                <span v-if="item.user_status == 1" class="badge badge-success">Active</span>
                                <span v-else class="badge badge-danger">Disabled</span>
                                <br>
                                <small><a href="#" class="text-link">Change Status</a></small>
                            </td>
                            <td>
                                <div class="btn-group">
                                    <router-link title="Edit User" :to="'/edit-user/'+userid+'/'" class="btn btn-info btn-sm"><i class="fa fa-pencil-alt mr-2"></i></router-link>
                                    <router-link data-toggle="tooltip" title="Check Employees" :to="'/edit-user/'+userid+'/'" class="btn btn-secondary btn-sm"><i class="fa fa-list mr-2"></i></router-link>
                                </div>
                            </td>
                            <td>
                                <div class="btn-group">
                                    <a href="#" title="Copy Login Link" class="mr-2 text-dark"  @click='copyme(baseUrl + "/user-login?merchantId="+ merchantId +"&usertype=manager","copy")'><i class="fa fa-copy mr-2"></i></a>
                                    <a href="#" title="Show Link" @click='copyme(baseUrl +"/user-login?merchantId="+ merchantId +"&usertype="+linktype,"show")'><i class="fa fa-eye mr-2"></i></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import Vue from 'vue'
export default {
    data() { 
        return{
            myuserList:"",
            userid:"",
            usertype:"",
            msgColor:"",
            msg:"",
            username:"",
            password:"",
            userlevel:1,
            emp:0,
            managers:0,
            fullName:"",
            linktype:"",
            baseUrl:window.location.origin
        }
    },
     beforeCreate(){
        this.$Progress.start();
        
        if (this.$session.has("userId") || this.$session.exists()) {
            if (this.$session.get("iAMUser") == "employee") {
                this.$router.push("/");   //last push was my-course 
            }
        }
        
    },
    created(){
        
        this.userid = this.$session.get("userId"); // In case of manager and employee it will contain username respectively
        this.usertype = this.$session.get("iAMUser");
        this.merchantId = this.$session.get("merch");
        
        if(this.usertype == "manager" )
                { this.linktype = "employee"}
            else{
                { this.linktype = "manager"}
            }    

        if (this.usertype == "admin") {
            this.userlevel = 1
            Vue.axios.get(this.$flask_api_link+"/get-admins-user-list/"+this.userid)
            .then((response) => {
                this.myuserList = response.data
            })
            .catch((error) => console.log(error));
        }
        else{
            
            this.managers = this.$session.get("userId")
            this.userlevel = 0
            Vue.axios.get(this.$flask_api_link+"/get-employee-user-list/"+this.userid+"/"+this.merchantId)
            .then((response) => {
                this.myuserList = response.data
            })
            .catch((error) => console.log(error));
        }
        
        
        this.$Progress.finish();
    },
    methods:{
        addUser(){
                
                this.userid = this.$session.get("userId");
                this.msgColor="text-success";
                this.msg="Please Wait...";
                const formdata = new FormData();
                formdata.append("uname",this.username);
                formdata.append("adminuser",this.userid);
                formdata.append("fullName",this.fullName);
                formdata.append("upassword",this.password);
                formdata.append("usertype",this.userlevel);
                formdata.append("manager_username",this.managers);
                if (this.usertype == "admin") {
                    Vue.axios.post(this.$flask_api_link+"/add-new-user-level",formdata)
                    .then((data) =>{
                            // console.log(data.data)
                        if (data.data.status == "success") {
                            this.myuserList = data.data.allusers
                            this.msg="User Added Successfully";
                        }
                        else{
                            this.msgColor="text-danger";
                            this.msg=data.data.message;
                        }
                        
                        
                    })
                    .catch(error => {
                        this.msgColor="text-danger";
                        this.msg="Please Fix Errors";
                        this.error = error.response.data.errors;
                        console.log(this.error);
                        
                    })
                }
                else{
                    
                    Vue.axios.post(this.$flask_api_link+"/add-new-employee-level/"+this.merchantId,formdata)
                        .then((data) =>{
                                console.log(data.data)
                            if (data.data.status == "success") {
                                this.myuserList = data.data.allusers
                                this.msg="User Added Successfully";
                            }
                            else{
                                this.msgColor="text-danger";
                                this.msg=data.data.message;
                            }
                            
                            
                        })
                        .catch(error => {
                            this.msgColor="text-danger";
                            this.msg="Please Fix Errors";
                            this.error = error.response.data.errors;
                            console.log(this.error);
                            
                        })
                }
                

                
                
        },
        getemployee(){
            if(this.userlevel == 0){
                this.emp = 1
            }
            else{
                this.emp = 0   
            }
        },
        async copyme(mytext,actionType){
            if(actionType == "copy"){
                try {
                    await navigator.clipboard.writeText(mytext);
                        this.msgColor="text-success";
                        this.msg="Coppied";
                        
                    } catch($e) {
                        this.linkMsg = "Not Coppied! Please try Again "
                    }
            }
            else{
                this.msgColor="text-success";
                this.msg=mytext
                
            }
            
            
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
input{
    height:35px;
}
.contact-button button
{
    padding: 4px 39px;
}
.from-box select{
    background: #fff none repeat scroll 0 0;
    height: 35px;
    border: 1px solid #ced4da;
    border-radius: 8px;
    padding-left: 10px;
    color: #616161;
    width: 100%;
    position: relative;
    margin-bottom: 16px;
}
@media only screen and (max-width: 768px) {
    .style-two.contact-us-area
    {
        padding: 17px 0 100px;
    }   
}

</style>
<template>
    <div class="card" style="height:680px">
        <div class="card-body">
            <div class="row">
                <div class="col-md-4 p-3">
                    <div class="shadow p-3 rounded">
                        <div class="form-group">
                            Change Password<input type="text" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary">Change Password</button>
                    </div>
                </div>
                <div class="col-md-4 p-3">
                    <div class="shadow p-3 rounded">
                        <div class="form-group">
                            <h4>My Info:</h4>
                            <p class="font-weight-bold">User Name : {{ userDetail.user_name }} </p>
                            <p class="font-weight-bold">Merchant Id : {{merchantId}}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    data() { 
        return{
            userid:"",
            merchantId:"",
            userDetail:{},
        }
    },
     beforeCreate(){
        this.$Progress.start();
    },
    created(){
        this.userid = this.$session.get("userId");
        this.merchantId = this.$session.get("merch");
        this.usertype = this.$session.get("iAMUser");

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

        this.$Progress.finish();
        
        
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
@media only screen and (max-width: 768px) {
    .style-two.contact-us-area
    {
        padding: 17px 0 100px;
    }   
}

</style>
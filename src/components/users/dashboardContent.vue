<template>
    <div class="row py-2">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body p-2 pt-1">
                    <lineChart></lineChart>
                </div>
            </div>
        </div>
        <div class="col-md-6 p-3 pt-1">
            <div class="card">
                <div class="card-body p-">
                    <barChart />        
                </div>
            </div>
            
        </div>
        <div class="col-md-6 p-3 pt-1">
            <div class="card">
                <div class="card-body p-">
                    <donutChart />
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
Vue.component('barChart', require('./barChart.vue').default);
Vue.component('pieChart', require('./pieChart.vue').default);
Vue.component('lineChart', require('./lineChart.vue').default);
Vue.component('donutChart', require('./donutChart.vue').default);
import Vue from 'vue'
export default {
    data() { 
        return{
            userData:{},
        }
    },
     beforeCreate(){
        this.$Progress.start();
    },
    created(){
        
        this.userid = this.$session.get("userId");
        
        /* Vue.axios.get(this.$flask_api_link+"/get-user-audio/"+this.userid)
            .then((response) => {
                this.userData = response.data
            })
            .catch((error) => console.log(error)); */

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
.theme-btn{
    border: medium none;
    font-size: 16px;
    line-height: 1;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    text-transform: capitalize;
    padding: 5px 15px;
    font-weight: 600;
    letter-spacing: 0;
    position: relative;
    margin: 0 3px;
    margin-bottom: 2px;
    display: inline-block;
    border-radius: 5px;
    color: #F16722;
    background: none;
    border: 1px solid #F16722;
    transition: .5s;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
    
}
.theme-btn:hover{
    background: #F16722;
    color:#fff;
    transition: .5s;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
    
    
}
@media only screen and (max-width: 768px) {
    .style-two.contact-us-area
    {
        padding: 17px 0 100px;
    }   
}

</style>
<template>
  <div id="app">
    <navbar v-if="navshow == 0"></navbar>
    <router-view/>
    <footer-area></footer-area>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('navbar', require('./components/common/navbarComp.vue').default);
Vue.component('footerArea', require('./components/common/footerComp.vue').default);
export default {
  
  name: 'App',
  data() {
    return {
      navshow:0
    }
  },
  metaInfo(){
        return{
          script: [
                
              ],
        }
    },
    created(){
        if (this.$session.has('userId') || this.$session.exists()) {
                this.navshow = 1
        }
            
    },
    mounted() {
        this.$root.$on("loggedIn",(token)=>{
            this.navshow = token;
        })
      },

}
</script>

<style>
  @import './assets/css/style.css';
  @import './assets/css/bootstrap.min.css';
  @import './assets/css/nivo-slider.css';
  @import './assets/css/animate.css';
  @import './assets/css/animated-text.css';
  @import './assets/css/all.min.css';
  @import './assets/css/flaticon.css';
  @import './assets/css/theme-default.css';
  @import './assets/css/meanmenu.min.css';
  @import './assets/css/owl.transitions.css';
  @import './../static/venobox/venobox.css';
  @import './assets/css/widget.css';
  @import './assets/css/responsive.css';
</style>

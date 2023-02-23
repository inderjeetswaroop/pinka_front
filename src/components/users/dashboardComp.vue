<template>
    <div class="row p-2" style="background:gray">
        <sidebar></sidebar>
        <div class="col-lg-10 col-md-8 p-0">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
Vue.component('sidebar', require('./leftmenuDashboardComp.vue').default);
export default ({})


</script>

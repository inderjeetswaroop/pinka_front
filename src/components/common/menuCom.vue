<template>
    <ul :class="screen > 768 ? 'nav_scroll':'' ">
        <li><router-link :to="{name:'homepage'}" title="homepage"> Home</router-link></li>
        <li><router-link :to="{name:'about'}" title="About Us">About Us</router-link></li>
        <li><router-link :to="{name:'products'}" title="Products">Products</router-link></li>
        <li><router-link :to="{name:'contact'}" title="Products">Contact Us</router-link></li>
        <li v-if="logged == 1"><a href="#">My Account <span><i class="fas fa-angle-down"></i></span></a>
            <ul class="sub-menu">
                <li>
                    <router-link :to="{name:'mydashboard'}" title="Dashboard" >Dashboard</router-link>
                </li>
                <li><router-link :to="{name:'logout'}"  title="Logout">Logout</router-link></li>
            </ul>
        </li>
    </ul>
</template>

<script>

export default ({
    props:["logged"],
    data(){
        return{
            screen:"",
        }
    },
    created(){
           this.screen = window.screen.width;
           
    }
})
</script>

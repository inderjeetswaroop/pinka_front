import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
      {
        path: '/',
        name: 'homepage',
        component: ()=>  import(/* webpackChunkName: 'testyrl'*/ "@/components/homepageComp"),
      },
      {
        path: '/about-us',
        name: 'about',
        component: ()=>  import(/* webpackChunkName: 'testyrl'*/ "@/components/aboutpageComp"),
      },
      {
        path: '/products',
        name:'products',
        component: ()=>  import(/* webpackChunkName: 'testyrl'*/ "@/components/productsListComp"),
      },
      {
        path: '/products/:prourl?',
        name:'proinfo',
        component: ()=>  import(/* webpackChunkName: 'testyrl'*/ "@/components/singleProInfoComp"),
      },
      {
        path: '/contact-us',
        name:'contact',
        component: ()=>  import(/* webpackChunkName: 'testyrl'*/ "@/components/contactComp"),
      },
      {
        path: '/user-login/:merchantId?/:userType?',
        name:'login',
        component: ()=>  import(/* webpackChunkName: 'testyrl'*/ "@/components/loginComp"),
      },
      {
        path: '/user-register',
        name:'register',
        component: ()=>  import(/* webpackChunkName: 'testyrl'*/ "@/components/registerComp"),
      },
      {
        path: '/forgot-password',
        name:'forgotPass',
        component: ()=>  import(/* webpackChunkName: 'testyrl'*/ "@/components/forgotpassComp"),
      },
      {
        path: '/logout',
        name:'logout',
        component: ()=>  import(/* webpackChunkName: 'userLogout'*/ "@/components/logoutComp") 
      },
      {
        path: '/dashboard',
        name:'dashboard',
        component: ()=>  import(/* webpackChunkName: 'userLogout'*/ "@/components/users/dashboardComp"),
        children: [
          {
            path: '/my-dashboard',
            name:'mydashboard',
            component: ()=>  import(/* webpackChunkName: 'userLogout'*/ "@/components/users/dashboardContent") 
          },
          {
            path: '/my-account',
            name:'myaccount',
            component: ()=>  import(/* webpackChunkName: 'userLogout'*/ "@/components/users/myaccountComp") 
          },
          {
            path: '/add-new-audio',
            name:'addnewaudio',
            component: ()=>  import(/* webpackChunkName: 'userLogout'*/ "@/components/users/addnewaudioComp") 
          },
          
          {
            path: '/admin-user-setting',
            name:'addnewuser',
            component: ()=>  import(/* webpackChunkName: 'userLogout'*/ "@/components/users/addUserComp") 
          },
          {
            path: '/audio-analysis/:audioid',
            name:'addanalysis',
            component: ()=>  import(/* webpackChunkName: 'userLogout'*/ "@/components/users/audioanalysis") 
          },
        ]
      },
      
];

const router = new Router({
  mode:"history", 
  routes, // short for `routes: routes`
  scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})

export default router;
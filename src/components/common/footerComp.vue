<template>
    <div v-if="login == 0">
        
        <!--==================================================-->
        <!-- End datatech quick button Area -->
        <!--==================================================-->
        <div class="quick-button-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8">
                        <div class="quick-button-content">
                            <div class="quick-button-title">
                                <h1>Get Ready to Started It’s Fast & Easy.</h1>
                                <p>Cras pretium lorem a ipsum semper ultrices in vitae risus.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="quick-button-button text-right">
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--==================================================-->
        <!-- End datatech quick button Area -->
        <!--==================================================-->

        <!--==================================================-->
        <!-- Start datatech Footer Middle Area -->
        <!--==================================================-->
        <div class="footer-middle style_two pt-80 pb-3"> 
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="widget widgets-company-info">
                            <div class="datatech-logo">
                                <router-link :to="{name:'homepage'}" class="logo_img"  title="PInak">
                                    <img src="/static/logo-2.png" alt="Pinak " />
                                </router-link>
                            </div>
                            <div class="company-info-desc pr-2">
                                <p>Lorem ipsum dolor ameter creative consectetur adipielit sed eiusm tempor incididunt awesome and creative demos.</p>
                            </div>
                            
                        </div>					
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="widget widget-nav-menu pl-2">
                            <h4 class="widget-title pb-4">Social Links</h4>
                            <div class="company_icon">
                                <a href="https://www.facebook.com/profile.php?id=100085772086954"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/Pinak_Ai"><i class="fab fa-twitter"></i></a>
                                <a href="https://instagram.com/i_am_pinakai?igshid=Zjc2ZTc4Nzk="><i class="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/88950421/admin/"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>	
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div id="em-recent-post-widget">
                            <div class="single-widget-item">
                                <h4 class="widget-title pb-4">Contact Us</h4>
                                <div class="company-info-desc pr-2">
                                    <p>Lorem ipsum dolor ameter creative consectetur adipielit sed.</p>
                                    <p>124, Queens 2nd cross, NY</p>
                                    <p>+00 555 67 890</p>
                                    <p>example@gmail.com</p>
                                </div>
                            </div>
                        </div>	
                    </div>
                </div>
                <div class="row footer-bottom mt-60">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="footer-bottom-content">
                            <div class="footer-bottom-content-copy">
                                <p>Copyright © PAi Innovations all rights reserved.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="footer_buttom_menu">
                            <div class="footer_buttom_menu_inner">
                                <ul>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>		
        <!--==================================================-->
        <!-- End datatech Footer Middle Area -->
        <!--==================================================-->

        <!--==================================================-->
        <!-- Start Search Popup Area -->
        <!--==================================================-->
        <div class="search-popup">
            <button class="close-search style-two"><span class="flaticon-multiply"></span></button>
            <button class="close-search"><span class="flaticon-up-arrow-1"></span></button>
            <form method="post" action="#">
                <div class="form-group">
                    <input type="search" name="search-field" value="" placeholder="Search Here" required>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </div>
            </form>
        </div>
        <!--==================================================-->
        <!-- Start Search Popup Area -->
        <!--==================================================-->
        
    </div>
</template>

<script>
export default ({
    data() { 
        return{
            login:0
        }
    },
    created(){
        if (this.$session.has('userId') || this.$session.exists()) {
                this.login = 1
        }
            
    },
    mounted() {
        this.$root.$on("loggedIn",(token)=>{
            this.login = token;
        })
    }  
})
</script>

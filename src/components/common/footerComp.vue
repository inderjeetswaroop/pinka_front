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
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="widget widgets-company-info">
                            <div class="datatech-logo">
                                <a class="logo_img" href="index-2.html" title="datatech">
                                    <img src="assets/images/logo.png" alt="" />
                                </a>
                            </div>
                            <div class="company-info-desc pr-2">
                                <p>Lorem ipsum dolor ameter creative consectetur adipielit sed eiusm tempor incididunt awesome and creative demos.</p>
                            </div>
                            <div class="company_icon">
                                <a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a class="instagram" href="#"><i class="fab fa-instagram"></i></a>
                                <a class="pinterest" href="#"><i class="fab fa-pinterest-p"></i></a>
                                <a class="twitter" href="#"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>					
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="widget widget-nav-menu pl-2">
                            <h4 class="widget-title pb-4">Useful Links</h4>
                            <div class="menu-quick-link-content">
                                <ul class="menu">
                                    <li><a href="#">Advertising & Marketing</a></li>
                                    <li><a href="#">Healthcare & Medicine</a></li>
                                    <li><a href="#">Financials & Banking</a></li>
                                    <li><a href="#">Travel & Hospitality</a></li>
                                    <li><a href="#">Media & Entertainment</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>	
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="widget widget-nav-menu">
                            <h4 class="widget-title pb-4">Solutions</h4>
                            <div class="menu-quick-link-content">
                                <ul class="menu">
                                    <li><a href="#">Advertising & Marketing</a></li>
                                    <li><a href="#">Healthcare & Medicine</a></li>
                                    <li><a href="#">Financials & Banking</a></li>
                                    <li><a href="#">Travel & Hospitality</a></li>
                                    <li><a href="#">Media & Entertainment</a></li>
                                </ul>
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
                                <p>Copyright © datatech all rights reserved.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="footer_buttom_menu">
                            <div class="footer_buttom_menu_inner">
                                <ul>
                                    <li><a href="home.html">Terms & Conditions</a></li>
                                    <li><a href="#.html">Privacy Policy</a></li>
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

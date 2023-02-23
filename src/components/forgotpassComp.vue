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
                                            <h5>Forgot My Password</h5>
                                            <div class="em_bar_bg text-left"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="contact-form-box">
                                        <form action="" method="POST" id="dreamit-form">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="from-box">
                                                        <input type="text" name="email" placeholder="Enter Email/Phone">
                                                    </div>
                                                </div>
                                                
                                                <div class="col-lg-12">
                                                    <div class="contact-button text-center">
                                                        <button type="submit">Get OTP</button>
                                                        
                                                        <div class="row mt-4">
                                                            <div class="col-md-6 px-2">
                                                                <p>Register new Account <router-link :to="{name:'register'}"  title="Products">Here</router-link></p>
                                                            </div>
                                                            <div class="col-md-6 px-2">
                                                                <p>Login in Account <router-link :to="{name:'login'}"  title="Products">Here</router-link></p>
                                                            </div>
                                                        </div>
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

export default({
    beforeCreate(){
        this.$Progress.start();
    },
    created(){
        this.$Progress.finish();
    }
})
</script>

<template>
    <div>
        <div id="particles" style="height: 930px; background: url(static/images/slider/slider-bg1.png); background-size: auto;background-repeat: no-repeat;background-attachment: scroll;background-position-x: right;background-position-y: top;">
            <div id="webcoderskull">
                <div class="slider-area d-flex align-items-center">
                    <div class="container">
                        <carousel  
                            :autoplay="true" 
                            :nav="false" 
                            :items="1" 
                            :dots="true"
                            :autoplayTimeout="3000"
                            :autoplayHoverPause="true">
                            
                            <template slot="prev"><span class="prev card p-md-2 p-sm-0 ml-2"><i class="fa fa-angle-left text-theme fa-2x"></i></span></template>
                                    <div >
                                        <div class="row align-items-center">
                                            <div class="col-lg-7 col-md-7 col-sm-12">
                                                <div class="slider-content">
                                                    <h1 class="mb-4">Fed up with your Non-Performing sales team?</h1>
                                                    <!-- <h1 class="mb-4">Are you still reading bulky documents? </h1> -->
                                                    <p>If your team is not converting leads into Customers and quality associates are not able to find what to do, <span class="font-weight-bold text-theme">Then?</span> </p>
                                                    
                                                </div>
                                                <div class="slider-button">
                                                    <router-link :to="{name:'contact'}">Try This</router-link>
                                                </div>
                                                <div class="slider-video">
                                                    <div class="video-icon">
                                                        <a class="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" href="https://youtu.be/BS4TUd7FJSg"><i class="fa fa-play"></i></a>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-lg-5 col-md-5 col-sm-12">
                                                <img src="static/images/shape/b1.png" alt="Fed up with your Non-Performing sales team?" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div class="row align-items-center">
                                            <div class="col-lg-7 col-md-7 col-sm-12">
                                                <div class="slider-content">
                                                    <!-- <h1 class="mb-4">Fed up with your Non-Performing sales team?</h1> -->
                                                    <h1 class="mb-4">Are you still reading bulky documents? </h1>
                                                    <p>Reading bulky documents are the things of past. In the AI times, be smart and save your time.</p>
                                                    
                                                </div>
                                                <div class="slider-button">
                                                    <router-link :to="{name:'contact'}">Try This</router-link>
                                                </div>
                                                <div class="slider-video">
                                                    <div class="video-icon">
                                                        <a class="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" href="https://youtu.be/BS4TUd7FJSg"><i class="fa fa-play"></i></a>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="col-lg-5 col-md-5 col-sm-12">
                                                <img src="static/images/shape/b1.png" alt="Fed up with your Non-Performing sales team?" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div class="row align-items-center">
                                            <div class="col-lg-7 col-md-7 col-sm-12">
                                                <div class="slider-content">
                                                    <h1 class="mb-4">Core Transcription</h1>
                                                    <p>Convert your audio and video files, and live audio streams, into text using our simple Speech-to-Text APIs.</p>
                                                </div>
                                                <div class="slider-button">
                                                    <router-link :to="{name:'contact'}">Read More</router-link>
                                                </div>
                                                
                                            </div>
                                            <div class="col-lg-5 col-md-5 col-sm-12">
                                                <img src="static/images/shape/b1.png" alt="Fed up with your Non-Performing sales team?" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div class="row align-items-center">
                                            <div class="col-lg-7 col-md-7 col-sm-12">
                                                <div class="slider-content">
                                                    <h1 class="mb-4">Audio Intelligence</h1>
                                                    <p>It is the ability to analyze and extract information from audio. This can include tasks such as speech recognition, speaker identification, sentiment analysis, and noise reduction. </p>
                                                    
                                                </div>
                                                <div class="slider-button">
                                                    <router-link :to="{name:'contact'}">Try This</router-link>
                                                </div>
                                                
                                            </div>
                                            <div class="col-lg-5 col-md-5 col-sm-12">
                                                <img src="static/images/shape/b1.png" alt="Fed up with your Non-Performing sales team?" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                <template slot="next"><span class="next card p-md-2 p-sm-0 ml-2"><i class="fa fa-angle-right text-theme fa-2x"></i></span></template>     
                            </carousel>
                        
                    </div>
                </div>
            </div>
        </div>
<!--==================================================-->
<!--End datatech slider Area  -->
<!--==================================================-->
<div class="about-area pt-90 pb-50" style="background: #f1f6fc;">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="dreamit-about-thumb">
                    <img src="static/images/resource/about1.png" alt="">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="row pt-2 pl-40">
                    <div class="col-lg-12">
                        <div class="dreamit-section-title text-left">
                            <h2><span>ABOUT US</span></h2>
                            <div class="em_bar_bg"></div>
                            <p>We are an AI-based start-up providing a range of products and solutions in Core Transcription, Language Translation, Audio Intelligence, ERP, and LMS.</p>
                            <h5 class="mt-4">Fields we are working in? </h5>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        
                        
                        <div class="dreamit-icon-box">
                            <div class="content-icon">
                                <i class="flaticon-tick"></i>
                            </div>
                            <div class="right-box">
                                <div class="content-desc">Automation</div>
                            </div>
                        </div>
                        <div class="dreamit-icon-box">
                            <div class="content-icon">
                                <i class="flaticon-tick"></i>
                            </div>
                            <div class="right-box">
                                <div class="content-desc">Chatbots</div>
                            </div>
                        </div>
                        <div class="dreamit-icon-box">
                            <div class="content-icon">
                                <i class="flaticon-tick"></i>
                            </div>
                            <div class="right-box">
                                <div class="content-desc">Supply Chain optimization</div>
                            </div>
                        </div>
                        <div class="dreamit-icon-box">
                            <div class="content-icon">
                                <i class="flaticon-tick"></i>
                            </div>
                            <div class="right-box">
                                <div class="content-desc">Personalization</div>
                            </div>
                        </div>
                        <div class="dreamit-icon-box">
                            <div class="content-icon">
                                <i class="flaticon-tick"></i>
                            </div>
                            <div class="right-box">
                                <div class="content-desc">Marketing</div>
                            </div>
                        </div>
                        <div class="about-button">
                            <router-link :to="{name:'about'}" title="About Us">Read More</router-link>
                            
                        </div>
                    </div>
                    <div class="col-lg-6  col-md-6 col-sm-12">
                        <div class="dreamit-icon-box">
                            <div class="content-icon">
                                <i class="flaticon-tick"></i>
                            </div>
                            <div class="right-box">
                                <div class="content-desc">Fraud detection</div>
                            </div>
                        </div>
                        <div class="dreamit-icon-box">
                            <div class="content-icon">
                                <i class="flaticon-tick"></i>
                            </div>
                            <div class="right-box">
                                <div class="content-desc">Core Transcription</div>
                            </div>
                        </div>
                        <div class="dreamit-icon-box">
                            <div class="content-icon">
                                <i class="flaticon-tick"></i>
                            </div>
                            <div class="right-box">
                                <div class="content-desc">Audio Intelligence</div>
                            </div>
                        </div>
                        <div class="dreamit-icon-box">
                            <div class="content-icon">
                                <i class="flaticon-tick"></i>
                            </div>
                            <div class="right-box">
                                <div class="content-desc">Summarizer</div>
                            </div>
                        </div>
                        <div class="dreamit-icon-box">
                            <div class="content-icon">
                                <i class="flaticon-tick"></i>
                            </div>
                            <div class="right-box">
                                <div class="content-desc">Translation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--==================================================-->
<!-- End datatech about Area -->
<!--==================================================-->
        <!--==================================================-->
        <!-- Start datatech technology Area -->
        <!--==================================================-->
        <div class="technology-area pt-50 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="dreamit-section-title text-center pb-40">
                            <h5>What we offer? </h5>
                            <h2>Our Core <span>Service</span></h2>
                            <div class="em_bar_bg text-left"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <ul class="nav nav-pills flex-column" role="tablist">
                            <li class="nav-item">
                            <a class="nav-link " data-toggle="pill" href="#audiointellingence">
                                <h3>Audio Intelligence</h3>
                                <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> -->
                            </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="pill" href="#coretranscrition">
                                    <h3>Core Transcription</h3>
                                    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> -->
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-toggle="pill" href="#lms">
                                    <h3>CRM </h3>
                                    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> -->
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-toggle="pill" href="#erp">
                                    <h3>ERP <small>(Coming Soon)</small></h3>
                                    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> -->
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-toggle="pill" href="#summarizer">
                                    <h3>SUMMARIZER</h3>
                                    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> -->
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content">
                            <div id="audiointellingence" class="container tab-pane fade"><br>
                                <div class="row">
                                    <div class="col-md-5">
                                        <img src="static/images/resource/about-3.png" alt="" class="img-fluid">
                                    </div>
                                    <div class="col-md-7">
                                        <div class="dreamit-section-title pb-40">
                                            <h5>Audio Intelligence</h5>
                                            <div class="em_bar_bg text-left"></div>
                                            <P>It is the ability to analyze and extract information from audio. This can include tasks such as speech recognition, speaker identification, sentiment analysis, and noise reduction. Speech recognition is the ability to convert spoken words into written text.</P>
                                        </div>
                                        <div class="slider-button">
                                            <router-link :to="{name:'contact'}">Read More</router-link> <router-link :to="{name:'contact'}">Contact</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="coretranscrition" class="container tab-pane active"><br>
                                <div class="row">
                                    <div class="col-md-5">
                                        <img src="static/images/resource/about-3.png" alt="" class="img-fluid">
                                    </div>
                                    <div class="col-md-7">
                                        <div class="dreamit-section-title pb-40">
                                            <h5>CORE TRANSCRIPTION</h5>
                                            <div class="em_bar_bg text-left"></div>
                                            <P>Our AI model automatically convert your audio and video files, and live audio streams, into text using our simple Speech-to-Text APIs</P>
                                        </div>
                                        <div class="slider-button">
                                            <router-link :to="{name:'contact'}">Read More</router-link> <router-link :to="{name:'contact'}">Contact</router-link>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div id="lms" class="container tab-pane fade"><br>
                                <div class="row">
                                    <div class="col-md-5">
                                        <img src="static/images/resource/about-3.png" alt="" class="img-fluid">
                                    </div>
                                    <div class="col-md-7">
                                        <div class="dreamit-section-title pb-40">
                                            <h5>CRM</h5>
                                            <div class="em_bar_bg text-left"></div>
                                            <P><span class="font-weight-bold">Customer relationship management</span> (CRM) is a business strategy that focuses on managing interactions with customers. It also include the pre-sales and post sales. </P>
                                        </div>
                                        <div class="slider-button">
                                            <router-link :to="{name:'contact'}">Read More</router-link> <router-link :to="{name:'contact'}">Contact</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="erp" class="container tab-pane fade"><br>
                                <div class="row">
                                    <div class="col-md-5">
                                        <img src="static/images/resource/about-3.png" alt="" class="img-fluid">
                                    </div>
                                    <div class="col-md-7">
                                        <div class="dreamit-section-title  pb-40">
                                            <h5>ERP</h5>
                                            <div class="em_bar_bg text-left"></div>
                                            <P>Our AI model succefully forecast the future need of rescourses and manage core business processes for optimal performance.</P>
                                        </div>
                                        <div class="slider-button">
                                            <router-link :to="{name:'contact'}">Read More</router-link> <router-link :to="{name:'contact'}">Contact</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="summarizer" class="container tab-pane fade"><br>
                                <div class="row">
                                    <div class="col-md-5">
                                        <img src="static/images/resource/about-3.png" alt="" class="img-fluid">
                                    </div>
                                    <div class="col-md-7">
                                        <div class="dreamit-section-title pb-40">
                                            <h5>SUMMARIZER</h5>
                                            <div class="em_bar_bg text-left"></div>
                                            <P>Summarization is the process of condensing a larger piece of text, such as an article or document, into a shorter summary that retains the most important information.</P>
                                        </div>
                                        <div class="slider-button">
                                            <router-link :to="{name:'contact'}">Read More</router-link> <router-link :to="{name:'contact'}">Contact</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--==================================================-->
        <!-- End datatech technology Area -->
        <!--==================================================-->
    
       <!--==================================================-->
<!--Start datatech testimonial Area -->
<!--==================================================-->
<!-- <div class="testimonial-area">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 col-sm-12">
				<div class="dreamit-section-title text-center pb-40">
					<h5>TESTIMONIALS</h5>
					<h2>What Saying Our Customers</h2>
					<div class="em_bar_bg text-left"></div>
				</div>
			</div>
		</div>
		<div class="row">
			<carousel  
                :autoplay="true" 
                :nav="false" 
                :items="3" 
                :dots="false"
                :autoplayTimeout="3000"
                :autoplayHoverPause="true"
                
                >
				<div class="col-lg-12 col-sm-12">
					<div class="dreamit-single-testimonial-box">
						<div class="testimonial-content">
							<div class="testi-icon">
								<i class="fas fa-quote-left"></i>
							</div>
							<div class="testimonial-text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</div>
						</div>
						<div class="testimonial-thumb text-center">
							<img src="assets/images/resource/testi1.jpg" alt="">
						</div>
						<div class="testi-titile text-center">
							<h2>Anowar Hossain </h2>
							<span>Robotic Engineer</span>
						</div>
					</div>
				</div>
				<div class="col-lg-12 col-sm-12">
					<div class="dreamit-single-testimonial-box">
						<div class="testimonial-content">
							<div class="testi-icon">
								<i class="fas fa-quote-left"></i>
							</div>
							<div class="testimonial-text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</div>
						</div>
						<div class="testimonial-thumb text-center">
							<img src="assets/images/resource/testi1.jpg" alt="">
						</div>
						<div class="testi-titile text-center">
							<h2>Mehedi Hassan </h2>
							<span>Robotic Engineer</span>
						</div>
					</div>
				</div>
				<div class="col-lg-12 col-sm-12">
					<div class="dreamit-single-testimonial-box">
						<div class="testimonial-content">
							<div class="testi-icon">
								<i class="fas fa-quote-left"></i>
							</div>
							<div class="testimonial-text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</div>
						</div>
						<div class="testimonial-thumb text-center">
							<img src="assets/images/resource/testi2.jpg" alt="">
						</div>
						<div class="testi-titile text-center">
							<h2>Ellen Eyre</h2>
							<span>Manager Of TM</span>
						</div>
					</div>
				</div>
				<div class="col-lg-12 col-sm-12">
					<div class="dreamit-single-testimonial-box">
						<div class="testimonial-content">
							<div class="testi-icon">
								<i class="fas fa-quote-left"></i>
							</div>
							<div class="testimonial-text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</div>
						</div>
						<div class="testimonial-thumb text-center">
							<img src="assets/images/resource/testi3.jpg" alt="">
						</div>
						<div class="testi-titile text-center">
							<h2>Mike Jonsone</h2>
							<span>Sr. Engineer</span>
						</div>
					</div>
				</div>
			</carousel>
		</div>
	</div>
</div> -->
<!--==================================================-->
<!-- End datatech testimonial Area -->
<!--==================================================-->
        <!--==================================================-->
        <!-- Start datatech process Area -->
        <!--==================================================-->
        <div class="process-area style-three">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="dreamit-section-title text-center pb-40">
                            <h5>HOW IT WORKS</h5>
                            <h2>Simple & Clean <span>Work Process</span></h2>
                            <div class="em_bar_bg text-left"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="dreamit-process-icon-box3">
                            <div class="em-process-icon1">
                                <div class="em-process-number1">
                                    <span>01</span>
                                </div>
                            </div>
                            <div class="em-process-content1">
                                <div class="em-process-title">
                                    <h2>Recorded Audio</h2>
                                    <p>There are many variation of passages of morem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="dreamit-process-icon-box3">
                            <div class="em-process-icon1">
                                <div class="em-process-number1">
                                    <span>02</span>
                                </div>
                            </div>
                            <div class="em-process-content1">
                                <div class="em-process-title">
                                    <h2>Audio Uploaded</h2>
                                    <p>There are many variation of passages of morem.</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="dreamit-process-icon-box3">
                            <div class="em-process-icon1">
                                <div class="em-process-number1">
                                    <span>03</span>
                                </div>
                            </div>
                            <div class="em-process-content1">
                                <div class="em-process-title">
                                    <h2>Data processing</h2>
                                    <p>There are many variation of passages of morem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="dreamit-process-icon-box3">
                            <div class="em-process-icon2">
                                <div class="em-process-number1">
                                    <span>04</span>
                                </div>
                            </div>
                            <div class="em-process-content1">
                                <div class="em-process-title">
                                    <h2>Actionable Insight</h2>
                                    <p>There are many variation of passages of morem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--==================================================-->
        <!-- End datatech process Area -->
        <!--==================================================-->

        <!--==================================================-->
        <!-- Start datatech counter Area -->
        <!--==================================================-->
        <div class="counter-area style-two">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="dreamit-single-counter-box white">
                            <div class="single-counter-box-inner">
                                <div class="counter-icon">
                                    <i class="flaticon-global"></i>
                                </div>
                                <div class="counter-content">
                                    <div class="counter-text">
                                        <h1>820 <span>+</span></h1>
                                    </div>
                                    <div class="counter-title">
                                        <h4 class="text-white">Data Analytics</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="dreamit-single-counter-box white">
                            <div class="single-counter-box-inner">
                                <div class="counter-icon">
                                    <i class="flaticon-laptop"></i>
                                </div>
                                <div class="counter-content">
                                    <div class="counter-text">
                                        <h1>120 <span>K</span></h1>
                                    </div>
                                    <div class="counter-title">
                                        <h4 class="text-white">Data Management</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="dreamit-single-counter-box white">
                            <div class="single-counter-box-inner">
                                <div class="counter-icon">
                                    <i class="flaticon-process-1"></i>
                                </div>
                                <div class="counter-content">
                                    <div class="counter-text">
                                        <h1>512 <span></span></h1>
                                    </div>
                                    <div class="counter-title">
                                        <h4 class="text-white">Managed Analytics</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="dreamit-single-counter-box white">
                            <div class="single-counter-box-inner">
                                <div class="counter-icon">
                                    <i class="flaticon-work"></i>
                                </div>
                                <div class="counter-content">
                                    <div class="counter-text">
                                        <h1>430 <span>+</span></h1>
                                    </div>
                                    <div class="counter-title">
                                        <h4 class="text-white">Big Data Consulting</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--==================================================-->
        <!-- End datatech counter Area -->
        <!--==================================================-->


        <!--==================================================-->
        <!-- Start datatech contact us Area -->
        <!--==================================================-->
        <div class="contact-us-area pt-50 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-6 col-sm-12">
                        <div class="contact-address-content" style="background: #f16722;padding: 15px 40px 20px;border-radius: 5px;">
                            <div class="contact-location">
                                <div class="contact-icon">
                                    <i class="flaticon-data-2"></i>
                                </div>
                                <div class="right-box">
                                    <div class="contact-title">
                                        <h4>Location</h4>
                                        <p>22 Baker Street, London,<br>United Kingdom, W1U 3BW</p>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-location">
                                <div class="contact-icon">
                                    <i class="flaticon-phone-1"></i>
                                </div>
                                <div class="right-box">
                                    <div class="contact-title">
                                        <h4>Make A Call</h4>
                                        <p>44-20-7328-4499</p>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-location">
                                <div class="contact-icon">
                                    <i class="flaticon-email"></i>
                                </div>
                                <div class="right-box">
                                    <div class="contact-title">
                                        <h4>Send A Mail</h4>
                                        <p>example@gmail.com <br> example@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div class="em-contact-location pt-4">
                                <div class="contact-icon">
                                    <i class="flaticon-shopping-basket"></i>
                                </div>
                                <div class="right-box">
                                    <div class="contact-title">
                                        <h4>Visit Our Website</h4>
                                        <p>www.dreamitsolution.net</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-12 pl-50">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="dreamit-section-title pb-3">
                                    <h5>CONTACT US</h5>
                                    <h2>Let’s improve the efficiency, efficacy and cost.</h2>
                                    <div class="em_bar_bg text-left"></div>
                                    <p class="text-st">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt consectetuer adipiscing.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="contact-form-box">
                                <form action="#" method="POST" id="dreamit-form">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                            <div class="from-box">
                                                <input type="text" placeholder=" Name">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                            <div class="from-box">
                                                <input type="text" placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                            <div class="from-box">
                                                <input type="text" placeholder=" Phone">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                            <div class="from-box">
                                                <input type="text" placeholder="Wibsite">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="from-box">
                                                <textarea name="massage" id="massage" cols="30" rows="10" placeholder="Massage"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="contact-button">
                                                <button type="submit">Send Message</button>
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
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default({
    components: { carousel },
    beforeCreate(){
        this.$Progress.start();
    },
    created(){
        this.$Progress.finish();
    }
})
</script>
<style scoped>
    
    .prev, .next
    {
        color: #ec5252;
        position: absolute;
        z-index: 2;
        top: 200px;
    }
    .prev
    {   
       left: 0;
       
    }
    .next
    {   
       right: 0;
       
    }
    .nav-pills .nav-link{
        color:black;
        background-color:#EEEFF4;
        margin-top:15px
    }
    .nav-pills .nav-link.active, .nav-pills .show>.nav-link{
        border-radius: 0 76px 76px 0;
        background-color:#F16722
    }
    
    .nav-pills .nav-link.active h3, .nav-pills .nav-link.active h4, .nav-pills .nav-link.active p{
        color:white
    }
    
    @media screen and (max-width: 600px) {
        .prev, .next
        {
            display: none
        }
    }
</style>
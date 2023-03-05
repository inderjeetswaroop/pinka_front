<template>
    <div>
        <div class="row">
            <div class="audio-info py-0 px-2">
                <div class="card light-orange audio-box" >
                    <div class="card-body py-1 px-2">
                        <h5 class="font-weight-bold">Audio List</h5>    
                        <input type="date" class="date-input mt-2 mb-4" v-model="audioDate" @change="getAudiosDateWise"> 
                        <ul>
                            <li v-for="(audios,index) in audioListDate" :key="index" >
                                <a :class="index == 0 ? '' : 'text-secondary'" href="#" @click="getaudioInfo(audios._id.$oid)">
                                    <p>
                                        {{ index+1 +" - "+ audios.audio_title}}
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card light-orange audio-box2 mt-2">
                    <div class="card-body py-1 px-2">
                        <h5 class="font-weight-bold mb-3">Audio Info</h5>    
                        <div class="d-flex mt-2">
                            <div class="mr-2"><p class="font-weight-bold">Name- </p></div>
                            <div><p>{{ audiosDetail.audio_title }}</p></div>
                        </div>
                        <div class="d-flex mt-2">
                            <div class="mr-2"><p class="font-weight-bold">Language- </p></div>
                            <div><p>{{ audiosDetail.language_of_full_audio }}</p></div>
                        </div>
                        <div class="d-flex mt-2">
                            <div class="mr-2"><p class="font-weight-bold">Audio Length- </p></div>
                            <div><p>{{ ((audiosDetail.audio_length)/60).toFixed(2) }} Min.</p></div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="audio-analytic py-0 px-2">
                <div class="card ">
                    <div class="card-body py-1 px-2">
                        <div class="dreamit-section-title text-center">
                            <h5>Employee Audio Analysis</h5>
                            <div class="em_bar_bg text-left"></div>
                            <div class="row">
                                <div class="col-md-3">
                                    <p class="text-black">Sentiment Analysis</p>
                                    <div class="dropdown mt-n2">
                                        <select v-model="sentiments" class="theme-btn" @change="getspeaker">
                                            <option  v-for="(speakers,index) in audiosDetail.speakers_list" :key="index" :value="speakers" >{{ speakers}}</option>
                                            <!-- <option value="all">All Speakers</option> -->
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <p class="text-black">Emotion Analysis</p>
                                    <div class="dropdown mt-n2">
                                        <select v-model="sentiments" class="theme-btn" @change="getspeaker">
                                            <option  v-for="(speakers,index) in audiosDetail.speakers_list" :key="index" :value="speakers" >{{ speakers}}</option>
                                            <!-- <option value="all">All Speakers</option> -->
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <p class="text-black">Productivity Analysis</p>
                                    <div class="dropdown mt-n2">
                                        <select v-model="sentiments" class="theme-btn" @change="getspeaker">
                                            <option  v-for="(speakers,index) in audiosDetail.speakers_list" :key="index" :value="speakers" >{{ speakers}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <p class="text-black">Text Analysis</p>
                                    <div class="dropdown mt-n2">
                                        <div class="dropdown mt-n2">
                                            <select v-model="audioTextType" class="theme-btn" @change="getaudiostextinfo">
                                                <option value="0">Select Audio Text Option</option>
                                                <option  value="1" >Full Audio Text <i class="fa fa-cloud-download-alt float-right ml-2 mt-1"></i></option>
                                                <option  value="2" >Speaker wise Sentiment Text </option>
                                                <option  value="3" >Speaker wise Emotion Text </option>
                                                <option  value="4" >Summerization <i class="fa fa-cloud-download-alt float-right ml-2 mt-1"></i></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="showtext == 1" class="text-area mt-5">
                                <div class="py-3 px-2">
                                    <textViews :audiodata="audioText" :texttype="textType" />
                                </div>
                            </div>
                            <hr>
                            <div v-if="showtext == 0" class="row mt-5">
                                <div class="col-md-4">
                                    <h4 class="text-black">Sentiment Analysis</h4>
                                    <barChart :sentis="sentis"  ></barChart>
                                </div>
                                <div class="col-md-4">
                                    <h4 class="text-black">Emotions Analysis</h4>
                                    <pieChart :emaotions="emoti" />
                                </div>
                                <div class="col-md-4">
                                    <h4 class="text-black">Productivity Analysis</h4>
                                    <donutChart :productivity="protis" />
                                </div>
                            </div>
                            <br><br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

Vue.component('barChart', require('./barChart.vue').default);
Vue.component('pieChart', require('./pieChart.vue').default);
Vue.component('donutChart', require('./donutChart.vue').default);
Vue.component('textViews', require('./audioTextViewComp.vue').default);
import Vue from 'vue'

export default {
    data() { 
        return{
            
            audiosDetail:{},
            aid:"",
            merchantId:"",
            userid:"",
            audioDate:"",
            audioListDate:{},
            productivity:0,
            sentiments:0,
            emotions:0,
            sentis:{},
            emoti:{},
            protis:{},
            showtext:1,
            audioTextType:0,
            audioText:{},
            textType:0,
        }
    },
     beforeCreate(){
        this.$Progress.start();
    },
    created(){
        
        this.aid = this.$route.params.audioid;    
        this.userid = this.$session.get("userId"); 
        this.merchantId = this.$session.get("merch");    
        // 
                const formdata = new FormData();
                formdata.append("username",this.userid);
                formdata.append("audioId",this.aid);
                formdata.append("merch_id",this.merchantId);
                formdata.append("usertype",this.userType);
                
                Vue.axios.post(this.$flask_api_link+"/single-audio-info",formdata)
                .then((data) =>{
                    // console.log(data.data);
                    this.audiosDetail = data.data
                    this.sentiments = this.audiosDetail.speakers_list[0]
                    this.emotions = this.audiosDetail.speakers_list[0]
                    this.productivity = this.audiosDetail.speakers_list[0]
                    this.sentis = this.audiosDetail.speakers_sentiments_wise_counts.SPEAKER_00
                    this.emoti1 = this.audiosDetail.speakers_emotions_wise_counts.SPEAKER_00
                    var emotis = []
                    for(let key in this.emoti1){ 
                        emotis.push({"value":this.emoti1[key],"name":key})
                        // console.log(key + " -- "+ this.emoti1[key])
                    }
                    this.emoti = emotis
                    // console.log(emotis)
                    // productivity
                    var allprod = 0
                    var prod00 = this.audiosDetail.productive_time_speaker_wise.SPEAKER_00
                    var prod1 = this.audiosDetail.productive_time_speaker_wise
                    for( var prods2 in prod1){
                        allprod = allprod + prod1[prods2]
                    }
                    
                    this.protis =  [
                        { value: prod00, name: 'Speaking Time',itemStyle: {
                                    color: '#fab2c0'
                                } },
                        { value: allprod - prod00, name: 'Listening Time',itemStyle: {
                                    color: '#ffd97f'
                                } }
                    ]
                    // productivity
                            
                    
                })
                .catch(error => {
                    console.log(this.error);
                    
                })

        /* Vue.axios.get(this.$flask_api_link+"//"+this.userid+"/"+this.merchantId)
            .then((response) => this.useraudios = response.data)
            .catch((error) => console.log(error)); */
        // 


        this.$Progress.finish();
    },
    methods:{
        getAudiosDateWise(){
            // console.log(this.audioDate)
            const formdata = new FormData();
                formdata.append("username",this.userid);
                formdata.append("audioDate",this.audioDate);
                formdata.append("merch_id",this.merchantId);
                formdata.append("usertype",this.userType);
                // console.log(this.audioDate)
                Vue.axios.post(this.$flask_api_link+"/audio-list-by-date",formdata)
                .then((data) =>{
                    // console.log(data.data);
                    this.audioListDate = data.data
                })
                .catch(error => {
                    console.log(this.error);
                    
                })
        },
        getaudioInfo(str){
                
                const formdata = new FormData();
                formdata.append("username",this.userid);
                formdata.append("audioId",str);
                formdata.append("merch_id",this.merchantId);
                formdata.append("usertype",this.userType);
                
                Vue.axios.post(this.$flask_api_link+"/single-audio-info",formdata)
                .then((data) =>{
                    // console.log(data.data);
                    this.audiosDetail = data.data
                    this.sentiments = this.audiosDetail.speakers_list[0]
                    this.emotions = this.audiosDetail.speakers_list[0]
                    this.productivity = this.audiosDetail.speakers_list[0]
                    this.sentis = this.audiosDetail.speakers_sentiments_wise_counts.SPEAKER_00
                    this.emoti1 = this.audiosDetail.speakers_emotions_wise_counts.SPEAKER_00
                    var emotis = []
                    for(let key in this.emoti1){ 
                        emotis.push({"value":this.emoti1[key],"name":key})
                        // console.log(key + " -- "+ this.emoti1[key])
                    }
                    this.emoti = emotis
                    
                    
                })
                .catch(error => {
                    console.log(this.error);
                    
                })
        },
        getspeaker() {
            this.showtext=0
                    this.sentis = this.audiosDetail.speakers_sentiments_wise_counts[this.sentiments]
                    this.emoti1 = this.audiosDetail.speakers_emotions_wise_counts[this.sentiments]
                    var emotis = []
                    for(let key in this.emoti1){ 
                        emotis.push({"value":this.emoti1[key],"name":key})
                        // console.log(key + " -- "+ this.emoti1[key])
                    }
                    this.emoti = emotis
                    // productivity
                    var allprod = 0
                    var prod00 = this.audiosDetail.productive_time_speaker_wise[this.sentiments]
                    var prod1 = this.audiosDetail.productive_time_speaker_wise
                    for( var prods2 in prod1){
                        allprod = allprod + prod1[prods2]
                    }
                    
                    this.protis =  [
                        { value: prod00, name: 'Speaking Time',itemStyle: {
                                    color: '#fab2c0'
                                } },
                        { value: allprod - prod00, name: 'Listening Time',itemStyle: {
                                    color: '#ffd97f'
                                } }
                    ]
                    // productivity
            console.log(this.audiosDetail.speakers_sentiments_wise_counts[this.sentiments].positive)
            console.log(this.sentiments)
        },
        getaudiostextinfo(){
            
            if (this.audioTextType == 2) {
                this.showtext=1
                this.textType = 2    
                this.audioText = this.audiosDetail.speakers_sentiments_wise_data
                console.log(this.audioText)

            }
            else{
                this.showtext=0
            }
            
        }

    },

}
</script>
<style scoped>
ul{
    list-style: none;
}
ul li{
    border-bottom: 1px solid #f2f5f5;
    padding-top: 10px;
}

ul li.selectedaudion{
    background-color: #F16722;
    border-radius: 10px;
    padding: 10px;
}
ul li.selectedaudion a:active{
    color:white;
}
p{
    line-height: 12px;
}
.light-orange {
    background-color:#FFF6F0 ;
}
.light-orange p{
    font-size: 14px;
    color: #000;
}

.audio-analytic
{
    max-width: 80%;
    flex:80%;
}
.audio-info
{
    max-width: 20%;
    flex:20%;
}
.audio-info .audio-box{
    height:390px;
    overflow-y: scroll;
}
.audio-info .audio-box2{
    height:300px;
    
}
.date-input{
    display: block;
    width: 90%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #ced4da;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 57px;
    -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
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
    color: #ffffff;
    background: #F16722;
    border: 1px solid #F16722;
    transition: .5s;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
    
}
</style>

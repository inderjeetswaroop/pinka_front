<template>
    <div class="row pl-2">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <button data-toggle="collapse" data-target="#demo" class="btn btn-warning my-2"><i class="fa fa-cloud-upload-alt"></i> Upload Audio</button>
                    <div id="demo" class="collapse">
                        <div class="wrapper py-3 my-2">
                            <div class="file-drop-area">
                                <span class="choose-file-button">Choose files</span>
                                <span class="file-message">or drag and drop files here</span>
                                <input class="file-input" :disabled="btnDisabled" type="file" @change="uploadaudio">
                            </div>
                        </div>
                        <div v-show="progressBar == 1" class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" :style="uploadprogress"></div>
                        </div>
                    </div>
                    
                    
                    <br>
                    <table class="table table-hovered table-bordered">
                        <thead>
                            <tr>
                                <th>
                                    Sr. No.
                                </th>
                                <th>
                                    Audio Details
                                </th>
                                <th>
                                    Status
                                </th>
                                <!-- <th>
                                    Upload Date
                                </th> -->
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(aList,index) in useraudios" :key="index">
                                <td>{{ index + aList._id.$oid}}</td>
                                <td>{{ aList.file_keyName }} <br>{{ aList.audio_title }} </td>
                                <!-- <td>{{ /*aList.upload_time.$date*/ }}</td> -->
                                <td>
                                    <span v-if="aList.status == 1" class="badge badge-success">Ready</span>
                                    <span v-else class="badge badge-info">In-Queue</span>
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <router-link :to="{name:'addanalysis',params: { audioid: aList._id.$oid }}" class="btn btn-secondary btn-sm"><i class="fa fa-list"></i></router-link>
                                        <router-link to="/" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></router-link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>

import Vue from 'vue'
export default {
    data() { 
        return{
            aFile:"",
            msgClr:"",
            successmsg:"",
            btnDisabled:false,
            uploadprogress:'width:20%',
            progressBar:0,
            userid:"",
            merchantId:"",
            useraudios:{}
        }
    },
     beforeCreate(){
        this.$Progress.start();

        
        
    },
    created(){
        this.userid = this.$session.get("userId"); 
        this.merchantId = this.$session.get("merch");    
        // 
        
        Vue.axios.get(this.$flask_api_link+"/uploaded-user-audio-list/"+this.userid+"/"+this.merchantId)
            .then((response) => this.useraudios = response.data)
            .catch((error) => console.log(error));
        // 


        this.$Progress.finish();
    },
    methods:{
        uploadaudio(e){
                this.progressBar =1
                this.btnDisabled = true
                this.msgClr = "text-success";
                this.successmsg = "uploading......";
                
                
                this.uploadprogress='width:40%'
                // console.log(e.target.files[0].name)
                const formdata = new FormData();
                this.aFile = e.target.files[0] 
                formdata.append("audiofile",this.aFile);
                formdata.append("merchant",this.merchantId);
                formdata.append("userId",this.userid);
                Vue.axios.post(this.$flask_api_link+"/upload-user-audio",formdata)
                .then((data) =>{
                    console.log(data.data)
                    this.uploadprogress='width:60%'
                    if(data.data.status == "success")
                    {
                        this.uploadprogress='width:100%'
                        this.useraudios = data.data.allenteries
                    }
                })
                .catch(error => {
                    this.msgColor="text-danger";
                    this.successmsg="Please Fix Errors";
                    this.error = error.response.data.errors;
                    console.log(this.error);
                    this.dis = false
                })
            this.btnDisabled = false;
                
        }
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
.wrapper{
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #1a650a, #2cae10);
  color: #D7D7EF;
  font-family: 'Lato', sans-serif;
}
.file-drop-area {
  position: relative;
  display: flex;
  align-items: center;
  width: 450px;
  max-width: 100%;
  padding: 25px;
  border: 1px dashed rgba(255, 255, 255, 0.4);
  border-radius: 3px;
  transition: 0.2s;
 
}

.choose-file-button {
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  padding: 8px 15px;
  margin-right: 10px;
  font-size: 12px;
  text-transform: uppercase;
}

.file-message {
  font-size: small;
  font-weight: 300;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-input {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  
}

.mt-100{
    margin-top:100px;
}
@media only screen and (max-width: 768px) {
    .style-two.contact-us-area
    {
        padding: 17px 0 100px;
    }   
}

</style>
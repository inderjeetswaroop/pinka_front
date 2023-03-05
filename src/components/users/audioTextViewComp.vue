<template>
    <div class="text-left">
        <div class="card">
            <div class="card-body border border-warning rounded p-3">
                <div v-for="(texts,index) in audiodata" :key="index" class="mb-5">
                    <p class="font-weight-bold text-danger mb-2">{{ index }}</p>
                    <div v-if="texts.negative_sentiments_data.length > 0">
                        <p class="font-weight-bold text-danger mb-2">Negative Sentiments Text</p>
                    </div>
                    <div v-if="texts.neutral_sentiments_data.length > 0">
                        <h3 class="font-weight-bold text-primary mb-2">Neutral Sentiments Text</h3>
                        <div class="ml-3" v-for="(innerText,index) in texts.neutral_sentiments_data" :key="index">
                            <p class="font-weight-bold mb-0 mt-4"> {{ index + 1 }} : {{innerText.text}} </p>
                            <p class="font-weight-bold text-primary mb-0"> Start Time : {{innerText.starting}} </p>
                            <p class="font-weight-bold text-warning mb-0"> End Time : {{innerText.ending}} </p>
                            <p class="font-weight-bold text-info mb-0"> Emotion : {{innerText.emotion}} </p>
                        </div>
                    </div>
                    <div class="mt-5" v-if="texts.positive_sentiments_data.length > 0">
                        <h3 class="font-weight-bold text-success mb-2">Positive Sentiments Text</h3>
                        <div class="ml-3" v-for="(innerText,index) in texts.positive_sentiments_data" :key="index">
                            <p class="font-weight-bold mb-0 mt-4"> {{ index + 1 }} : {{innerText.text}} </p>
                            <p class="font-weight-bold text-primary mb-0"> Start Time : {{innerText.starting}} </p>
                            <p class="font-weight-bold text-warning mb-0"> End Time : {{innerText.ending}} </p>
                            <p class="font-weight-bold text-info mb-0"> Emotion : {{innerText.emotion}} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default ({
    props:["audiodata","texttype"],
    data(){
        return{
            myname:"nothing"
        }
    },
    created(){
        if(this.texttype == 2 )
        {
            this.myname = "My name inderjeet"
        }
    }
})
</script>

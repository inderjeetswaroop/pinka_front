<template>
  <div>
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<script>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import {
  TooltipComponent,
  LegendComponent,
  GridComponent ,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, defineComponent } from 'vue';

use([
  CanvasRenderer,
  BarChart,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

export default defineComponent({
  props:[""],
  name: 'HelloWorld',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'light',
    
  },
  setup() {
    const option = ref({
      title: {
        // text: 'EMPLOYEE/CUSTOMER SENTIMENTS',
        left: 'center',
        
      },
      // backgroundColor:'#000',
      tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}',
        },
        legend: {
          data: ['Positive', 'Negative', 'Neutral'],
          icon: 'rect'
          // ...
        },
      xAxis: {
          type: 'category',
          data: ['Positive', 'Negative', 'Neutral']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            label: {
            show: true,
            position: 'top',
            fontSize:18
          },
            data: [ 
              {
                  value: 120,
                  itemStyle: {
                    color: '#4f963c'
                  }
                },
              {
                value: 200,
                itemStyle: {
                  color: '#c2233d'
                }
              },
              150
            ],
            type: 'bar',
            showBackground: true,
            shape:{
              width:50
            },
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
    });

    return { option };
  },
  created() {
    
  }
});
</script>

<style scoped>
.chart {
  height: 45vh;
}
</style>

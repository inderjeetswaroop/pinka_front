<template>
    <div>
      <!-- {{ emaotions }} -->
      <v-chart class="chart" :option="option" autoresize />
    </div>
  </template>
  
  <script>
  
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { PieChart } from 'echarts/charts';
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  } from 'echarts/components';
  import VChart, { THEME_KEY } from 'vue-echarts';
  import { ref, defineComponent } from 'vue';
  
  use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  ]);
  
  export default defineComponent({
    props:["emaotions"],
    name: 'HelloWorld',
    components: {
      VChart,
    },
    provide: {
      [THEME_KEY]: 'light',
    },
    
    computed:{
      option(){
        return {
        title: {
          // text: 'EMPLOYEE/CUSTOMER EMOTIONS',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        // backgroundColor:'#000',
        series: [
          {
            name: 'Emotion count in a day',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: this.emaotions,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      }
    }
  });
  </script>
  
  <style scoped>
  .chart {
    height: 40vh;
  }
  </style>
  
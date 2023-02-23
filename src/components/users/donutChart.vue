<template>
    <div>
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
        /* text: 'EMPLOYEE/CUSTOMER SENTIMENT PRODUCTIVITY',
        left: 'center', */
      },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    bottom: '10%',
    left: 'center',

  },
  // backgroundColor:'#000',
  series: [

    {
      name: 'Productivity',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      label: {
        show: true,
        position: 'inside'
      },
      data: [
        { value: 1048, name: 'Speaking Time',itemStyle: {
                    color: '#fab2c0'
                  } },
        { value: 735, name: 'Listening Time',itemStyle: {
                    color: '#ffd97f'
                  } },
        
      ]
    }
  ]
});
  
      return { option };
    },
  });
  </script>
  
  <style scoped>
  .chart {
    height: 45vh;
  }
  </style>
  
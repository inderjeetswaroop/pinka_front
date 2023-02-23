<template>
    <div>
      <v-chart class="chart" :option="option" autoresize />
    </div>
  </template>
  
  <script>  
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { LineChart } from 'echarts/charts';
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  } from 'echarts/components';
  import VChart, { THEME_KEY } from 'vue-echarts';
  import { ref, defineComponent } from 'vue';
  
  use([
    CanvasRenderer,
    LineChart,
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
        // text: 'No. of calls in a day',
        
    },
    tooltip: {
        trigger: 'axis'
    },
    color:['#ae1029','#000','#26c238', '#9876aa', '#fb8649', 
             '#57904b','#d35b5c'],
    // backgroundColor:'#000',
    grid: {
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true,
        
    },
    toolbox: {
        feature: {
        saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        name: 'Days',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10', '11', '12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22','23', '24', '25', '26', '27', '28','29','30', '31']
    },
    yAxis: {
        type: 'value',
        name:'No. of calls in a day',
        splitLine: {
         show: false
      },
    },
    series: [
        
        {
        name: 'Coverted Calls in a day',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,230, 210, 120],
        lineStyle: {
          color: '#337B24',
          width: 2,
          },
          label: {
          show: true,
          position: 'bottom',
          textStyle: {
            fontSize: 8
          }
        }
        },
        {
        name: 'Number Of Call In a Day',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 234, 290, 330 ],
        lineStyle: {
          color: '#990000',
          width: 2,
        }
        },
        
    ]
    });
  
      return { option };
    },
  });
  </script>
  
  <style scoped>
  .chart {
    height: 40vh;
  }
  </style>
  
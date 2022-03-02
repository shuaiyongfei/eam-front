import React, { useEffect } from "react"
import * as echarts from 'echarts';


type EChartsOption = echarts.EChartsOption;



const Chart:React.FC<any>=()=>{

  
  useEffect(()=>{
    let chartDom = document.getElementById('main');
    let myChart = echarts.init(chartDom);
    let option: EChartsOption;
    option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    option && myChart.setOption(option);
  },[])

  return (
    <div id='main' style={{width:'calc(100vw - 200px)',height:'100vh'}}>
    </div>)
}
export default Chart
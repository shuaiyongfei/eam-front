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
        text: "高后果区占比",
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
          name: '高后果区',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'I' },
            { value: 735, name: 'Ⅱ' },
            { value: 580, name: 'Ⅲ' },
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
import React, { useEffect, useState } from "react"
import {frontRequest} from '../../utils/axios'
import * as echarts from 'echarts';


type EChartsOption = echarts.EChartsOption;



const Chart:React.FC<any>=()=>{
  const[data,SetData]=useState([
    { value: 1048, name: 'I' },
    { value: 735, name: 'Ⅱ' },
    { value: 580, name: 'Ⅲ' },
  ])
  useEffect(()=>{
    async function getData(){
      const res=await frontRequest({method:'GET',url:'/count'})
      const {count,rows}=res.data as any
      let newData=[]
      for(let i=0;i<count.length;i++){
        let tmp={} as any;
        tmp.value= count[i].count
        tmp.name= rows[i].serious_level
        newData.push(tmp)
      }
      SetData(newData)
    }
    getData()
  },[])


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
          data:data,
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
    myChart.setOption(option as any);
  },[data])

  return (
    <div id='main' style={{width:'calc(100vw - 200px)',height:'60vh'}}>
    </div>)
}
export default Chart
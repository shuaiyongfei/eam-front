import React, { useEffect, useState } from "react"
import {frontRequest} from '../../utils/axios'
import * as echarts from 'echarts';
import style from './index.module.css'
import classNames from "classnames/bind";
import { Card, Tabs } from "antd";
const { TabPane } = Tabs;



let cx = classNames.bind(style);

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

  const [flag,setFlag]=useState(false)
  useEffect(()=>{
    let chartDom = document.getElementById('main');
    let myChart = chartDom&&echarts.init(chartDom);
    let option: EChartsOption;
    const barData=data.map(val=>val.value)
    option = {
      title: {
        text: "高后果区占比",
        left: 'center'
      },
      xAxis: {
        type: 'category',
        data: ['I', 'Ⅱ','Ⅲ']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '高后果区',
          type: "bar",
          data:barData,
        }
      ]
    };
    myChart&&myChart.setOption(option as any);
  },[data,flag])
  useEffect(()=>{
    console.log('bar++++++++++++==')
    let chartDom = document.getElementById('bar');
    let myChart = chartDom&&echarts.init(chartDom);
    let option: EChartsOption;
    option = {
      title: {
        text: "高后果区占比",
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
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
    myChart&&myChart.setOption(option as any);
  },[data,flag])
  return (
    <Card title="数据统计" bordered={false} className={cx('bg')}>
  <Tabs defaultActiveKey="1" onTabClick={()=>{
    setFlag(flag=>!flag)
  }}>
    <TabPane tab="柱状图" key="1">
      <div id='main' className={cx('serious')}></div>
    </TabPane>
    <TabPane tab="饼图" key="2">
      <div id='bar' className={cx('bar')}></div>
    </TabPane>
  </Tabs>
  </Card>
    )
}
export default Chart
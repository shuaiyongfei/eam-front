import { Button, Popconfirm, Select,Table, Space  } from "antd";
import React, { useEffect, useState } from "react";
import { ColumnsType } from 'antd/es/table';
import { SearchOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";
import { frontRequest } from "../../utils/axios";
const { Option }=Select




const  AllForm=()=>{

  const router = useRouter()
  const [flag,setFlag]=useState(false)
  const [data,setData]=useState([])


  useEffect(()=> {
    async function getData (){
      const temp=await frontRequest<any>({ method: 'GET', url: '/getSerious' })
      setData(temp.data)
    }
    getData()
  },[flag])

  async function deleteSerious(cache:Array<string>){
    let result= await frontRequest<any>({method:"POST",data:cache,url:'/deleteSerious'})
    setFlag(!flag)
  }

 let proxyFunc = (function(callback){
    let cache = new Set<string>(),  // 保存一段时间内的id
        timer = null; // 定时器
    return function(name) {
        cache.add(name)
        if(timer) {
            return;
        }
        timer = setTimeout(function(){      
            callback([...cache]); 
            clearTimeout(timer);
            timer = null;
            cache.clear();
        },2000);
    }
  })(deleteSerious);

  const columns: ColumnsType = [
    {
      title: '高后果区编号',
      dataIndex: 'name',
      fixed: 'left',
      width: 200,
    },
    {
      title: '单位名称',
      dataIndex: 'unit',
      width: 100,
    },
    {
      title: '管道名称',
      dataIndex: 'pipeline',
      width: 100,
    },
    {
      title: '省',
      dataIndex: 'province',
      width: 100,
    },
    {
      title:'市',
      dataIndex:"city",
      width: 100,
    },
    {
      title:'区',
      dataIndex:"region",
      width: 100,
    },
    {
      title:'高后果区起止地址',
      dataIndex:"startEnd",
      width: 100,
    },
    {
      title:'高后果管道长度(km)',
      dataIndex:"length",
      width: 100,
    },
    {
      title:'管道运输介质',
      dataIndex:"medium",
      width: 100,
    },
    {
      title:'地区等级',
      dataIndex:"regionLevel",
      width: 100,
    },
    {
      title:'高后果区等级',
      dataIndex:"seriousLevel",
      width: 100,
    },
    {
      title:'高后果区类型',
      dataIndex:"seriousType",
      width: 100,
    },
    {
      title:'高后果区描述',
      dataIndex:"seriousDes",
      width: 400,
    },
    {
      title:'失效可能性',
      dataIndex:"failurePossibility",
      width: 100,
    },
    {
      title:'失效后果',
      dataIndex:"failureConsequence",
      width: 100,
    },
    {
      title:'风险值',
      dataIndex:"raskVal",
      width: 100,
    },
    {
      title:'风险等级',
      dataIndex:"raskLevel",
      width: 100,
    },
    {
      title:'风险描述',
      dataIndex:"raskDes",
      width: 400,
    },
    {
      title:'建议措施',
      dataIndex:"measures",
      width: 400,
    },
    {
      title:'巡回人员',
      dataIndex:"personnel",
      width: 100,
    },
    {
      title:'上油阀室',
      dataIndex:"upperOil",
      width: 100,
    },
    {
      title:'下油阀室',
      dataIndex:"lowerOil",
      width: 100,
    },
    {
      title:'阀室距离',
      dataIndex:"distance",
      width: 100,
    },
    {
      title:'备注',
      dataIndex:"remarks",
      width: 100,
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      fixed:'right',
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm title='你确定要删除'
            onConfirm={()=>{
              proxyFunc(text.name)
            }}
          >
          <a>删除</a>
          </Popconfirm>
          <a onClick={()=>{
            router.push(`/meta?id=${text.name}`)
          }}>修改</a>
        </Space>
      ),
    }
  ];
  
  return (
      <>
        <div style={{margin:'10px 0px 10px 0px',display:"flex",justifyContent:'space-between'}}>
          <div>
            <Select  style={{ width: 120 }}  placeholder={'风险等级'} onChange={()=>{}}>
              <Option value="1">一级</Option>
              <Option value="2">二级</Option>
              <Option value="3">三级</Option>
            </Select>
            <Button type="primary" icon={<SearchOutlined />}>
            </Button>
          </div>
          <div>
            <Button type="primary" onClick={()=>{
              router.push('/meta')
            }}>
              添加
            </Button>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{x:'width: calc(100vw - 200px)'}}
        />
      </>
  );
}



export default AllForm
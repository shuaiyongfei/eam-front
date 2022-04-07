import React, { useCallback, useEffect,useMemo,useState } from "react"
import { Button, Popconfirm, Space, Table } from "antd";
import { useRouter } from 'next/router'
import { ColumnsType } from 'antd/es/table';
import { frontRequest } from "../../utils/axios";


const Inspection:React.FC<any>=()=>{
  const [data,setData]=useState<Array<any>>()
  const router = useRouter()
  useEffect(()=>{
    frontRequest({method:"GET",url:'/inspection/all'}).then((res)=>{
     setData(res.data as any)
    })
  },[])
  const strikeOut = useMemo(()=>{
    async function deleteSerious(cache:Array<string>){
      let result= await frontRequest<any>({method:"POST",data:cache,url:'/inspection/delete'})
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
    return proxyFunc
  },[])

  const columns: ColumnsType=[
    {
      title: '巡护人员',
      dataIndex: 'name',
    },
    {
      title: '电话',
      dataIndex: 'phone',
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      fixed:'right',
      render: (text, record,dataIndex) => (
        <Space size="middle">
          <Popconfirm title='你确定要删除'
            onConfirm={()=>{
              const tempData=[...data]
              tempData.splice(dataIndex,1)
              strikeOut(text.phone)
              setData(tempData)
            }}
          >
          <a>删除</a>
          </Popconfirm>
          <a onClick={()=>{
            router.push('/inspect')
          }}>修改</a>
        </Space>
      ),
    }
  ]

  return (<>
    <div style={{display:'flex',justifyContent:"flex-end",margin:'10px 10px'}}>
      <Button type="primary" onClick={()=>{
                router.push('/inspect')
              }} >
                添加
      </Button>
    </div>
    <Table columns={columns} dataSource={data}>
    </Table>
  </>)
}
export default Inspection
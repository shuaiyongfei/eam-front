import React, { useCallback, useEffect,useMemo,useState } from "react"
import { Button, Popconfirm, Space, Table } from "antd";
import { useRouter } from 'next/router'
import { ColumnsType } from 'antd/es/table';
import { frontRequest } from "../../utils/axios";


const Member:React.FC<any>=()=>{
  const [data,setData]=useState<Array<any>>()
  const router = useRouter()
  useEffect(()=>{
    frontRequest({method:"GET",url:'/user/all'}).then((res)=>{
      if(Array.isArray(res.data)){
      setData(res.data.map(val=>{
        let admin=''
        if(val.admin){
         admin='管理员'
        }
        else{
          admin='普通'
        }
        return {...val,admin}
      }))
      }
    })
  },[])
  const strikeOut = useMemo(()=>{
    async function deleteSerious(cache:Array<string>){
      let result= await frontRequest<any>({method:"POST",data:cache,url:'/user/delete'})
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
      title: '工号',
      dataIndex: 'user_id',
    },
    {
      title: '账号',
      dataIndex: 'user_name',
    },
    {
      title: '角色',
      dataIndex: 'admin',
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
              strikeOut(text.user)
              setData(tempData)
            }}
          >
          <a>删除</a>
          </Popconfirm>
          <a onClick={()=>{
            router.push(`/admin?user_id=${text.user_id}`)
          }}>修改</a>
        </Space>
      ),
    }
  ]

  return (<>
   <div style={{display:'flex',justifyContent:"flex-end",margin:'10px 10px'}}>
    <Button type="primary" onClick={()=>{
              router.push('/admin')
            }} >
              添加
    </Button>
    </div>
    <Table columns={columns} dataSource={data}>
    </Table>
  </>)
}
export default Member
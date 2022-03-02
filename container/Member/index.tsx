import React, { useEffect,useState } from "react"
import { Popconfirm, Space, Table } from "antd";
import { useRouter } from 'next/router'
import { ColumnsType } from 'antd/es/table';


const Member:React.FC<any>=()=>{
  const [data,setData]=useState<Array<any>>()
  const router = useRouter()
  useEffect(()=>{
    const tempData=[]
    for(let i=0;i<13;i++){
      tempData.push({key:i,user:`user${i}`,password:`password${i}`,role:`role${i}`})
    }
    setData(tempData)
  },[])

  const columns: ColumnsType=[
    {
      title: '账号',
      dataIndex: 'user',
    },
    {
      title: '密码',
      dataIndex: 'password',
    },
    {
      title: '角色',
      dataIndex: 'role',
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
              setData(tempData)
            }}
          >
          <a>删除</a>
          </Popconfirm>
          <a onClick={()=>{
            router.push('/admin')
          }}>修改</a>
        </Space>
      ),
    }
  ]

  return (<>
    <Table columns={columns} dataSource={data}>
    </Table>
  </>)
}
export default Member
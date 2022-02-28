import React, { useState } from "react"
import { Popconfirm, Space, Table } from "antd";
import { ColumnsType } from 'antd/es/table';

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
    render: (text, record) => (
      <Space size="middle">
        <Popconfirm title='你确定要删除'
          onCancel={()=>{

          }}
          onConfirm={()=>{}}
        >
        <a onClick={()=>{
          console.log(text,record)
        }}>删除</a>
        </Popconfirm>
        <a onClick={()=>{
        }}>修改</a>
      </Space>
    ),
  }
]

const Member:React.FC<any>=()=>{
  return (<>
    <Table columns={columns}>
    </Table>
  </>)
}
export default Member
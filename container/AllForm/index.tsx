import { Button, Popconfirm, Select,Table, Tag, Space,Typography  } from "antd";
import React, { useState } from "react"
import { ColumnsType } from 'antd/es/table';
import { SearchOutlined } from '@ant-design/icons';
import Checkbox from "antd/lib/checkbox/Checkbox";


const {Text}=Typography;
const { Option }=Select



const columns: ColumnsType = [
  {
    title: '高后果区编号',
    dataIndex: 'name',
    fixed: 'left',
    width: 100,
  },
  {
    title: '单位名称',
    dataIndex: 'unit',
    width: 100,
  },
  {
    title: 'Address',
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
    title:'高后果区起始地址',
    dataIndex:"region",
    width: 100,
  },
  {
    title:'高后果管道长度',
    dataIndex:"length",
    width: 100,
  },
  {
    title:'高后果管道长度',
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
    dataIndex:"level",
    width: 100,
  },
  {
    title:'高后果区等级',
    dataIndex:"level",
    width: 100,
  },
  {
    title:'高后果区类型',
    dataIndex:"level",
    width: 100,
  },
  {
    title:'高后果区描述',
    dataIndex:"level",
    width: 100,
  },
  {
    title:'失效可能系',
    dataIndex:"level",
    width: 100,
  },
  {
    title:'失效后果',
    dataIndex:"level",
    width: 100,
  },
  {
    title:'风险值',
    dataIndex:"level",
    width: 100,
  },
  {
    title:'风险等级',
    dataIndex:"level",
    width: 100,
  },
  {
    title:'风险描述',
    dataIndex:"level",
    width: 100,
  },
  {
    title:'建议措施',
    dataIndex:"level",
    width: 100,
  },
  {
    title:'巡回人员',
    dataIndex:"level",
    width: 100,
  },
  {
    title:'上油阀室',
    dataIndex:"level",
    width: 100,
  },
  {
    title:'下油阀室',
    dataIndex:"level",
    width: 100,
  },
  {
    title:'阀室距离',
    dataIndex:"level",
    width: 100,
  },
  {
    title:'备注',
    dataIndex:"level",
    width: 100,
  },
  {
    title:'阀室距离',
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
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];





const  AllForm=()=>{
    const [level,setLevel]=useState(-1);
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
              <Button type="primary">
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
import React, { useState } from "react"
import { Form, Input, Select,InputNumber} from 'antd';


const Admin:React.FC<any>=()=>{

  return <Form
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 8 }}
      >
     <Form.Item
        label="姓名"
        name="user"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="电话"
        name="password"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
  </Form>
}
export default Admin
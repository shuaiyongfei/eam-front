import React, { useState } from "react"
import { Form, Input, Select,InputNumber} from 'antd';

const {Option}=Select
const { TextArea } = Input;

const Admin:React.FC<any>=()=>{

  return <Form
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 8 }}
      >
     <Form.Item
        label="账号"
        name="user"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="角色"
        name="role"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
  </Form>
}
export default Admin
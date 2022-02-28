import React, { useState } from "react"
import { Form, Input, Select,InputNumber} from 'antd';

const {Option}=Select
const { TextArea } = Input;

const meta:React.FC<any>=()=>{

  const [secondCity,setSecondCity]=useState('')


  const provinceData = ['Zhejiang', 'Jiangsu'];
  const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
  };
  return <Form
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 8 }}
      >
     <Form.Item
        label="高后果区编号"
        name="index"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="单位名称"
        name="index"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="管道名称"
        name="index"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
       label="地址"
       name="index">
      <Select  style={{ width: 120 }} placeholder='省'>
        {provinceData.map(province => (
          <Option key={province} value={province}>{province}</Option>
        ))}
      </Select>
      <Select style={{ width: 120 }}  onChange={()=>{}} placeholder='市'>
        {cityData['Jiangsu'].map(city => (
          <Option key={city} value={city}>{city}</Option>
        ))}
      </Select>
      <Select style={{ width: 120 }}  onChange={()=>{}} placeholder='区'>
        {cityData['Jiangsu'].map(city => (
          <Option key={city} value={city}>{city}</Option>
        ))}
      </Select>
      </Form.Item>
      <Form.Item
        label="高后果区起始地址"
        name="index"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="高后果管道长度"
        name="index"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input  placeholder='km'/>
      </Form.Item>
      <Form.Item
        label="管道输送介质"
        name="index"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="管道输送介质"
        name="index"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label='高后果区等级'
      >
        <Select>
          <option value="">
            一级
          </option>
          <option value="">
            二级
          </option>
          <option value="">
            三级
          </option>
        </Select>
      </Form.Item>
      <Form.Item
        label="高后果区类型"
        name="index"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="高后果区描述"
        name="index"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <TextArea/>
      </Form.Item>
      <Form.Item
        label="失效可能性"
        name="index2"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <InputNumber/>
      </Form.Item>
      <Form.Item
        label="失效后果"
        name="index3"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <InputNumber/>
      </Form.Item>
      <Form.Item
        label="风险值"
        name="index3"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <InputNumber/>
      </Form.Item>
      <Form.Item
        label="风险值"
        name="index3"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Select>
          <option value="">
            低
          </option>
          <option value="">
            中
          </option>
          <option value="">
            高
          </option>
        </Select>
      </Form.Item>
      <Form.Item
        label="风险描述"
        name="index"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <TextArea/>
      </Form.Item>
      <Form.Item
        label="建议措施"
        name="index"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <TextArea/>
      </Form.Item>
      <Form.Item
        label='巡回人员'
      >
       <Input/>
      </Form.Item>
      <Form.Item
        label='上游阀室'
      >
       <Input/>
      </Form.Item>
      <Form.Item
        label='下游阀室'
      >
       <Input/>
      </Form.Item>
      <Form.Item
        label="阀室距离"
        name="index3"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <InputNumber/>
      </Form.Item>
      <Form.Item
        label="备注"
        name="index"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <TextArea/>
      </Form.Item>
  </Form>
}
export default meta
import React, { useEffect } from "react";
import classNames from "classnames/bind";
import { Form, Input, Select,InputNumber, Button, Modal, notification, Card} from 'antd';
import { useRouter } from "next/router";
import style from './index.module.css'
import {frontRequest, frontRequest as request} from '../../utils/axios'

let cx = classNames.bind(style);


const {Option}=Select
const { TextArea } = Input;

const meta:React.FC<any>=()=>{
  const [form] = Form.useForm();
  const router = useRouter()
  const id=router.query.id
  useEffect(()=> {
    async function getData (){
      const res=await frontRequest<any>({ method: 'GET', url: `/getOneSerious?name=${id}` })
      const data=res.data[0]
      const Detail=data?.Detail
      const Patrol=data?.Patrol
      const formData={...Detail,...Patrol,...data}
      form.setFieldsValue(formData)
    }
    getData()
  },[id])

  const onSelect = (type: string) =>(val:string)=> {
     form.setFields([{name:type,
      value:val}]);
  }

  const OnFinish= async (val)=>{
    let url="/serious"
    if(!id){
      url+='?kind=add'
    }
    else{
      url+='?kind=update'
    }
   const result= await request<any>({url,data:val , method:"post"})
   if(result.data?.errorCode){
      Modal.warning({
        content: result.data.msg,
      });
    }
  else{
    notification.success({
      message: '记录成功',
      description:
        '可以使用了'
      });
    }
  }

  const provinceData = ['Zhejiang', 'Jiangsu'];
  const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
  };
  return (
  <Card title="高后果区数据添加" className={cx('bg')}>
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      form={form} onFinish={OnFinish}>
      <Form.Item
          label="高后果区编号"
          name="name"
          rules={[{ required: true, message: '请输入高后果区编号' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="单位名称"
          name="unit"
          rules={[{ required: true, message: '请输入单位名称' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="管道名称"
          name="pipeline"
          rules={[{ required: true, message: '请输入管道名称' }]}
        >
          <Input />
        </Form.Item>
        <div style={{display:'flex'}} className={cx('address')}>
          <div className={cx('address-label')}>
            <label>地址</label>
          </div>
          <div  className={cx('address-content')}>
            <Form.Item
            name='province'>
              <Select  style={{ width: 120 }} placeholder='省' onSelect={onSelect('province')}>
                {provinceData.map(province => (
                  <Option key={province} value={province}>{province}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
            name='city'>
              <Select style={{ width: 120 }} placeholder='市' onChange={onSelect('city')}>
                {cityData['Jiangsu'].map(city => (
                  <Option key={city} value={city}>{city}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
            name='region'>
              <Select style={{ width: 120 }} placeholder='区' onChange={onSelect('region')}>
                {cityData['Jiangsu'].map(city => (
                  <Option key={city} value={city}>{city}</Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </div>
        <Form.Item
          label="高后果区起始地址"
          name="startEnd"
          rules={[{ required: true, message: '请输入管道名称高后果区起始地址' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="高后果区管道长度"
          name="length"
          rules={[{ required: true, message: '请输入高后果区管道长度' }]}
        >
        <Input  placeholder='km'/>
        </Form.Item>
        <Form.Item
          label="管道输送介质"
          name="medium"
          rules={[{ required: true, message: '请输入管道运输介质' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label='地区等级'
          name="regionLevel"
          //rules={[{ required: true, message: '请输入地区等级' }]}
        >
          <Select onChange={onSelect('regionLevel')}>
            <option value={1}>
              一级
            </option>
            <option value={2}>
              二级
            </option>
            <option value={3}>
              三级
            </option>
          </Select>
        </Form.Item>
        <Form.Item
          label='高后果区等级'
          name="seriousLevel"
        // rules={[{ required: true, message: '请输入高后果区等级' }]}
        >
          <Select  onChange={onSelect('seriousLevel')}>
            <option value={'I级'}>
            I级
            </option>
            <option value={'II级'}>
            II级
            </option>
            <option value={'III级'}>
            III级
            </option>
          </Select>
        </Form.Item>
        <Form.Item
          label="高后果区类型"
          name="seriousType"
          rules={[{ required: true, message: '请输入高后果区类型' }]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="高后果区描述"
          name="seriousDes"
          rules={[{ required: true, message: '请输入高后果区类型' }]}
        >
          <TextArea/>
        </Form.Item>
        <Form.Item
          label="失效可能性"
          name="failurePossibility"
          rules={[{ required: true, message: '请输入失效可能性' }]}
        >
          <InputNumber/>
        </Form.Item>
        <Form.Item
          label="失效后果"
          name="failureConsequence"
          rules={[{ required: true, message: '请输入失效后果' }]}
        >
          <InputNumber/>
        </Form.Item>
        <Form.Item
          label="风险值"
          name="raskVal"
          // rules={[{ required: true, message: '请输入风险值' }]}
        >
          <InputNumber/>
        </Form.Item>
        <Form.Item
          label="风险等级"
          name="raskLevel"
          //rules={[{ required: true, message: '请输入风险等级' }]}
        >
          <Select onChange={onSelect('raskLevel')}>
            <option value="lower">
              低
            </option>
            <option value="middle">
              中
            </option>
            <option value="hight">
              高
            </option>
          </Select>
        </Form.Item>
        <Form.Item
          label="风险描述"
          name="raskDes"
          rules={[{ required: true, message: '请输入风险描述' }]}
        >
          <TextArea/>
        </Form.Item>
        <Form.Item
          label="建议措施"
          name="measures"
          rules={[{ required: true, message: '请输入建议措施' }]}
        >
          <TextArea/>
        </Form.Item>
        <Form.Item
          label='巡回人员'
          name='personnel'
          rules={[{ required: true, message: '请输入巡护人员' }]}
        >
        <Input/>
        </Form.Item>
        <Form.Item
          label='上游阀室'
          name='upperOil'
          rules={[{ required: true, message: '请输入上游阀室' }]}
        >
        <Input/>
        </Form.Item>
        <Form.Item
          label='下游阀室'
          name='lowerOil'
          rules={[{ required: true, message: '请输入下游阀室' }]}
        >
        <Input/>
        </Form.Item>
        <Form.Item
          label="阀室距离"
          name="distance"
          rules={[{ required: true, message: '请输入阀室距离' }]}
        >
          <InputNumber/>
        </Form.Item>
        <Form.Item
          label="备注"
          name="remarks"
        >
          <TextArea/>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
    </Form>
  </Card>
  )
}
export default meta
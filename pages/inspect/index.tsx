import React, { useEffect } from "react"
import { Form, Input, Card, Button, notification, Modal} from 'antd';
import style from './index.module.css'
import classNames from "classnames/bind";
import {frontRequest as request} from '../../utils/axios'
let cx = classNames.bind(style);

const Admin:React.FC<any>=()=>{
  const [form] = Form.useForm();

  useEffect(()=>{
    
  },[])

  const OnFinish= async (val)=>{
    try{
    let res=await request({method:'POST',url:'/inspection/add',data:val})
    if((res.data as any).errorCode===200){
      notification.success({
        message: '记录成功',
        description:
          '可以使用了'
        });
      }
    else{
      Modal.warning({
        title: '输入错误',
        content: (res.data as any).msg,
      });
    }
    }catch(error){
      Modal.warning({
        title: '输入错误',
        content: error.data,
      });
    }
  }
  return <Card title="巡护人员" className={cx('bg')}>
  <Form
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 8 }}
    form={form}
    onFinish={OnFinish}
      >
      <Form.Item
        label="工号"
        name="patrol_id"
        rules={[{ required: true, message: '请输入姓名' }]}
      >
        <Input />
      </Form.Item>
     <Form.Item
        label="姓名"
        name="patrol_name"
        rules={[{ required: true, message: '请输入姓名' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="电话"
        name="patrol_phone"
        rules={[{ required: true, message: '请输入电话号码' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" >
          提交
        </Button>
      </Form.Item>
  </Form>
  </Card>
}
export default Admin
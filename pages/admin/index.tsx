import React from "react"
import { Button, Card, Form, Input, Modal, notification, Radio} from 'antd';
import style from './index.module.css'
import classNames from "classnames/bind";
import {frontRequest as request} from '../../utils/axios'
import { useRouter } from "next/router";
let cx = classNames.bind(style);


const Admin:React.FC<any>=()=>{
  const [form] = Form.useForm();
  const router = useRouter()
  const OnFinish= async (val)=>{
    try{
    let url='/user/add';
    if(!router.query){
      url='/user/update'
    }
    let res=await request({method:'POST',url,data:val})
    if((res.data as any).errorCode===0){
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
  return <Card title="巡护人员添加" className={cx('bg')}>
  <Form
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 8 }}
    form={form}
    onFinish={OnFinish}
      >
     <Form.Item
        label="账号"
        name="user"
        rules={[{ required: true, message: '请输入账号!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="角色"
        name="admin"
        rules={[{ required: true, message: '请选择权限!' }]}
      >
        <Radio.Group>
          <Radio value={true}>超级用户</Radio>
          <Radio value={false}>普通用户</Radio>
        </Radio.Group>
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
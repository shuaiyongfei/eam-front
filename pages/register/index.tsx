import React from "react"
import classNames from 'classnames/bind';
import {Button, Form, Input, Modal, notification, Radio} from "antd";
import style from './index.module.css'
import {frontRequest} from '../../utils/axios'



let cx = classNames.bind(style);


const Login:React.FC<any>=()=>{
  const onFinish = async (values: any) => {
      if(values.check==='login'){
        const result= await frontRequest<any>({url:"/user/login",data:{user:values.user,password:values.password,admin:true} , method:"post"})
        console.log(result.data)
        if(result.data?.errorCode){
          Modal.warning({
            title: '输入错误',
            content: result.data.msg,
          });
        }
        else{
          localStorage.setItem(
            "userLoginInfo",
            result.data?.msg
          ); 
          notification.success({
            message: '登录成功',
            description:
              '可以使用了'
            });
          window.location.href='/system/all'
        }
      }
      else{ 
        try{
            const result= await frontRequest<any>({url:"/user/register",data:{user:values.user,password:values.password,admin:true},method:"post"})
            if(result.data?.errorCode){
              Modal.warning({
                title: '输入错误',
                content: result.data.msg[0],
              });
            }
            else{
              notification.success({
                message: '注册成功',
                description:
                  '可以使用了'
                });
            }
          }catch(error){
            Modal.warning({
              title: '服务器错误',
              content: '等一下才进行操作',
            })
          }
        }
  }
   
  return (<div className={cx('banner-bg')}>
    <div className={cx('title')}>高后果区管理系统注册</div>
    <div className={cx('bg')}></div>
    <div className={cx('card')}>
    <Form
      colon={false}
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onFinish}
    >
      <Form.Item
        label="用户名"
        name="user"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="选择"
        name="check"
        rules={[{ required: true, message: '请选择登录或注册' }]}
      >
        <Radio.Group >
          <Radio value={'login'}>登录</Radio>
          <Radio value={'register'}>注册</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
    </div>
  </div>)
}
export default Login
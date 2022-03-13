import React,{useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames/bind';
import { Layout, Menu } from 'antd';


import style from './index.module.css'
import AllForm from '../../container/AllForm';
import Member from '../../container/Member';
import Chart from '../../container/Chart';
import UpLoad from '../../container/Upload';
import Inspection from '../../container/Inspection';

const {  Sider, Content } = Layout;
let cx = classNames.bind(style);

const HomePage=()=> {
  const router = useRouter()
  return<>
    <Layout>
      <header>
        <Menu className={cx('menu')}  mode="horizontal">
          <Menu.Item key="mail" >
          个人中心
          </Menu.Item>
          <Menu.Item key="login" className={cx('left')}>
            <Link href='./login'>
              退出登录
            </Link>
          </Menu.Item>
        </Menu>
      </header>
      <Layout>
        <Sider className={cx('sider')}>
        <Menu theme="dark" mode="inline">
            <Menu.Item key="1" onClick={()=>{
              router.push('/system/all')
            }} >
              全貌数据
            </Menu.Item>
            <Menu.Item key="2" onClick={()=>{
              router.push('/system/all')
            }}>
              高后果区
            </Menu.Item>
            <Menu.Item key="3" onClick={()=>{
              router.push('/system/member')
            }}>
              成员管理
            </Menu.Item>
            <Menu.Item key="4" onClick={()=>{
              router.push('/system/inspection')
            }}>
              巡回人员
            </Menu.Item>
            <Menu.Item key="5" onClick={()=>{
              router.push('/system/chart')
            }}>
              数据统计
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className={cx('content')}>
          {
            router.query.id==='all'?
            <AllForm></AllForm>:
            router.query.id==='member'?
            <Member></Member>:
            router.query.id==='chart'?<Chart></Chart>:router.query.id==='inspection'?<Inspection></Inspection>:null
          }
          {/* <>
          <UpLoad action='/api/upload'></UpLoad>
          </> */}
        </Content>
      </Layout>
    </Layout>
  </> 
}

export default HomePage
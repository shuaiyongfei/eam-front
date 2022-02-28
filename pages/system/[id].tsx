import { useEffect,useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames/bind';
import { Layout, Menu } from 'antd';
import style from './index.module.css'
import AllForm from '../../container/AllForm';
import Member from '../../container/Member';
const {  Sider, Content } = Layout;
let cx = classNames.bind(style);

const HomePage=()=> {

  const [title,SetTitle]=useState(0);
  
  useEffect(()=>{
    const fobbin=function (e) {
      e = e || window.event;
      if (e) {
        e.returnValue = '关闭提示';
      }
      return '关闭提示';
    }
    window.addEventListener('beforeunload',fobbin)
    return ()=>{
      window.removeEventListener('beforeunload',fobbin)
    }
  },[])

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
        <Menu theme="dark" mode="inline"  onClick={(e)=>[
          console.log(e)
        ]}>
            <Menu.Item key="1" >
              全貌数据
            </Menu.Item>
            <Menu.Item key="2" >
              高后果区
            </Menu.Item>
            <Menu.Item key="3" >
              成员管理
            </Menu.Item>
            <Menu.Item key="4" >
              巡回人员
            </Menu.Item>
            <Menu.Item key="5" >
              数据统计
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className={cx('content')}>
          <Member></Member>
        </Content>
      </Layout>
    </Layout>
  </> 
}

export default HomePage
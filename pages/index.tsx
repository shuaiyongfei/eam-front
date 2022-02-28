import { useEffect } from 'react'
import Link from 'next/link'
import classNames from 'classnames/bind';
import { Layout, Menu } from 'antd';
import style from './index.module.css'

const { Footer, Sider, Content } = Layout;

const { SubMenu } = Menu;
let cx = classNames.bind(style);

const HomePage=()=> {

  
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
    <Layout>
      <Layout>
        <Sider className={cx('sider')}>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </> 
}

export default HomePage
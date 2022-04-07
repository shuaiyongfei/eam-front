import React from "react"
import {Button, Card, Upload } from "antd";
import { InboxOutlined } from '@ant-design/icons';


import style from './index.module.css'
import classNames from "classnames/bind";




let cx = classNames.bind(style);
const UpLoad:React.FC<any>=()=>{
 
 
  return (
    <Card title="文件上传" bordered={false} className={cx('bg')}>
      <div  style={{margin:'auto',width:'fit-content',position:'absolute',left:"0px",right:"0px",bottom:"0px", top:"0px",height:"fit-content"}}>
        <Upload name="file" action='/api/upload' accept= '.xls,.xlsx'>
          <Button  style={{width:'200px',height:'200px'}}>
            <p className={cx("ant-upload-drag-icon")}>
            <InboxOutlined />
            </p>
            <p>点击上传文件</p></Button>
        </Upload>
      </div>

    </Card>)
}
export default UpLoad
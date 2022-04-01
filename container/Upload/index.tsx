import React from "react"
import {Button, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const UpLoad:React.FC<any>=()=>{
 
 
  return (
    <div style={{height:'100%',position:'relative'}}>
  <div  style={{margin:'auto',width:'fit-content',position:'absolute',left:"0px",right:"0px",bottom:"0px", top:"0px",height:"fit-content"}}>
    <Upload name="file" action='/api/upload' accept= '.xls,.xlsx'>
      <Button icon={<UploadOutlined />} style={{width:'200px',height:'200px'}}>点击上传文件</Button>
    </Upload>
  </div>
  </div>)
}
export default UpLoad
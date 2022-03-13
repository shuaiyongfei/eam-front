import React from "react"
import {Button, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const UpLoad:React.FC<any>=()=>{
 
 
  return (<>
    <Upload name="file" action='/api/upload' accept= '.xls,.xlsx'>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>,
  </>)
}
export default UpLoad
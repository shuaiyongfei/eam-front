import { Button } from "antd";
import React, { useState } from "react"
import _ from 'lodash'
const Verification:React.FC<any>=()=>{
  const [ignore,setIgnore]=useState(false);
  const [time,setTime]=useState(60);
  const getVC=()=>{
    setIgnore(true);
    setTime(60);
    let timer
    const clear=()=>{
      setTime((time)=>{
        let nowTime=time
        if(time<=0){
          clearTimeout(timer);
          setIgnore(false);
        }
        else{
          timer=setTimeout(clear,1000);
          --nowTime
        }
        return nowTime
      });
    }
    setTimeout(clear)
  }
  return (<>
    <Button type="link"  size="small"  onClick={_.debounce(getVC,100)} disabled={ignore}>
        {!ignore?'获取验证码':time}
    </Button>
  </>)
}
export default Verification
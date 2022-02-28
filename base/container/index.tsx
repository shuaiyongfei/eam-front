import React,{PropsWithChildren} from "react";
import classNames from 'classnames/bind';
import style from './index.module.css'



let cx = classNames.bind(style);

const Container:React.FC<PropsWithChildren<any>>=props=>{
 return(
 <div className={cx('container')}>
   {props.children}
 </div>)
}
export default Container
import { Modal } from 'antd';
import axios, { AxiosRequestConfig } from 'axios';



export interface ResponseData<T> {
  code: number;
  data: T;
  msg: string;
}

const front=axios.create({
  baseURL:'http://localhost:3000/api'
})

const server=axios.create({
  baseURL:'http://localhost:3001'
})


front.interceptors.request.use((config)=>{
  const token=localStorage.getItem(
    "userLoginInfo")
  config.headers.Authorization = `token ${localStorage.getItem(
    "userLoginInfo")}`
  return config
})
front.interceptors.response.use((config)=>{
  let code=config.data.errorCode;;
  if(code==401){
    Modal.warning({
      title: '错误',
      content: (config.data as any).msg,
    });
    location.replace('/register')
    return Promise.reject()
  }
  if(code===403){
    Modal.warning({
      title: '输入错误',
      content: (config.data as any).msg,
    });
    location.replace('/register');
    return Promise.reject()
  }
  return config
})
export function frontRequest<T>(options: AxiosRequestConfig) {
  return front.request<T>(options);
}

export function serverRequest<T>(options:AxiosRequestConfig){
  return server.request<T>(options)
}



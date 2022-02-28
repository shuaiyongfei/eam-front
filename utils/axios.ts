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


export function frontRequest<T>(options: AxiosRequestConfig) {
  return front.request<T>(options);
}

export function serverRequest<T>(options:AxiosRequestConfig){
  return server.request<T>(options)
}



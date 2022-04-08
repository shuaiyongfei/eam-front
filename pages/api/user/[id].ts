import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import {serverRequest} from "../../../utils/axios"


export default async function  handler(req:NextApiRequest, res:NextApiResponse) {
  const { id } = req.query
  if(id==='register'){
    try {
      const result=await serverRequest<any>({method:'post',url:'v1/user/register',data:req.body,headers:{authorization:req.headers.authorization}})
      res.status(200).json(result.data)
    } catch (error) {
      if(axios.isAxiosError(error)){
        res.status(Number(error.code)).json('服务器错误')
      }
   }
  }
  else if(id==='login'){
    try {
      const result=await serverRequest<any>({method:'post',url:'v1/user/login',data:req.body,headers:{authorization:req.headers.authorization}})
      res.status(200).json(result.data)
    } catch (error) {
      if(axios.isAxiosError(error)){
        res.status(Number(error.code)).json('服务器错误')
      }
    }
  }
  else if(id==='all'){
    try {
      const result=await serverRequest<any>({method:"GET",url:'v1/user/all',headers:{authorization:req.headers.authorization}})
      res.status(200).json(result.data)
    } catch (error) {
      if(axios.isAxiosError(error)){
        res.status(Number(error.code)).json('服务器错误')
      }
    }
  }
  else if(id==='delete'){
    try {
      const result=await serverRequest<any>({method:"post",url:'v1/user/delete',data:req.body,headers:{authorization:req.headers.authorization}})
      res.status(200).json(result.data)
    } catch (error) {
      if(axios.isAxiosError(error)){
        res.status(Number(error.code)).json('服务器错误')
      }
    }
  }
  else if(id==='add'){
    try {
      const result=await serverRequest<any>({method:"post",url:'v1/user/register',data:req.body,headers:{authorization:req.headers.authorization}})
      res.status(200).json(result.data)
    } catch (error) {
      if(axios.isAxiosError(error)){
        res.status(Number(error.code)).json('服务器错误')
      }
    }
  }
  else if(id==='update'){
    try {
      const result=await serverRequest<any>({method:"post",url:'v1/user/update',data:req.body,headers:{authorization:req.headers.authorization}})
      res.status(200).json(result.data)
    } catch (error) {
      if(axios.isAxiosError(error)){
        res.status(Number(error.code)).json('服务器错误')
      }
    }
  }
}

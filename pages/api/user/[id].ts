import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import {serverRequest} from "../../../utils/axios"


export default async function  handler(req:NextApiRequest, res:NextApiResponse) {
  const { id } = req.query;
  if(id==='all'){
    try {
      const result=await serverRequest<any>({method:"post",url:'v1/user/all',data:req.body,headers:{authorization:req.headers.authorization,super:req.headers.super as string}})
      res.status(200).json(result.data)
    } catch (error) {
      if(axios.isAxiosError(error)){
        res.status(Number(error.code)).json('服务器错误')
      }
    }
  }
  else {
    try {
      const result=await serverRequest<any>({method:"post",url:`v1/user/${id}`,data:req.body,headers:{authorization:req.headers.authorization,super:req.headers.super as string}})
      res.status(200).json(result.data)
    } catch (error) {
      console.log(error,'+++++++++++++++++++')
      if(axios.isAxiosError(error)){
        res.status(Number(error.code)).json('服务器错误')
      }
    }
  }
}

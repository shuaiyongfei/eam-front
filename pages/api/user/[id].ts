import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import {serverRequest} from "../../../utils/axios"


export default async function  handler(req:NextApiRequest, res:NextApiResponse) {
  const { id } = req.query
  if(id==='register'){
    try {
      const result=await serverRequest<any>({method:'post',url:'v1/user/register',data:req.body})
      res.status(200).json(result.data)
    } catch (error) {
      if(axios.isAxiosError(error)){
        res.status(Number(error.code)).json('服务器错误')
      }
   }
  }
  else{
    try {
      const result=await serverRequest<any>({method:'post',url:'v1/user/login',data:req.body})
      console.log(result.data)
      res.status(200).json(result.data)
    } catch (error) {
      if(axios.isAxiosError(error)){
        res.status(Number(error.code)).json('服务器错误')
      }
    }
  }
}

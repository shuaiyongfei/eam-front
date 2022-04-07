import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import {serverRequest} from "../../../utils/axios"


export default async function  handler(req:NextApiRequest, res:NextApiResponse) {
  try {
    if(req.query.id==='all'){
    const result=await serverRequest<any>({method:"GET",url:'/v1/inspection/all'})
    res.status(200).json(result.data)
    }
    else if(req.query.id==='one'){
      const result=await serverRequest<any>({method:"GET",url:'/v1/inspection/one'})
      res.status(200).json(result.data)
    }
    else if(req.query.id==='delete') {
      const result=await serverRequest<any>({method:"POST",url:'/v1/inspection/delete',data:{phone:req.body}})
      res.status(200).json(result.data)
    }
    else if(req.query.id==='add'){
      const result=await serverRequest<any>({method:"POST",url:'/v1/inspection/add',data:req.body})
      res.status(200).json(result.data)
    }
  } catch (error) {
    if(axios.isAxiosError(error)){
      res.status(Number(error.code)).json('服务器错误')
    }
  }
}

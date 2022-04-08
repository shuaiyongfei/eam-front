import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import {serverRequest} from "../../utils/axios"


export default async function  handler(req:NextApiRequest, res:NextApiResponse) {
  let url='/v1/serious/submit/'+req.query.kind
  const data = req.body
  try {
    const result=await serverRequest<any>({method:'post',url,data,headers:{authorization:req.headers.authorization}})
    res.status(200).json(result.data)
  } catch (error) {
    if(axios.isAxiosError(error)){
      res.status(Number(error.code)).json('服务器错误')
    }
  }
}

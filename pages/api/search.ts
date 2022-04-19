import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import {serverRequest} from "../../utils/axios"


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  try {
    const result=await serverRequest<any>({method:"POST",url: `/v1/serious/search`,data:req.body,headers:{authorization:req.headers.authorization,super:req.headers.super as string}})
    res.status(200).json(result.data)
  } catch (error) {
    if(axios.isAxiosError(error)){
      res.status(Number(error.code)).json('服务器错误')
    }
  }
}

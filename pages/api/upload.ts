import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import {serverRequest} from "../../utils/axios"


export default async function  handler(req:NextApiRequest, res:NextApiResponse) {
  let url='/v1/upload'
  const data = req.body
  console.log(data)
  console.log(req.headers['content-type'])
  try {
    const result=await serverRequest<any>({method:'post',url,data, headers:{'Content-type':req.headers['content-type'],
  }})
    res.status(200).json(result.data)
  } catch (error) {
    if(axios.isAxiosError(error)){
      res.status(500).json('服务器错误')
    }
  }
}


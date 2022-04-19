import { IncomingForm } from 'formidable'
import FormData from 'form-data'
import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'

import {serverRequest} from "../../utils/axios"


export default async function  handler(req:NextApiRequest, res:NextApiResponse) {
  let url='/v1/upload'
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm()
    form.parse(req, (err, fields, files) => {
        if (err) return reject(err)
        resolve({ fields, files })
      })
  })
  const path=(data as any).files.file.filepath;
  let form = new FormData(); 
  form.append('file', fs.createReadStream(path));
  await serverRequest({url,method:'POST',data:form, headers:{...form.getHeaders(),super:'111111'}});
  res.send("上传失败");
}



export const config = {
  api: {
    bodyParser: false,
}}

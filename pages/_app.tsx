import './styles.css'
import {useLayoutEffect} from 'react'
import { useRouter } from "next/router";
// This default export is required in a new `pages/_app.js` file.



export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useLayoutEffect(()=>{
    if(router.pathname!=='/register'&& !localStorage.getItem('userLoginInfo')){
      router.push('/register')
    }
  })
  return <Component {...pageProps} />
}
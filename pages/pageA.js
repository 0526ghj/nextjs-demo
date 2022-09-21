import Link from "next/link"
import { withRouter } from "next/router"
import Router from "next/router";
import axios from "axios";
import { resolve } from "styled-jsx/css";



const pageA = ({ router }) => {
  
  // Router.events.on('routeChangeStart', (...args) => {
  //   console.log('路由开始变化', ...args)
  // })
  return (
    <>
      <div>我是a页面</div>
      <div>从{ router.query.name }调过来的</div>
      <Link href="/">
      <a>去首页</a>
    </Link></>
  )
}

// 数据请求
// pageA.getInitialProps = async () => {
//   const promise = new Promise( (resolve) => {
//     axios('请求地址').then(
//       (res) => {
//         console.log('远程数据', res)
//         resolve(res.data.data)
//       }
//      )
//   })

//   return await promise
// }

export default withRouter(pageA)
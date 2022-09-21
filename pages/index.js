import react from "react";
import Link from "next/link";
import Router from "next/router";


const home = () => {
  function gotoA() {
    Router.push('/pageA?name=ButtonA')
  }

  Router.events.on('routeChangeStart', (...args) => {
    console.log('路由开始变化', ...args)
  })
  return (
    <div>
      <div>我是首页</div>
      <div><Link href='/pageA?name=LinkA'><a>去a页面</a></Link></div>
      <div><Link href='/pageB'><a>去b页面</a></Link></div>
      {/* <div><button onClick={ ()=>{Router.push('/pageA')}}>去a页面</button></div> */}
      <div><button onClick={ gotoA }>去a页面</button></div>
    </div>
  )
}
export default home
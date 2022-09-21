import Link from "next/link"

const pageB = () => {
  return (
    <><div>我是a页面</div><Link href="/">
      <a>去首页</a>
    </Link></>
  )
}
export default pageB
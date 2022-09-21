import React from 'react'
import {useState} from 'react'
function style() {

  const [color, setColor] = useState('blue')

  const changeColor = () => {
    setColor(color === 'blue'? 'red':'blue')
  }
  return (
    <>
      <div>样式学习</div>
      <div className="box">我是红色</div>
      <div><button onClick={changeColor}>点击变颜色</button></div>
      <style jsx>
        {`
          div {
            color: ${color};
          }
          .box {
           color: red;
          }
        `}
      </style>
    </>
  )
}

export default style
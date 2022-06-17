import React from 'react'
import './Banner.css'

export default function Banner() {
  return (
    <div className="container">
      <div className="title">房地产ETF基金</div>
      <div className="codeContainer">
        基金代码: <span className="code">515060</span>
      </div>
      <div className="bottom">联接A: 008088 联接C: 008089</div>
    </div>
  )
}

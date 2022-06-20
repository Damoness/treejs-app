import React from 'react'
import './Result.css'
import { AiOutlineClose } from 'react-icons/ai'

const { innerHeight: height, innerWidth: width } = window

type Props = {
  score: number //得分
  success: boolean //成功
  onBack?: () => void
  onReplay?: () => void
}

export default function Result({ score, success, onBack, onReplay }: Props) {
  const [show, setShow] = React.useState(success)
  return show ? (
    <div className="result-container" style={{ height, width }}>
      <AiOutlineClose
        style={{
          position: 'absolute',
          left: 5,
          top: 5,
          padding: 5,
          borderRadius: 5,
          backgroundColor: '#474747',
        }}
        color="white"
        size={20}
        onClick={() => {
          setShow(false)
        }}
      />
      <>
        <span id={'scoreTitle'}>本次得分</span>
        <span id="score">{score}</span>
        {success ? <Success /> : <Failure />}
        <div className="flexRow">
          <button className="buttonBack" onClick={onBack}>
            返回首页
          </button>
          <button className="buttonReplay" onClick={onReplay}>
            再来一局
          </button>
        </div>
      </>
    </div>
  ) : null
}

const Success: React.FC<{}> = () => {
  return (
    <div id="result">
      <h1>恭喜您获得</h1>
      <div>0.58元</div>
      <div>
        所获微信红包将在微信服务通知中推送，可能有延迟，请耐心等待，收到服务通知后请在24小时内领取红包
      </div>
    </div>
  )
}

const Failure: React.FC<{}> = () => {
  return (
    <div id="result">
      <h1>很遗憾</h1>
      <div>挑战失败</div>
      <div>😭</div>
    </div>
  )
}

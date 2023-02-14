/* eslint-disable @next/next/no-img-element */
import React from 'react'

type MarketingPopupProps = {
  handleShowPopup:()=>void
}

export const MarketingPopup = ({handleShowPopup}:MarketingPopupProps) => {
  return (
    <div className="popup">
      <div className="popup__container">
        <div onClick={(e)=>{
          e.preventDefault()
          handleShowPopup()
        }} style={{cursor: 'pointer'}}>
          <lottie-player 
            class="popup__close" 
            src="https://assets5.lottiefiles.com/packages/lf20_JuwbIo.json" 
            background="transparent"  
            speed="1"  
            hover
          />
        </div>
        <div className="popup__img">
          <lottie-player className="popup__img-bg" src="https://assets6.lottiefiles.com/packages/lf20_ttz7k6cj.json"  background="transparent"  speed="1"  loop autoplay></lottie-player>
        </div>
        <div className="popup__content">
          <div className="popup__content__img">
            <img src="img/popup/icon-1.png" alt="remind" />
          </div>
          <p>如您並未安裝或設置串接，我們能提供串接的基本要求諮詢，或
            者由我們為您提供串接以及設定服務並且共同擬定轉換標的，使
            一切變得簡易．
            如您不具備任何基本串接設置且無法自行完成也無法接受我們提
            供的串接服務，本公司將無法承攬有關Ads類別之一切廣告服務!!</p>
        </div>
        <div className="popup__bg" />
      </div>
    </div>
    )
}

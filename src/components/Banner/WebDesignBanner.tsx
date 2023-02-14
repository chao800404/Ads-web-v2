import React from 'react'

type WebDesignBannerProps = {
  title: string
  svgUrl: string
}

export const WebDesignBanner = ({title , svgUrl}:WebDesignBannerProps) => {



  return (
    <div className="template_demo webDesign">
      <div className="template_demo-container webDesign_image webDesignDemo_an">
        <lottie-player className="webDesign-svg" src={svgUrl}  background="transparent"  speed="1" loop autoplay></lottie-player>
      </div>
      
      <div className="webDesign_radar-img radar-img_an">
        <lottie-player 
          src="https://assets9.lottiefiles.com/packages/lf20_ofocdzqf.json"  
          background="transparent" 
          speed="1" 
          loop 
          autoplay />
      </div>
      <h1 className="heading-1--1 webDesign_title">
        <span>{title}</span>
        <span>{}</span>
      </h1>
    </div>
  )
}


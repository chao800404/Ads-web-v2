import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { Spinner } from '../spninner/spinner'

type WebDesignBannerProps = {
  title: string
  svgUrl: string
}

export const WebDesignBanner = ({title , svgUrl}:WebDesignBannerProps) => {
  const [onLoad , setOnLoad] = React.useState(false)


  return (
    <div className="template_demo webDesign">
      {
        !onLoad && <Spinner />
      }
      <div className="template_demo-container webDesign_image webDesignDemo_an">
        <lottie-player className="webDesign-svg" src={svgUrl}  background="transparent"  speed="1" loop autoplay></lottie-player>
      </div>
      
      <div className="webDesign_radar-img radar-img_an">
        <Player
          onEvent={(e)=> {
            console.log(e === 'load')
            e === 'load' && setOnLoad(true)
          }}
          src="https://assets9.lottiefiles.com/packages/lf20_ofocdzqf.json"  
          background="transparent" 
          speed={1}
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


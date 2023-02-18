import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { Spinner } from '../spninner/spinner'

export const CreativesBannerElement = () => {
  const [onLoad , setOnLoad] = React.useState(false)
  return (
    <div className="template_demo webCreativeDemo">
      {
        !onLoad && <Spinner />
      }
      <div className="template_demo-container webCreativeDemo_container">
      <Player
        onEvent={(e)=> 
          e === 'load' && setOnLoad(true)
        }
        src="https://assets3.lottiefiles.com/packages/lf20_9ciruyqz.json"  
        background="transparent"  
        speed={1}  
        autoplay 
        loop></Player>
      </div>
      <h1 className="heading-1--1 webCreativeDemo-title">
          Return on AD Spending
      </h1>
   </div>
  )
}


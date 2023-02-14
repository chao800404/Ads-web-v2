import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

export const Spinner = () => {
  return (
    <div style={{
      width:"100vw", 
      height:"100vh", 
      display:"flex", 
      alignItems:"center", 
      justifyContent:"center",
      backgroundColor:"#212936",
      position:"fixed",
      zIndex:1000,
      top:0,
      left:0,
        }}>
      <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_nmwkxjsf.json"
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  )
}


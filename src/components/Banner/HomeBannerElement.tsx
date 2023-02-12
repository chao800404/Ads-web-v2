import React from 'react'


type  HomeBannerElementProps = Record<"title" | 'subtitle' | 'desc' | 'svgUrl' , string>


export const HomeBannerElement:React.FC<HomeBannerElementProps> = ({title , subtitle, desc , svgUrl}) => {
  return (
    <div className="demo">
      <div className="demo__text">
        <h1 className="heading-1">
          <span>{title}</span>
          <span>{subtitle}</span>
        </h1>
        <p>{desc}</p>
      </div>
      
      <button className="btn demo__btn get__start"><a href="#">Get Started</a></button>

      <div className="demo__svg demo__an">
        <lottie-player
          style={{width:'100%' , height:"100%"}}
          src={svgUrl}  
          background="transparent"  
          speed="1"  
          autoplay 
          loop/>
      </div>
    </div> 
  )
}


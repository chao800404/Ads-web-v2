import React, { useRef } from "react";



export const RobotElement = ()=>{

  const ref = useRef(null);
  return (
    <div className="message">
      <div className="message__container">
        <div className="message__close">
          <lottie-player  
            src="https://assets5.lottiefiles.com/packages/lf20_JuwbIo.json"
            background="transparent"  
            speed="1"  
            hover />
        </div>
        <h2 className="message__title">Contact Us</h2>
        <div className="message__server">
          <a href="tel:+886-0988638829" className="message__server-phone">
            <lottie-player 
              className="message__server-phone--img" 
              src="https://assets6.lottiefiles.com/packages/lf20_zbdo18dt.json"
              background="transparent"
              speed="1"
              loop
              autoplay /> 
            <p className="message__server-phone--text">Phone</p>
          </a>
          <a href="mailto:dds8251@gmail.com" className="message__server-email">
            <lottie-player 
              className="message__server-email--img" 
              src="https://assets2.lottiefiles.com/packages/lf20_gui6v03l.json"  
              background="transparent"
              speed="1" 
              loop 
              autoplay /> 
            <p className="message__server-email--text">Email</p>
          </a>
        </div>
      </div>
      <div className="message__robot">
        <div style={{width:'14rem' , height:"13rem"}}>
          <lottie-player
            ref={ref}
            mode="normal"
            className="message__robot-img" 
            src="https://assets10.lottiefiles.com/packages/lf20_if8bcea1.json"  
            background="transparent"
            speed="1" 
            hover
            style={{ width: "inherit", height: "inherit" }}
            />
        </div>
      </div>
    </div>
  )
}


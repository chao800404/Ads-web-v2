import useWindowPointerToggle from "@/utils/useWindowPointerToggle";
import React, { MouseEvent, useRef } from "react";



export const RobotElement = ()=>{
  const {ref , toggle, handleToggleSet} =  useWindowPointerToggle<HTMLDivElement>()
  const handleOnClick = ()=> handleToggleSet(!toggle)
  const [pos , setPos] = React.useState(0)
  const [delayPos , setDelayPos] = React.useState(0)
  
  
  React.useEffect(()=>{
    const handleOnScroll=(e:Event)=>{
      const position = window.pageYOffset;
      setPos(position)
    }
    window.addEventListener('scroll',handleOnScroll)
    return ()=> window.removeEventListener('scroll',handleOnScroll)
  },[])

  React.useEffect(()=>{
    const timeout =  setTimeout(()=>setDelayPos(pos),500)
    return ()=> clearTimeout(timeout)
  },[pos])

  return (
    <div className={`message ${pos !== delayPos && "message--active--2"}`} onClick={handleOnClick} ref={ref}>
      <div className={`message__container ${toggle && "message--active" }`}>
        <div className="message__close">
          <lottie-player  
            src="https://assets5.lottiefiles.com/packages/lf20_JuwbIo.json"
            background="transparent"  
            speed="1"  
            hover 
            />
            
        </div>
        <h2 className="message__title message__title--active">Contact Us</h2>
        <div className="message__server">
          <a href="tel:+886-0988638829" className="message__server-phone">
            <lottie-player 
              class="message__server-phone--img" 
              src="https://assets6.lottiefiles.com/packages/lf20_zbdo18dt.json"
              background="transparent"
              speed="1"
              loop
              autoplay
        
              /> 
            <p className="message__server-phone--text">Phone</p>
          </a>
          <a href="mailto:dds8251@gmail.com" className="message__server-email">
            <lottie-player 
              class="message__server-email--img" 
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
          <lottie-player
            mode="normal"
            class="message__robot-img" 
            src="https://assets10.lottiefiles.com/packages/lf20_if8bcea1.json"  
            background="transparent"
            speed="1" 
            hover
            />
        </div>
    </div>
  )
}


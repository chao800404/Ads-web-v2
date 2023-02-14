import React from 'react'


export const ScrollbarElement = () => {

  const trackRef = React.useRef<HTMLDivElement>(null)
  const [onPointerDown , setOnPointerDown] = React.useState(false)
  const [move , setMove] = React.useState(0)
  const trackElemHeight = trackRef.current?.getBoundingClientRect().height



  React.useEffect(()=>{
    if(trackRef && trackRef.current){
      const trackElem = trackRef.current
      const trackHeight = trackElem.getBoundingClientRect().height
      const body = document.body.getBoundingClientRect().height
      const isometric = (body - window.innerHeight) / trackHeight 

      const handlePointerLeave = (e:PointerEvent)=>{
        if(onPointerDown){
          if(move <= trackHeight && move >= 0){
            setMove(e.clientY - trackHeight)
            window.scrollTo({ top: Math.floor(move * isometric ) , behavior: 'auto' });
          }
        }
      }
      const handlePointerUp = ()=>{
        setOnPointerDown(false)
        if(move > trackHeight) return setMove(trackHeight)
        if(move < 0)  return setMove(0)
      }

      const handleOnScroll =()=>{
        const curY = window.scrollY 
        const y = curY / isometric
        setMove(y)
      }
  
  
      window.addEventListener('pointermove',handlePointerLeave )
      window.addEventListener('pointerup' , handlePointerUp)
      window.addEventListener('scroll',handleOnScroll )
      return ()=>{
        window.removeEventListener("pointermove" , handlePointerLeave )
        window.removeEventListener("pointerup" , handlePointerUp )
        window.removeEventListener('scroll' , handleOnScroll)
      }
    }
  },[move, onPointerDown])




  return (
    <div className="scrollbar__container">
      <div className="scrollbar">
        <button 
           style={{
            transform:`translateY(${move}px)`,
            cursor: onPointerDown ? "grabbing": "grab"
           }}
           onPointerDown={(e)=>{
             setOnPointerDown(true)
        }} className="scrollbar__btn">&nbsp;</button>
        <div className="scrollbar__bg" style={trackElemHeight ?{transform:`scaleY(${move / trackElemHeight })`}:{}} />
        <div className="scrollbar__bg-outside" ref={trackRef} />
      </div>
    </div>
  )
}


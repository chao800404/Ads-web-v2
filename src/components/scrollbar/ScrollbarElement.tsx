import React from 'react'

export const ScrollbarElement = () => {
  return (
    <div className="scrollbar__container">
      <div className="scrollbar">
        <button className="scrollbar__btn">&nbsp;</button>
        <div className="scrollbar__bg"/>
        <div className="scrollbar__bg-outside"/>
      </div>
    </div>
  )
}


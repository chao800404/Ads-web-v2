import React from 'react'
import { CousultationBtnProps } from './type'



export const CousultationBtn = (props:CousultationBtnProps) => {
  return (
    <div className={`process__card process__card-${props.index + 1}`}>
      <div className="process__card__progress">
        <svg version="1.1" viewBox="0 0 70 70" preserveAspectRatio="xMinYMin meet">
            <circle  cx="35" cy="35" r="25"/>
            <circle  cx="35" cy="35" r="25"/>
        </svg>
      </div>
      <h4 className="process__card__numb">
        {props.progress[0]}
        </h4>
      <h4 className="heading-5 process__card__heading">
        {props.progress[1]}
      </h4>
      <div className="process__card__plane process__card__plane-${index + 1}">
        &nbsp;
        </div>
      <p className="process__card__text">
        {props.progress[2]}
      </p>
    </div>
  )
}


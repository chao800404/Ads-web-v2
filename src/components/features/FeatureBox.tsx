import React from 'react'
import { ServicesType } from './HomeFeaturesElement'
import Image from 'next/image'

type FeatureBoxProps = ServicesType & {
  index:number,
  onMouseEnter:(event:React.MouseEvent)=> void
  onMouseLeave:(event:React.MouseEvent)=>void
}

export const FeatureBox = (props:FeatureBoxProps) => {
  return (
    <div
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      data-index={`box-${props.index}`} 
      className={`
      feature__server__content feature__server__content-${props.index + 1}
      `}>
      <div className="feature__server--type"> 
        <Image alt={props.desc} src={props.img} layout="fill" />
      </div>
      <h4 className="feature__server__title heading-4">
        {props.title}
      </h4>
      <p className="feature__server__text">
        {props.desc}
      </p>
  </div>
  )
}


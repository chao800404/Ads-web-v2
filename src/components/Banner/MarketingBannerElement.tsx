
import React from 'react'
import Image from 'next/image'
import { Spinner } from '../spninner/spinner'

type  MarketingBannerProps = {
  data:Record<'title' | 'desc' | "img" , string>
}

export const MarketingBannerElement = ({data}: MarketingBannerProps) => {

  const [onLoad , setOnLoad] = React.useState(false)

  return (
    <div className="template_demo  webAdsDemo">
      {
        !onLoad && <Spinner />
      }
      <div className="template_demo-container webAdsDemo_container">
        <div className="webAdsDemo-img">
          <Image onLoadCapture={()=> setOnLoad(true)} layout='fill' objectFit="scale-down"  src={data.img} alt={data.title} />
        </div>
      </div>
      <h1 className="heading-1--1 webAdsDemo-title">
          <span>{data.title}</span>
          <span>{data.desc}</span>
      </h1>
   </div>
  )
}

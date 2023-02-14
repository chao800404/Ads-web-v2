
import React from 'react'
import Image from 'next/image'

type  MarketingBannerProps = {
  data:Record<'title' | 'desc' | "img" , string>
}

export const MarketingBannerElement = ({data}: MarketingBannerProps) => {
  return (
    <div className="template_demo  webAdsDemo">
      <div className="template_demo-container webAdsDemo_container">
        <div className="webAdsDemo-img">
          <Image layout='fill' objectFit="scale-down"  src={data.img} alt={data.title} />
        </div>
      </div>
      <h1 className="heading-1--1 webAdsDemo-title">
          <span>{data.title}</span>
          <span>{data.desc}</span>
      </h1>
   </div>
  )
}

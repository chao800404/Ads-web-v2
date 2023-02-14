/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react'
import Image from 'next/image'
import { Context } from '@/store/useContext'


type MarketingFeaturesProps = {
  data:{
    tips:string[]
    content:{
      title:string
      desc:string
      img:string
    }[]
  }
}

export const MarketingFeaturesElement = ({data}:MarketingFeaturesProps) => {

  const {handleScrollForm} = useContext(Context);

  return (
    <div className="adsFeature">
      {
        data.content.map(({title, desc , img},index) => (
          <figure className="adsFeature_content" key={`${title}_${index}`}>
            <div className="adsFeature_image">
              <Image layout='fill' objectFit="scale-down" src ={img} alt={title} />
            </div>
    
            {/* <img className="adsFeature_image" src ={img} alt={title} /> */}
            <figcaption className="adsFeature_text">
              <h3 className="heading-3 adsFeature_text_title">{title}</h3>
              <p className="adsFeature_text_text">{desc}</p>
            </figcaption >
          </figure>
        ))
      }
      <div className="adsFeature_remind">
        <div className="adsFeature_remind_svg">
          <lottie-player  src="https://assets6.lottiefiles.com/packages/lf20_PXW1iS.json"  background="transparent"  speed="1"  hover></lottie-player>
        </div>
        <p className="adsFeature_remind_text">
          <span>{data.tips[0]}</span>
          <span>{data.tips[1]}</span>
        </p>
      </div>
      <button className="btn-3 adsFeature_btn" onClick={()=>handleScrollForm()} >立刻預約</button>
    </div>
  )
}

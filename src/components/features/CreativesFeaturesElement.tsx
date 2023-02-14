/* eslint-disable @next/next/no-img-element */
import React from 'react'

type CreativesFeaturesProps = {
  data:Record<"img"|"desc" , string>[]
}


export const CreativesFeaturesElement = ({data}:CreativesFeaturesProps) => {
  return (
    <div className="creativeFeature">
      {
        data?.map((item , i)=>{
          return (
            <figure key={`${item.desc}_${i}`} className="creativeFeature_content">
              <img className="creativeFeature_image" src ={item.img} alt={item.desc} />
              <figcaption className="creativeFeature_text">
                {item.desc}
              </figcaption>
            </figure>
          )
        })
      }
    </div>
  )
}

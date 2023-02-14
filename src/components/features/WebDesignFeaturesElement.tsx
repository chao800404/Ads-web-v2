/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

type WebDesignFeaturesProps = {
  title:string
  list:{
    name:string
    img:string
  }[],
  content:{
    title:string
    subtitle:string
    img:string
  }[]
}

export const WebDesignFeaturesElement = ({title , list , content}:WebDesignFeaturesProps) => {
  const [index ,setIndex] = React.useState(0)

  return (
    <div className="webFeature">
      <ul className="webFeature_Option">
        <h3 className="heading-3 webFeature-title"> {title} </h3>
          {
            list.map((item ,i)=> (
                <li 
                  key={`${item.name}_${i}`} 
                  className={`webFeature_Option-ls ${i === index && "webFeature_Option-ls--active"}`}
                  onClick={()=>setIndex(i)}
                  >
                  {item.name}
                </li>
            ))
          }
        <img className="webFeature_img" src={list[index].img}  alt="fwiehfhiw"/>
      </ul>
  
      <div className="webFeature_order">
        {
          content.map((item,i)=>{
            return (
              <div key={`${item.title}_${i}`} className="webFeature_content webFeature_hover-an-${index + 1}">
                <div className="webFeature_svg" >
                  <Image alt={item.title} src={item.img} layout="fill" objectFit="scale-down" />
                </div>
                <h3>{i + 1}</h3>
                <h4 className="heading-4 webFeature_titles">
                  <span>{item.title}</span>
                  <span>{item.subtitle}</span>
                </h4>
              </div>
            )
          })
        }
      </div>
  </div>
  )
}

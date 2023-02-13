import React from 'react'
import Link from 'next/link'
import {FeatureWebSVG} from '../layout/home/svg/introduce/FeatureWebSVG'
import {FeatureMarketingSVG  }from '../layout/home/svg/introduce/FeatureMarketingSVG'
import {FeatureCreatingSVG} from '../layout/home/svg/introduce/FeatureCreatingSVG'
import {ServicesBaseSVG} from '../layout/home/svg/services/ServicesBaseSVG'
import { InView, useInView } from 'react-intersection-observer';
import {FeatureBox} from './FeatureBox'
import Image from 'next/image'

type TitleType =  Record<"title"|"subtitle" , string>
export type ServicesType = Record<'title' | 'desc' | 'img' | "gif" , string>

export type HomeFeaturesElementProps = {
  featureDatas:(TitleType & Record<'desc'|"slug",string> )[]
  featureServiesDatas: TitleType & {
    services: ServicesType[]
  }
}



export const HomeFeaturesElement = ({featureDatas , featureServiesDatas}:HomeFeaturesElementProps) => {
  const [activeN , setActiveN] = React.useState(0) 
  const [servicesIndex , setServicesIndex]= React.useState<number | null>(null)
  const [ref, inView] = useInView({threshold:0});
  const titles = featureDatas.map(item => item.subtitle)


  const curItem = featureDatas[activeN]

  const render = React.useCallback(()=>{
    switch(activeN) {
      case 0:
        return <FeatureWebSVG />
      case 1:
        return <FeatureMarketingSVG />
      case 2:
        return <FeatureCreatingSVG />
    }
  },[activeN])
  



  const handleMouseEnter =(e:React.MouseEvent)=> {
    const target = (e.target as HTMLDivElement).closest('.feature__server__content')
    const index = target?.getAttribute('data-index')?.split('-')[1]
    if(index && !Number.isNaN(parseInt(index))){
      setServicesIndex(parseInt(index))
    }
  }


  const handleMouseLeave = ()=> setServicesIndex(null)


  return (
  
    <>
      <div className="feature">
        {
          titles.map((title , i ) => 
            <h3 
              key={`${title}_${i}`} 
              className={`feature__title ${activeN === i && "feature__title--active"}`} 
              onClick={()=> setActiveN(i)}
            >
              {title}
            </h3>  
          )}
          <figure className="feature__content">
            <div className={`feature__content-img option-an--${activeN + 1}`}>
              {render()}
            </div>
            <h2 className="heading-3 feature__content-heading"> 
              {curItem.title}
              <span>{curItem.subtitle}</span>
            </h2>
            <p className="feature__content-text">{curItem.desc}</p>
          </figure>
          <button className="feature__btn feature__btn-1 btn-1">Contact Us</button>
          <button className="feature__btn feature__btn-2 btn-1 feature__anchor">
            <Link href={curItem.slug}>
              <a href="#${ANCHOR[1]}">Learn More</a>
            </Link>
          </button>
      </div>


      <div className="feature__server" ref={ref}>
        <h2 className="heading-2 feature__server__heading" 
            style={{
              transform: inView ?"translateX(0rem)":"translateX(-10rem)",
              opacity: inView ? 1:0 , 
              visibility: inView ? "visible":"hidden"
            }}>
          <span>{featureServiesDatas.title.split(' ').filter((_,i)=> i <3).join(" ")}</span>
          <span>{featureServiesDatas.title.split(' ').filter((_,i)=> i >2).join(" ")}</span>
          <span>{featureServiesDatas.subtitle}</span> 
        </h2>
        {
          featureServiesDatas.services.map((item , i)=> (
            <FeatureBox 
              key={`${item.desc}_${i}`} 
              index={i} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              {...item} />
          ))
        }

        <div className={`feature__server__img feature_animate-prev ${inView && "feature_animate-end"} `}>
          <div className="feature__server__img-bg ">
            <ServicesBaseSVG />
          </div>
          <div className={`feature__server__img-init`} >
            {servicesIndex === null ? 
              <Image 
                alt="good ads" 
                objectFit="scale-down" 
                layout="fill" 
                unoptimized={true} 
                src="/img/google__service__logo/ads-logo.png" 
              />: 
              featureServiesDatas.services.map((item, index) => {
                return index === servicesIndex && (
                  <Image
                    key={item.desc + index}
                    src={item.gif} 
                    alt={item.title}
                    objectFit="scale-down"
                    layout="fill" 
                    unoptimized={true}
                />
                )
              })
            }
          </div>
          </div> 
      </div>
    </>
  )
}


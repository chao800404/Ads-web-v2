import React from 'react'
import Link from 'next/link'
import {FeatureWebSVG} from '../layout/home/svg/introduce/FeatureWebSVG'
import {FeatureMarketingSVG  }from '../layout/home/svg/introduce/FeatureMarketingSVG'
import {FeatureCreatingSVG} from '../layout/home/svg/introduce/FeatureCreatingSVG'


type HomeFeaturesElementProps = {
  featureDatas: Record<"title"|"subtitle" |"desc"|"slug" , string> []
}



export const HomeFeaturesElement = ({featureDatas}:HomeFeaturesElementProps) => {
  const [activeN , setActiveN] = React.useState(0) 
  const titles = featureDatas.map(item => item.subtitle)

  const curItem = featureDatas[activeN]

  const render =  React.useCallback(()=>{
    switch(activeN) {
      case 0:
        return <FeatureWebSVG />
      case 1:
        return <FeatureMarketingSVG />
      case 2:
        return <FeatureCreatingSVG />
    }
  },[activeN])

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


      {/* <div className="feature__server">
        <h2 className="heading-2 feature__server__heading">
          <span>${this._organizeText(
            this._data.features__server.title,
            0,
            3
          )}</span>
          <span>${this._organizeText(
            this._data.features__server.title,
            3,
            5
          )}</span>
          <span>${this._data.features__server.ch_title}</span> 
        </h2>


      ${this._markupServer(this._data.features__server.servers)}

      <div className="feature__server__img feature_animate-prev">
        <div className="feature__server__img-bg ">
          ${adsSvg}
        </div>

        ${this._imgSrc
          .map(
            (img, index) =>
              `<img className="feature__server__img-example feature__server__img-example-${
                index + 1
              }" src="${img}" alt="example${index + 1}">`
          )
          .join("")}
          <img className="feature__server__img-init" src="${googleAdsLogo}" alt="Ads Logo">
        </div>
      </div> */}
    </>
  )
}


/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { ConsultationElementProps, ConsultContentType } from './type'
import { CousultationBtn } from './CousultationBtn'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { Form } from './form';


export const ConsultationElement = (props:ConsultationElementProps) => {
  return (
    <div className="process">
      <h2 className="heading-2 process__heading">
        {props.title}
      </h2>

        {
          props?.progress.map((item , index) => 
            <CousultationBtn key={`${item[0]}_${index}`} index={index} progress={item} 
          />)
        }
  
      <h2 className="heading-2 process__consult__heading">
        {props.consult_title}
      </h2>
      <div className="process__consult__story">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className="process__consult__story__content swiper-slide  process__swiper-slide">
            <div className="process__consult__story__content swiper-slide  process__swiper-slide" style={{display:'flex'}}>
              <img className="process__consult__story__content-img" src={props.consult_content[0].img} alt={props.consult_content[0].title} />
              <div  className="process__consult__story__content-text">
                  <h3 className="heading-3">{props.consult_content[0].title}</h3>
                  <p>{props.consult_content[0].desc}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="process__consult__story__content swiper-slide  process__swiper-slide" style={{display:'flex'}}>
              <img className="process__consult__story__content-img" src={props.consult_content[1].img} alt={props.consult_content[1].title} />
              <div  className="process__consult__story__content-text">
                  <h3 className="heading-3">{props.consult_content[1].title}</h3>
                  <p>{props.consult_content[1].desc}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="process__consult__story__content swiper-slide  process__swiper-slide" style={{display:'flex'}}>
              <img className="process__consult__story__content-img" src={props.consult_content[2].img} alt={props.consult_content[2].title} />
              <div  className="process__consult__story__content-text">
                  <h3 className="heading-3">{props.consult_content[2].title}</h3>
                  <p>{props.consult_content[2].desc}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="process__consult__story__content swiper-slide  process__swiper-slide" style={{display:'flex'}}>
              <img className="process__consult__story__content-img" src={props.consult_content[3].img} alt={props.consult_content[3].title} />
              <div  className="process__consult__story__content-text">
                  <h3 className="heading-3">{props.consult_content[3].title}</h3>
                  <p>{props.consult_content[3].desc}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="process__consult__story__content swiper-slide  process__swiper-slide" style={{display:'flex'}}>
              <img className="process__consult__story__content-img" src={props.consult_content[4].img} alt={props.consult_content[4].title} />
              <div  className="process__consult__story__content-text">
                  <h3 className="heading-3">{props.consult_content[4].title}</h3>
                  <p>{props.consult_content[4].desc}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="process__consult__story__content swiper-slide  process__swiper-slide" style={{display:'flex'}}>
              <img className="process__consult__story__content-img" src={props.consult_content[5].img} alt={props.consult_content[5].title} />
              <div  className="process__consult__story__content-text">
                  <h3 className="heading-3">{props.consult_content[5].title}</h3>
                  <p>{props.consult_content[5].desc}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Form />
      <div className="process__firm">
        <h2 className="process__firm__heading heading-2">
          <span>Cooperative manufacturer</span>
        </h2>
        {/* ${this._generateMakupFirm()} */}
      </div>
  
      {/* ${this._generateMakupPlanetBg()} */}
  </div>
  )
}

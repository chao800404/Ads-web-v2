/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useInView } from 'react-intersection-observer';



type SwipperBoxProps = Record<"img"|"desc" , string>

type HomeOurTeamElementProps =  {
  title:string,
  subtitle:string,
  airplaneImg:string
  earthImg:string
  process: SwipperBoxProps[]
}



export const HomeOurTeamElement = (props:HomeOurTeamElementProps) => {

  const [ref, inView] = useInView({threshold:0 , triggerOnce:true});

  return (
    <div className="ourteam" ref={ref}>
      <h2 className={`heading-2 ourteam__heading ${inView && "ourteam__heading-an-prev"}`}>
        {props.title.split(" ").slice(0 , 2).join(' ')+" "}
        <span className="breakpoint-1">
          {props.title.split(' ')[2]}
        </span> 
        <span className="breakpoint-2">
          {props.subtitle}
        </span>
      </h2>
      <div className={`ourteam__content ${inView && "swiper-an-prev"}`}>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          style={{
            gridColumn:"2 / 3", 
            display:"flex", 
          }}
        >
            <SwiperSlide >
              <figure className="ourteam__content__narrative swiper-slide ourteam__swiper-slide">
                <img className="ourteam__content__img" src={props.process[0].img} alt={props.process[0].desc}  />
                <figcaption className="ourteam__content__text">
                  {props.process[1].desc}
                </figcaption>
              </figure>
              
            </SwiperSlide>
            <SwiperSlide>
              <figure className="ourteam__content__narrative swiper-slide ourteam__swiper-slide">
                <img className="ourteam__content__img" src={props.process[1].img} alt={props.process[1].desc}  />
                <figcaption className="ourteam__content__text">
                  {props.process[1].desc}
                </figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide >
              <figure className="ourteam__content__narrative swiper-slide ourteam__swiper-slide">
                  <img className="ourteam__content__img" src={props.process[2].img} alt={props.process[2].desc}  />
                  <figcaption className="ourteam__content__text">
                    {props.process[1].desc}
                  </figcaption>
                </figure>
            </SwiperSlide>
        </Swiper>
      </div>

      <div className={`ourteam__airplane ${inView && "ourteam__airplane-an airplan-an-prev"} `}>
        <img src={props.airplaneImg} alt="airplane" />
      </div>
      <div  className={`ourteam__earth ${inView && "ourteam__earth-an earth-an-prev"} `}>
        <img src={props.earthImg} alt="Earth" />
      </div>
    </div>
  )
}


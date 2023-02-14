import React from 'react'
import { HomeBannerElement } from '@/components/Banner'
import { HomeFeaturesElement, ServicesType } from '@/components/features'
import { HomeOurTeamElement, HomeOurTeamElementProps } from '@/components/ourTeam'
import { ConsultationElement } from "@/components/consultation"
import {HomeBannerElementProps} from '@/components/Banner'
import { ConsultationElementProps } from '@/components/consultation/type'

type HomeProps = {
  HOME_BANNER:HomeBannerElementProps,
  HOME_FEATURES:{
    introduce:Record<'title'|"subtitle"|"desc"|"slug" , string>[]
    features__services: {
      title:string
      subtitle:string
      services:ServicesType[]
    }
  }
  HOME_CONSULTATION:ConsultationElementProps
  HOME_OURTEAM:HomeOurTeamElementProps

}

export const HomeElement = function(props:HomeProps) {

  return (
    <>
      <section className="demos">
        <HomeBannerElement {...props.HOME_BANNER} />
      </section>
      <section className="features">
        <HomeFeaturesElement 
          featureDatas={props.HOME_FEATURES.introduce} 
          featureServiesDatas={props.HOME_FEATURES.features__services} />
      </section> 
      <section className="ourteams">
        <HomeOurTeamElement {...props.HOME_OURTEAM} />
      </section>
      <section className="processes">
        <ConsultationElement  {...props.HOME_CONSULTATION} />
      </section> 
    </>
  )
}


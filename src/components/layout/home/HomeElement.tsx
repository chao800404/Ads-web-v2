import React from 'react'
import { HomeBannerElement } from '@/components/Banner'
import { HOME_BANNER ,  HOME_FEATURES , HOME_OURTEAN , HOME_CONSULTATION } from './data'
import { HomeFeaturesElement } from '@/components/features'
import { HomeOurTeamElement } from '@/components/ourTeam'
import { ConsultationElement } from "@/components/consultation"

export const HomeElement = () => {
  return (
    <>
      <section className="demos">
        <HomeBannerElement {...HOME_BANNER} />
      </section>
      <section className="features">
        <HomeFeaturesElement 
          featureDatas={HOME_FEATURES.introduce} 
          featureServiesDatas={HOME_FEATURES.features__services} />
      </section> 
      <section className="ourteams">
        <HomeOurTeamElement {...HOME_OURTEAN} />
      </section>
      <section className="processes">
        <ConsultationElement  {...HOME_CONSULTATION} />
      </section> 
    </>
  )
}


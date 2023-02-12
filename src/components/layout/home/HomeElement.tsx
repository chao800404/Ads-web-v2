import React from 'react'
import { HomeBannerElement } from '@/components/Banner'
import {HOME_BANNER ,  HOME_FEATURES} from './data'
import { HomeFeaturesElement } from '@/components/features'

export const HomeElement = () => {
  return (
    <>
      <section className="demos">
        <HomeBannerElement {...HOME_BANNER} />
      </section>
      <section className="features">
        <HomeFeaturesElement featureDatas={HOME_FEATURES.introduce} />
      </section> 
    </>
  )
}


import React from 'react'
import { CreativesBannerElement } from '@/components/Banner'
import { CreativesFeaturesElement } from '@/components/features'
import { CREATIVES_FEATURES } from './data'

export const CreativesElement = function() {
  return (
    <>
      <section className="demos">
        <CreativesBannerElement />
      </section>
      <section className="features">
        <CreativesFeaturesElement data={CREATIVES_FEATURES } />
      </section> 
    </>
  )
}
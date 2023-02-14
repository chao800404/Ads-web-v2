import React from 'react'
import { WebDesignBanner } from '@/components/Banner'
import { WEBDESIGN_BANNER ,WEBDESIGN_FEATURES } from '@/components/layout/webDesign/data'
import { WebDesignFeaturesElement } from '@/components/features'

export const WebDesignElement = function() {
  return (
    <>
      <section className="demos">
        <WebDesignBanner {...WEBDESIGN_BANNER} />
      </section>
      <section className="features">
        <WebDesignFeaturesElement {...WEBDESIGN_FEATURES} />
      </section> 
    </>
  )
}
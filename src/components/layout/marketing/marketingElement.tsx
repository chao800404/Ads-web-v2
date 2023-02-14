import { MarketingBannerElement } from '@/components/Banner';
import { MARKETING_BANNER ,MARKETING_FEATURES } from './data'
import React from 'react';
import { MarketingFeaturesElement } from '@/components/features';


export const MarketingElement = function() {
  return (
    <>
      <section className="demos">
        <MarketingBannerElement data={MARKETING_BANNER}/>
      </section>
      <section className="features">
        <MarketingFeaturesElement data={MARKETING_FEATURES} />
      </section> 
    </>
  )
}
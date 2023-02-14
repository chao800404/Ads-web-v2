import React from 'react'
import { WebDesignBanner } from '@/components/Banner'
import { WEBDESIGN_BANNER } from '@/components/layout/webDesign/data'

export const WebDesignElement = function() {
  return (
    <>
      <section className="demos">
        <WebDesignBanner {...WEBDESIGN_BANNER} />
      </section>
      <section className="features">
  
      </section> 
    </>
  )
}
import React from 'react'

import Head from 'next/head'
import { Layout} from '@/components/layout'
import { MarketingElement } from '@/components/layout/marketing'
import { MarketingPopup } from '@/components/popup'




export default function Index() {
  const [showTip , setShowTip] = React.useState(true)

  const hiddenTip =()=> setShowTip(false)

  React.useEffect(()=>{
    window.document.body.classList.add("adsBg")
    return ()=> window.document.body.classList.remove("adsBg")
  },[])


  return (
    <>
      <Head>
        <title>Marketing</title>
        <link rel="shortcut icon" type="image/png" href="img/logo/logo.png"/>
        <meta name="facebook-domain-verification" content="44e9zdqv76izebsdy3kufwf71ywpf8" />
        <meta name="description" content="INTEGRATED MARKETING 提供品牌端、網路方面全面性的評估以及策略 (Ads WOMKOL Social media 聯盟行銷等)!!" />
        <link rel="preload"  href="/img/webads/demo/webAdsDemo.webp" as="image" crossOrigin="anonymous" />  
      </Head>
      {
        showTip && <MarketingPopup handleShowPopup={hiddenTip} />
      }
      <Layout >
        <MarketingElement />
      </Layout>
    </>
  )
}

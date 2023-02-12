import Head from 'next/head'
import { Layout } from '@/components/layout'
import { HomeElement } from '@/components/layout/home/HomeElement'



// const inter = Inter({
//   variable: '--inter-font',
// })



export default function Home() {
  return (
    <>
      <Head>
        <title>ShunJhin co.ltd</title>
        <link rel="shortcut icon" type="image/png" href="img/logo/logo.png"/>
        <meta name="facebook-domain-verification" content="44e9zdqv76izebsdy3kufwf71ywpf8" />
        <meta name="description" content="INTEGRATED MARKETING 提供品牌端、網路方面全面性的評估以及策略 (Ads WOMKOL Social media 聯盟行銷等)!!" />
        
      </Head>

      <Layout >
        <HomeElement />
      </Layout>


    </>
  )
}

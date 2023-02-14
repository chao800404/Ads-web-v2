import { Html, Head, Main, NextScript  } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="zh">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        <link rel="preload" crossOrigin="anonymous"  href="https://assets5.lottiefiles.com/packages/lf20_nmwkxjsf.json" as="json" type="application/json"/>  
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

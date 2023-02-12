import React from 'react'
import { FooterElement } from '../footer'
import { HeaderElement } from '../header/HeaderElement'
import Script from 'next/script'

type LayoutProps = {
  children:JSX.Element | JSX.Element[]
}

export const Layout:React.FC<LayoutProps> = function({children}){

  return (
    
    <main>
      <HeaderElement />
    
      <main className="container">
        {children}
      </main>
      <footer className="footers">
        <FooterElement />
      </footer>
    </main>
  )
}
import React from 'react'
import { NavbarElement } from '../navbar'
import Link from 'next/link'
import { LogoNameSVG , LogoSVG } from '../Logo'
import { Route } from '@/config/route'


export const HeaderElement = () =>{
  
  return (
    <header className="header">
      <Link href={Route.home.path} >
        <a className="header__logo">
          <LogoSVG />
          <div className="header__logo-text">
            <LogoNameSVG />
          </div>
        </a>
      </Link>
      <div className="header__Marquee">
        <p className="header__Marquee__text">
          INTEGRATED MARKETING 提供品牌端、網路方面全面性的評估以及策略 (Ads WOMKOL Social media 聯盟行銷等)!!
        </p>
      </div>
      <NavbarElement />
    </header>
  )
}
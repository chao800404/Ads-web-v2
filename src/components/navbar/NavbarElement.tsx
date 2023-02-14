

import React, { useRef } from 'react'
import Link from 'next/link';
import { Route } from '@/config/route';

export const NavbarElement = () => {
  const [toggle , setToggle] = React.useState(false)
  const router = Object.values(Route).filter(route => route.path !== Route.home.path)
  const handleOnClick = ()=> setToggle(toggle =>!toggle)
  const ref = useRef(null);

  return (
    <nav className={`header__menu ${toggle && "header__menu--active" }`} onClick={handleOnClick}>
      <div className="header__hanburger" style={{transform:`rotateY(${toggle ? '180deg':"0deg"})`}}>
        <lottie-player
          class="header__hanburger_content" 
          src="https://assets2.lottiefiles.com/packages/lf20_7bsfwvnh.json"
          background="transparent"  
          hover  
          speed="1"
          ref={ref}
        />
      </div>
      <ul className="header__menu__list">
        {
          router.map((route , i) =>(
            <li className={`header__menu__list-${i}`} key={`${route.name}-${i}`}>
              <Link href={route.path}>
                <a>
                  {route.name.replace('_'," ")}
                </a>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}


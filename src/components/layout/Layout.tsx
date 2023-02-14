import React, { useContext } from 'react'
import { FooterElement } from '../footer'
import { HeaderElement } from '../header/HeaderElement'
import { ScrollbarElement } from '../scrollbar'
import { RobotElement } from '../robot'
import ContextProvider ,{Context} from '@/store/useContext'
import { Player } from '@lottiefiles/react-lottie-player';
import { Spinner } from '../spninner/spinner'



type LayoutProps = {
  children:JSX.Element | JSX.Element[]
}




export const Layout:React.FC<LayoutProps> = function({children}){

  




  
  React.useEffect(() => {
    import("@lottiefiles/lottie-player")
    // const timeout = setTimeout(() =>setOnLoad(true),800)
    // return ()=> clearTimeout(timeout)
  }, []);



  


  

  return (
    
    <ContextProvider>
      <RobotElement />
      <ScrollbarElement />
      <HeaderElement />
      <main className="container">
        {children}
      </main>
      <footer className="footers">
        <FooterElement />
      </footer>
    </ContextProvider>
  )
}
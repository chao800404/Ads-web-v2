import React, { useContext } from 'react'
import { FooterElement } from '../footer'
import { HeaderElement } from '../header/HeaderElement'
import { ScrollbarElement } from '../scrollbar'
import { RobotElement } from '../robot'
import ContextProvider ,{Context} from '@/store/useContext'
import { Player } from '@lottiefiles/react-lottie-player';



type LayoutProps = {
  children:JSX.Element | JSX.Element[]
}




export const Layout:React.FC<LayoutProps> = function({children}){
  const [importLoad , setImportLoad] = React.useState(false)
  const [onLoad , setOnLoad] = React.useState(false)




  
  React.useEffect(() => {
    import("@lottiefiles/lottie-player")
    const timeout = setTimeout(() =>setOnLoad(true),800)
    return ()=> clearTimeout(timeout)
  }, [importLoad]);




  if(!onLoad){
    return (
      <div style={{
        width:"100vw", 
        height:"100vh", 
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center",
        backgroundColor:"#212936"
          }}>
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_nmwkxjsf.json"
          style={{ height: '300px', width: '300px' }}
        />
      </div>
    )
  }

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
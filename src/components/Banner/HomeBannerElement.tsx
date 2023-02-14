import React , {useContext} from 'react'
import { Context } from '@/store/useContext'
import { Player } from '@lottiefiles/react-lottie-player';
import { Spinner } from '../spninner/spinner';



export type HomeBannerElementProps = Record<"title" | 'subtitle' | 'desc' | 'svgUrl' , string>


export const HomeBannerElement:React.FC<HomeBannerElementProps> = ({title , subtitle, desc , svgUrl}) => {

  const {handleScrollForm} = useContext(Context);
  const [onLoad , setOnLoad] = React.useState(false)

  

  return (
    <div className="demo">
      {
        !onLoad && <Spinner />
      }
      <div className="demo__text">
        <h1 className="heading-1">
          <span>{title}</span>
          <span>{subtitle}</span>
        </h1>
        <p>{desc}</p>
      </div>
      
      <button className="btn demo__btn get__start" onClick={()=>handleScrollForm()}>
        <a href="#">
          Get Started
        </a>
      </button>

      <div className="demo__svg demo__an">
        <Player
          onEvent={(e)=> {
            console.log(e === 'load')
            e === 'load' && setOnLoad(true)
          }}
          style={{width:'100%' , height:"100%"}}
          src={svgUrl}  
          background="transparent"  
          speed={1}  
          autoplay 
          loop/>
      </div>
    </div> 
  )
}


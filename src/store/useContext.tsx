import React, { useState } from "react";
import { useRouter } from "next/router";
import { useScrollBy } from "react-use-window-scroll";

type ContentTyep = {
  handleScrollForm:(cb?:()=>void)=>void
  setOnLoad:()=>void
  onLoad:boolean
}

export const Context = React.createContext<ContentTyep>({
  handleScrollForm:(cb)=>{},
  setOnLoad:()=>{},
  onLoad:false
});


export const ContextProvider = (props:{children:JSX.Element[]}) => {
  const router = useRouter()
  const scrollBy = useScrollBy();
  const [onLoad , setOnLoad] = React.useState(false)
  
  const handleScrollForm = React.useCallback<ContentTyep['handleScrollForm']>(()=>{
    router.push('/')
    router.events.on('routeChangeComplete', ()=>{
      scrollBy({ top: 10000, left: 0, behavior: "smooth" })
    })
  },[router, scrollBy])

  const handleOnLoad = ()=>{
    setOnLoad(true)
  }

  return (
    <Context.Provider
      value={{
        handleScrollForm,
        onLoad,
        setOnLoad:handleOnLoad
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
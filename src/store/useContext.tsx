import React, { useState } from "react";
import { useRouter } from "next/router";
import { useScrollBy } from "react-use-window-scroll";

type ContentTyep = {
  handleScrollForm:(cb?:()=>void)=>void
}

export const Context = React.createContext<ContentTyep>({
  handleScrollForm:(cb)=>{}
});


export const ContextProvider = (props:{children:JSX.Element[]}) => {
  const router = useRouter()
  const scrollBy = useScrollBy();
  
  const handleScrollForm = React.useCallback<ContentTyep['handleScrollForm']>(()=>{
    router.push('/')
    router.events.on('routeChangeComplete', ()=>{
      scrollBy({ top: 10000, left: 0, behavior: "smooth" })
    })
  },[router, scrollBy])

  return (
    <Context.Provider
      value={{
        handleScrollForm
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
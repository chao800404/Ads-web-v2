import { Url } from "url"

type RouteTypes<T extends string> = Record<T, {name:string , path:string}>
type RouteName = "home"|"webDesign" |"creatives"|"aboutus"

export const Route:RouteTypes<RouteName> ={
  home:{
    name:"home",
    path:'/'
  },
  webDesign:{
    name:"Web_Design",
    path:"/WebDesign"
  },
  creatives:{
    name:"Creatives",
    path:"/Creatives"
  },
  aboutus:{
    name:"Aboutus",
    path:"/Aboutus"
  }
}
export type ConsultContentType = Record<"title" | "desc" | "img" , string>
export type ConsultFirm= Record<"name" | "img" , string>

export type ConsultationElementProps = {
  title:string
  progress:string[][]
  consult_title:string
  consult_content: ConsultContentType[]
  consult_firms: ConsultFirm[]
} 

export type CousultationBtnProps = {
  progress:string[]
  index:number
}
type DataTyep<T> = {
  [key in string]: T | string
}
type ResData<T> = {
  status:"success" | "fail",
  data:T
  message?:string
}

export const mutation = async function<T extends DataTyep<T>>(data:T):Promise<ResData<T>> {
  const resData = await fetch('/api/submitUserData' , {
    method:"POST",
    body:JSON.stringify(data)
  })
  return resData.json()
}
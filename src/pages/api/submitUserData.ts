import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer  from 'nodemailer'
import { z , ZodError  } from "zod";

const reg_0 = /^(0\d+)-(\d{8})(?:(?:#)(\d+))?$/ 
const reg_1 = /^(\d{7,8})(-(\d{3,}))?$/
const reg_2 = /^09\d{2}-?\d{3}-?\d{3}$/



const ParseValue = z.object({
  userName:z.string({required_error:"請輸入正確名稱"}),
  userEmail: z.string().email({message:"請輸入正確的信箱格式"}),
  userPhone:z.union([
    z.string().regex(reg_0 ,{message:"請輸入正確的電話格式"}), 
    z.string().regex(reg_1 ,{message:"請輸入正確的電話格式"}),
    z.string().regex(reg_2 ,{message:"請輸入正確的電話格式"})
  ])
})


const errRes = (res:NextApiResponse , message?:string)=>(
  res.status(403).json({
    status:"fail",
    message
  })
)


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userData = JSON.parse(req.body)
  try {
    if(req.method === "POST") {
      const parseUser = ParseValue.parse(userData)


      let transporter =  nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "Chuck@shunjhin.com", 
          pass: "rtoktoxxkofijrbd",
        },
      });

      const mail = {
        from: "Chuck@shunjhin.com 😊", 
        to: "Chuck@shunjhin.com", 
        subject: "有新客戶到!!", 
        text: "有新客戶到!!", 
        html: `
          <b>名稱:${parseUser.userName} 🫡 </b><br>
          <b>電話:${parseUser.userPhone} ☎️ </b><br>
          <b>信箱:${parseUser.userEmail} 📧 </b><br>
        `, 
      }

      let info = transporter.sendMail(mail , (err , info)=>{
        if(err){
          console.log(err)
        }else {
          console.log(info)
        }
      });
  

      res.status(200).json({
        status:"success",
        data:parseUser
      })
    }
  }

  catch(err){
    const errMessage = (err as ZodError).issues.map(err => err.message)[0]
    console.log(err)
    errRes(res , errMessage)
  }
}

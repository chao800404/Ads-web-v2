import React , {useRef} from 'react'
import { FaUserAlt }  from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { parseEmail , parsePhoneNumb } from '../../utils/regex'
import { mutation } from '../../utils/fetch'


export const Form = () => {
  const userRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const [status , setStatus] = React.useState(true)
  const [onSubmit , setOnSubmit] = React.useState(false)
  const [message , setMessage] =  React.useState('')

  const handleSubmit = async(e:React.FormEvent)=> {
    e.preventDefault();
    if(userRef 
        && userRef.current 
        && phoneRef 
        && phoneRef.current 
        && emailRef 
        && emailRef.current){
      const userName = userRef.current.value
      const userPhone = phoneRef.current.value
      const userEmail = emailRef.current.value
      const resData = await mutation({userName, userPhone, userEmail})
      if(resData){
        if(resData.status === "success"){
          setOnSubmit(true)
        }else {
          setStatus(false)
          setMessage(resData.message || "請輸入正確資訊!!")
        }
      }
    }
  }

  const handleOnChange = ()=>setStatus(true)

  return (
    <form id="send_form" className="process__form" onSubmit={handleSubmit}>
      {
        !onSubmit ? 
        <>
          <div className="process__form__img astronaut-animate">
            <div className={`process__form__prompt ${ !status &&"process__form__prompt--active"}`}>
                <p>{message}</p>
            </div>
            <lottie-player 
              className="header__hanburger_content"
              reload={onSubmit} 
              src="https://assets10.lottiefiles.com/packages/lf20_eyjzjrrz.json" 
              background="transparent"  
              loop 
              autoplay  
              speed="1" />
          </div>
          <h3 className="heading-3 process__form__contact">Contact us</h3>
          <div className="process__form-name process__form__input">  
            <input
              onChange={handleOnChange}
              ref={userRef} id="username" name="username" type="text" placeholder="Your Name" />
            <label htmlFor="username">
              <FaUserAlt /> 
            </label>
          </div>

          <div className="process__form-phoneNumber process__form__input">
            <input
              onChange={handleOnChange} 
              ref={phoneRef} id="phoneNumb" name="phoneNumb" type="numb" placeholder="Your phone number" />
            <label htmlFor="phoneNumb">
              <BsFillTelephoneFill />
            </label>
          </div>

          <div className="process__form-email process__form__input">     
            <input
              onChange={handleOnChange}
              ref={emailRef} id="userEmail" name="userEmail" type="text" placeholder="Your E-mail" />
            <label htmlFor="userEmail">
              <MdEmail  />
            </label>
          </div>
          <button type="submit" className="btn-3 process__form-btn">
            Submit
          </button> 
        </>
        :
        <div className="form__success">
          <lottie-player 
            className="header__hanburger_content"
            reload={onSubmit} 
            src="https://assets7.lottiefiles.com/packages/lf20_xumyfzqp.json" 
            background="transparent"  
            loop 
            autoplay  
            speed="1"
            />
        </div>
      }
    </form>
  )
}

import React from 'react'

export const FooterElement = () => {
  return (
    <div className="footer">
      <p className="footer__copyright">
        SHUNJHIN &copy; 2021 Copyright. All Rights Reserved. 
      </p>
      <ul className="footer__information">    
        <li className="footer__location">
          <a href="https://www.google.com.tw/maps/place/100%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E6%AD%A3%E5%8D%80%E5%BF%A0%E5%AD%9D%E6%9D%B1%E8%B7%AF%E4%BA%8C%E6%AE%B5100%E8%99%9F%E4%B9%8B5/@25.0428103,121.528336,17z/data=!3m1!4b1!4m5!3m4!1s0x3442a97b70649d43:0xd9c3babb2d812809!8m2!3d25.0428055!4d121.5305247?hl=zh-TW">舜至有限公司 &nbsp; 10053 &nbsp; 台北市內湖區新明路108號8樓</a>
        </li>
        <li className="footer__phone-number">
          <a href="tel:+886-0988638829">0988-638-829</a>
        </li>
        <li className="footer__email">
          <a href="mailto:chuck@shunjhin.com"> chuck@shunjhin.com</a>
        </li>
      </ul>
    </div>
  )
}


import React from 'react'
import "../Css/index.css"
import HrLogo from "../Designs,Logos & Images/HrLogoPurple.png"
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate()
  const routeToSayHello =()=>{
    navigate("/sayhello");
  }
  const openUrl = (url) => {
    const newWindow = window.open(url,'_blank')
    if (newWindow) newWindow.opener = null
  }
  return (
    <>
      <div className='Main-Nav'>
        <a className='HRlogo' href=""><img  src={HrLogo} alt="" /></a>
        <div className='Nav-links'>
          <a href='' onClick={routeToSayHello}>Say Hello</a>
        </div>
        <div className='Nav-links2'>
          <a href='https://www.fiverr.com/hasnainraza2004/develop-a-core-and-modern-website-for-you?context_referrer=search_gigs&source=toggle_filters&ref_ctx_id=82987fb23fc344d42f3fe4a19466cf2e&pckg_id=1&pos=10&context_type=auto&funnel=82987fb23fc344d42f3fe4a19466cf2e&ref=is_seller_online%3Atrue&seller_online=true&imp_id=18810caa-06cc-4d91-a02f-957799a5db2f' onClick={(e) => openUrl(e)}><b>Hire Now</b></a>
        </div>
      </div>
    </>
  )
}

export default Navbar

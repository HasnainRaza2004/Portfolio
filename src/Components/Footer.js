import React from 'react'
import HrLogo from "../Designs,Logos & Images/HrLogoWhite.png";
import { ImTwitter } from 'react-icons/im';
import { FaFacebook } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai';
import { TbHandRock } from 'react-icons/tb';
import { RiInstagramFill } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const openUrl = (url) => {
    const newWindow = window.open(url,'_blank')
    if (newWindow) newWindow.opener = null
  }
  const navigate = useNavigate()
    const StartAProject = () =>{
      navigate("/start-a-project");
    }
  return (
    <>
      <div className='FooterLabelMain'>
      <div className='FooterLabel'>
<h2 className='StartAproject'>Start a project</h2>
<span className='FooterLabelText'>Interested in working together? We <br />should queue up a time to chat. I'll buy cofffe.</span>
<div className='Letsdothisbtn'>
    <a href='' onClick={StartAProject } ><span className='HandLogo'><TbHandRock/></span>Let's do this</a>
        </div>
        </div>
    </div>
    <div className='FooterMain'>
        <span className='FooterInfo'>
            <a href=""><img width={80} src={HrLogo} alt="" /></a>
<h3 className='FooterTextLine'>Living, learning, and leveling up <br /> one day at a time.</h3>
<div className='IconsDiv'>
<a href="https://twitter.com/hasnainraza2004" onClick={(e) => openUrl(e)}><span className='HandlesDiv'><ImTwitter/></span></a>
<a href="https://www.facebook.com/profile.php?id=100065753796497" onClick={(e) => openUrl(e)}><span className='HandlesDiv'><FaFacebook/></span></a>
<a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHDWVRQcGNXjbhlzprSzWBpmVbJQhMDSZmXSpKLtZtsFhBCphVWCVQbFxHhbvtZvBRblq" onClick={(e) => openUrl(e)}><span className='HandlesDiv'><IoMdMail/></span></a>
<a href="https://www.linkedin.com/in/hasnain-raza-4a2677232/" onClick={(e) => openUrl(e)}><span className='HandlesDiv'><AiFillLinkedin/></span></a>
<a href="https://www.instagram.com/hasnainraza2665/" onClick={(e) => openUrl(e)}><span className='HandlesDiv'><RiInstagramFill/></span></a>
</div>
<h3>Handcrafted by me © twentytwentythree </h3>
</span>
    </div>
        </>
  )
}

export default Footer
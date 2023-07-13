import React from 'react'
import HrLogo from "../Designs,Logos & Images/HrLogoPurple.png"
import { GiCancel } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";


const PagesNavbar = () => {

    const navigate = useNavigate()
    const backToHome = () =>{
      navigate("/");
    }
  return (
    <>
       <div className='Main-Nav'>
        <a className='HRlogo' href="#"><img  src={HrLogo} alt="" /></a>
        <span className='BackIcon'><a href="" onClick={backToHome}><GiCancel/></a></span>
        </div>
    </>
  )
}

export default PagesNavbar
import React from 'react'
import Profile from "../Designs,Logos & Images/Profile.jpeg"
import Tempelate from "../Designs,Logos & Images/Tempelate.svg"

const TopIntro = () => {
  return (
    <>
      <div className='TopIntroMain'>
        <h1 className='Profession'>Mern Stack Developer, Graphic Designer</h1>
        <p>I design and code beautifully simple things, and I love what I do.</p>
        <div className='TopImages'>
        <span className='Profile-Picture'><img src={Profile} alt="" /></span>
        <span className='TopIntroTempelate'><img src={Tempelate} alt="" /></span>
        </div>
      </div>
    </>
  )
}

export default TopIntro

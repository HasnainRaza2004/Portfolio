import React from 'react'
import "../Css/index.css"


const Navbar = () => {
  return (
    <>
      <div className='Main-Nav'>
        <a className='HRlogo' href="#"><img  src="https://mattfarley.ca/img/mf-avatar.svg" alt="" /></a>
        <div className='Nav-links'><a href='#'>Say Hello</a>
        </div>
      </div>
    </>
  )
}

export default Navbar

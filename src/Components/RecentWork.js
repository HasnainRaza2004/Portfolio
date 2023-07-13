import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

const RecentWork = () => {
        const openUrl = (url) => {
                const newWindow = window.open(url,'_blank')
                if (newWindow) newWindow.opener = null
              }
        return (
                <div className='RecnetWorkMain'>
                        <h2 className='RecnetWorktext'>My Recent Work</h2>
                        <p className='EmailMe'>Here are a few past design projects I've worked on. Want to see more?<a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRQMTzXLPKfshlMrKWMKXFKssfkwgcKNMDSXTTzqHgRsWCmsHZmPMLcNsmxqMMGBQMjMpl" onClick={(e)=>openUrl(e)}>Email me</a>.</p>
                        <div className='RecentWork'>
                                <div className='WorkMain1'>
                                        <div className='SodaShopbtn'><a href='https://www.sodastop.online/'>Visit Website<span className='ForwardArrow'><IoIosArrowForward /></span>      </a>
                                        </div>
                                </div>
                                <div className='WorkMain2'></div>
                                <div className='WorkMain3'></div>
                        </div>
                        <div className='GitBtn'><a href='https://github.com/HasnainRaza2004' onClick={(e) => openUrl(e)}><span className='githubLogo'><AiFillGithub /></span>See more or Github</a>
                        </div>
                </div>
        )
}

export default RecentWork
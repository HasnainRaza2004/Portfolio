import React from 'react'
import PagesNavbar from '../Components/PagesNavbar'
import Avatar from '../Designs,Logos & Images/Avatar.svg'
// import { useNavigate } from "react-router-dom";
import {useState}  from 'react';

const SayHello = () => {
  const [userPokeObj,setUserPokeObj] = useState({})
  const [userPokeObjEmpty,setUserPokeObjEmpty] = useState()
  // const navigate = useNavigate()
    const Submitandback = (e) =>{
      // navigate("/");
      e.preventDefault();
      console.log(userPokeObj);
      setUserPokeObjEmpty("")
    }
  return (
    <>
    <PagesNavbar/>
      <div className='sayHelloMain'>
        <img src={Avatar} width="auto" height={100} alt="" />
        <h1 className='thankingLine'>Thanks for taking the time to reach <br />out. How can I help you today?</h1>
        <div className='inputsDiv'>
          <span className='Name'>
            <label className='NameLabel' htmlFor="Name">Name</label>
            <input type="text" value={userPokeObjEmpty} onChange={(e)=>setUserPokeObj({...userPokeObj,Name:e.target.value})} />
          </span>
          <span className='Email'>
            <label className='EmailLabel' htmlFor="Name">Email</label>
            <input type="text" value={userPokeObjEmpty} onChange={(e)=>setUserPokeObj({...userPokeObj,Email:e.target.value})}/>
          </span>
          <span className='Message'>
            <label className='MessageLabel' htmlFor="Name">Message</label>
            <textarea name="" value={userPokeObjEmpty} maxLength="1500" id="" cols="30" rows="10" onChange={(e)=>setUserPokeObj({...userPokeObj,Message:e.target.value})}></textarea>
          </span>
          <div className='SayHelloSubmitBtn'><a href='' onClick={Submitandback}>Submit</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SayHello
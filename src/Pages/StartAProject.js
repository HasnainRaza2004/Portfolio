import React from 'react'
import PagesNavbar from '../Components/PagesNavbar'
import Avatar from '../Designs,Logos & Images/Avatar.svg'
import { useNavigate } from "react-router-dom";


const StartAProject = () => {
    const navigate = useNavigate()
    const Submitandback = () => {
        navigate("/");
    }
    return (
        <>
            <PagesNavbar />
            <div className='startAProjectMain'>
                <img src={Avatar} width="auto" height={100} alt="" />
                <h1 className='ConveniencingLine'>I'm excited to learn about your <br /> project. Ready to get started?</h1>
                <div className='inputsDiv'>
                    <span className='Name'>
                        <label className='NameLabel' htmlFor="Name">Name</label>
                        <input type="text" />
                    </span>
                    <span className='Email'>
                        <label className='EmailLabel' htmlFor="Name">Email</label>
                        <input type="text" />
                    </span>


                    <div>
                        <span className='ProjectType'>
                            <label className='ProjectTypeLabel' htmlFor="ProjectType">Type of Project</label>
                            <select style={{height:64}} className="ProjectType" name="ProjectType">
                                <option value="0" selected hidden disabled></option>
                                <option value="Website-Development">Website Development</option>
                                <option value="Web-Application">Web Application</option>
                                <option value="Mobile-Application">Mobile Application</option>
                                <option value="Backend-Services">Backend Services</option>
                                <option value="Designing">Designing</option>
                            </select>
                        </span>
                        <span className='Budget'>
                            <label className='BudgetLabel' htmlFor="Name">Budget</label>
                            <input type="number" />
                        </span>
                    </div>


                    <span className='AdditionalInformation'>
                        <label className='AdditionalInformationLabel' htmlFor="Name">Additional Details</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </span>
                    <div className='SayHelloSubmitBtn'><a href='' onClick={Submitandback}>Submit</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartAProject
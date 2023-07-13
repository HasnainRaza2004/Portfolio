import React from 'react'
import Footer from '../Components/Footer'
import MainIntro from '../Components/MainIntro'
import Navbar from '../Components/Navbar'
import RecentWork from '../Components/RecentWork'
import TopIntro from '../Components/TopIntro'

const Dashboard = () => {
  return (
<>
  <Navbar/>
  <TopIntro/>
  <MainIntro/>
  <RecentWork/>
  <Footer/>
</>
  )
}

export default Dashboard
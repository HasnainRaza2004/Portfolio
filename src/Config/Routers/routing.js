import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import SayHello from '../../Pages/SayHello';
import Dashboard from '../../Pages/Dashboard';
import StartAProject from '../../Pages/StartAProject';
  
const Routing = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/*' element={<Dashboard/>}></Route>
            <Route path='/sayhello' element={<SayHello/>}></Route>
            <Route path='/start-a-project' element={<StartAProject/>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default Routing
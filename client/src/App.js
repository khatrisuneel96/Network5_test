import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom"

import NavBar from './components/Navbar';
import Messages from './components/Messages/messageFunctionality';
import Feed from './components/Feed/Feed';
import Dashboard from './components/Dashboard/dashboardFunctionality';
import Email from './components/Email/emailFunctionality';
import Rsvp from './components/Rsvp/rsvpVisuals';
import Analytics from './components/Analytics/analyticsFunctionality';
import Profile from './components/Profile/profileFunctionality';
import Loginbar from './components/Login/Loginbar';

function App() {
  return (
    <div>
      <Loginbar></Loginbar>
      <NavBar></NavBar>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/feed' element={<Feed/>}></Route>
          <Route path='/messages' element={<Messages/>}></Route>
          <Route path='/email' element={<Email/>}></Route>
          <Route path='/rsvp' element={<Rsvp/>}></Route>
          <Route path='/analytics' element={<Analytics/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

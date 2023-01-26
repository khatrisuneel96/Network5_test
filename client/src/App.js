import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom"

import NavBar from './components/Navbar';
import Messages from './components//Messages/Main';
import Feed from './components/Feed/Feed';
import Dashboard from './components/Dashboard';
import Email from './components/Email';
import Rsvp from './components/Rsvp';
import Analytics from './components/Analytics';
import Profile from './components/Profile';
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

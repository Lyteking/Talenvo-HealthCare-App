import React, { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerifyEmail from './components/VerifyEmail';
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import Login from './components/LogIn'
import ForgottenPass from './components/ForgottenPass';
import SignUpVerification from './components/SentVerification';
import ForgottenPassVerification from './components/ForgottenPassVerification';
import ResetPassword from './components/ResetPassword';
import GeneralPage from './components/GeneralPage';
import ResetPassVerification from './components/ResetPasswordVerification';

export default function App(){
    const [home, setHome] = useState(true)
    const [explore, setExplore] = useState(false)
    const [booking, setBooking] = useState(false)
    const [saved, setSaved ]= useState(false)
    const [profile, setProfile] = useState(false)

    function handleHome(){
        setExplore(false)
        setHome(true)
        
    }
    function handleExplore(){
        setExplore(true)
        setHome(false)
    }

    return(
      <>
        
        <Router>
      <Routes>
        <Route path='/home' element={<GeneralPage/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/forgotten' element={<ForgottenPass/>}/>
        <Route path='/log-in' element={<Login/>}/>
        <Route path='/forgotten-pass' element={<ForgottenPass/>}/>
        <Route path='/forgotten-password-verification' element={<ForgottenPassVerification/>}/>
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path='/reset-password-verification' element={<ResetPassVerification/>}/>
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path='/sign-up-verification' element={<SignUpVerification/>}/>
        <Route path='/home-page' element ={<HomePage/>}/>
      </Routes>
    </Router></>
    )
}
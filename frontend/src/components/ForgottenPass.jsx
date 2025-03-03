import React, { useState } from "react";
import axios from 'axios'
import '../index.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function ForgottenPass(){
    const [email, setEmail] = useState('')
      const navigate = useNavigate();
    

    const handleForgotten = async(e) => {
        e.preventDefault()
        try{
            const response = await axios.post('https://talenvo-healthcare-app-production-7d8e.up.railway.app/api/v1/auth/forgot-password', {email}, {
                headers: {
                    Authorization: `Bearer YOUR_ACCESS_TOKEN`,  // Ensure you have a valid token
                    "Content-Type": "application/json"
                }
            })
                navigate("/forgotten-password-verification", {
                    state: { success: true, message: response.data.message },
                });
        }catch(error){
            console.error(error.response.message)
        }
    }
    return(
        <div className="md:p-0 md:grid md:grid-cols-3 min-h-screen">
            <div className="hidden md:block md:col-span-1 relative">
    <section  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-big text-white bg-blue-500/50 px-4 py-2 rounded-r-3xl items-center flex justify-center w-full h-full"><h1 className="text-center font-bold absolute w-full text-bigger">
      ?
    </h1></section>
    
  </div>
  <div className="flex-col mt-17 flex items-center justify-center md:col-span-2 md:p-8 md:w-full md:h-full md:flex md:items-center md:justify-center md:flex-col pb-0 md:mb:0 text-center">
  <h1 className="text-big mb-2 text-blue-900 font-bold">Forgotten Password</h1>
  <p className="mb-8 max-w-md">Enter your registered email address, and we’ll send you a link to reset your password.</p>
        <form className="flex flex-col items-center w-full max-w-md" onSubmit={handleForgotten}>
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <button className="w-full bg-blue-500 text-white py-2 rounded mb-2">Reset Password</button>
      </form>
      <p>Remembered Password? <Link to={'/log-in'} className="text-blue-500 cursor-pointer">Log In</Link></p>
      </div>
      </div>
 )
}
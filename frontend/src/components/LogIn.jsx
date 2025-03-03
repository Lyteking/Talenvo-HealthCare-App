import React, { useState } from "react";
import '../index.css'
import axios from "axios"
import image from '../assets/loginimg.png'
import {Link} from 'react-router-dom'

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = async(e) => {
        e.preventDefault()
        try{
            const response = await axios.post('https://talenvo-healthcare-app-production-7d8e.up.railway.app/api/v1/auth/login', {email, password}, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(response)
            console.log('Logged in')

            if(response.data.accessToken){
                localStorage.setItem('accessToken', response.data.accessToken)
            } else{
                alert('no token reseived')
            }
        }catch (error){
            console.error(error.response.data)
        }
    }

    return(
        <div className="md:p-0 md:grid md:grid-cols-3 min-h-screen">
            <div className="hidden md:block md:col-span-1 relative">
    <img className="rounded-r-3xl object-cover w-full h-full" src={image} alt="image"/>
    <section  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-big text-white bg-blue-500/50 px-4 py-2 rounded-r-3xl items-center flex justify-center w-full h-full"><h1 className="font-bold absolute w-full">
      Welcome To Talenvo
    </h1></section>
    
  </div>
  <div className="flex-col mt-17 flex items-center justify-center md:col-span-2 md:p-8 md:w-full md:h-full md:flex md:items-center md:justify-center md:flex-col pb-0 md:mb:0">
    <h1 className="text-big mb-12 -ml-39 text-blue-900 font-bold">Welcome Back</h1>
        <form className="flex flex-col items-center w-full max-w-md" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="relative w-full">
        <input type={showPassword ? 'text' : "password"} placeholder="Password" className="border border-black rounded w-full p-2 my-3 h-14" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <section onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"/>
            </svg>
          )}
        </section>
      </div>
      <p className="mb-6">Forgotten Password? <Link className="text-blue-500 cursor-pointer" to={'/forgotten-pass'}>Reset here</Link></p>
        <button className="w-full bg-blue-500 text-white py-2 rounded mb-2">Log In</button>
      </form>
      <p>Don't have an account? <Link className="text-blue-500 cursor-pointer" to='/sign-up'>Sign Up Here</Link></p>
      </div>
      </div>
)
}

import React, {useState} from "react";
import axios from "axios";
import '../index.css'
import { useNavigate, useParams, Link } from "react-router-dom";


export default function ResetPassword(){
    const { token } = useParams(); // Get token from the URL
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();
        const [showPassword, setShowPassword] = useState(false)
        const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError({});
        setSuccessMessage("");

        if (password.length < 6) {
            setError((prev) => ({ ...prev, password: "Password must be at least 6 characters long" }));
            return;
        }

        if (password !== confirmPassword) {
            setError((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }));
            return;
        }

        try {
            const response = await axios.post(
                `https://talenvo-healthcare-app-production-7d8e.up.railway.app/api/v1/auth/reset-password/${token}`,
                { password }
            );

            setSuccessMessage(response.data.message);
            setTimeout(() => {
                navigate("/reset-password-verification", {
                    state: { success: true, message: response.data.message },
                  });
            }, 2000);
        } catch (error) {
            setError((prev) => ({ ...prev, general: error.response?.data?.message || "Something went wrong" }));
        }
    };
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
        <form className="flex flex-col items-center w-full max-w-md" onSubmit={handleResetPassword}>
        
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
      <div className="relative w-full">
        <input type={showConfirmPassword ? 'text' : "password"} placeholder="Confirm Password" className="border border-black rounded w-full p-2 my-3 h-14" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
        <section onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
          {showConfirmPassword ? (
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
      {error.password && <p className="text-red-500 text-sm mb-4 mt-1">{error.password}</p>}      
        {error.confirmPassword && <p className="text-red-500 text-sm mb-4 mt-1">{error.confirmPassword}</p>}
      {error.general && <p className="text-red-500 text-sm mb-4">{error.general}</p>}
        
        <button className="w-full bg-blue-500 text-white py-2 rounded mb-2">Reset Password</button>
      </form>
      <p>Remembered Password? <Link to={'/log-in'} className="text-blue-500 cursor-pointer">Log In</Link></p>
      </div>
      </div>
    )
}
import React ,{useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../index.css';
import image from '../assets/signinimg.png';

export default function ResetPassVerification() {
    const location = useLocation();
    const { success, message } = location.state || {}; 
    const navigate = useNavigate();


    useEffect(() => {
        if (success) {
            setTimeout(() => {
                navigate("/log-in");
            }, 5000);
        }
    }, [success, navigate]);

    return (
        <> 
            <div className="md:p-0 md:grid md:grid-cols-3 min-h-screen">
            <div className="hidden md:block md:col-span-1 relative">
    <section  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-big text-white bg-blue-500/50 px-4 py-2 rounded-r-3xl items-center flex justify-center w-full h-full"><h1 className="text-center font-bold absolute w-full text-bigger">
      ?
    </h1></section>
    
  </div>
                <div className="flex-col mt-17 flex items-center justify-center md:col-span-2 md:p-8 md:w-full md:h-full md:flex md:items-center md:justify-center md:flex-col pb-0 md:mb:0">
                    {success ? (
                        <div className="text-center">
                            <h1 className="text-green-600 text-big font-bold">Reset Successful</h1>
                            <p>{message}</p>
                            <p>This page will be redirected to the Log In page shortly</p>                            
                        </div>
                    ) : (
                        <div className="text-center">
                            <h1 className="text-red-600 text-xl font-bold">Registration Failed</h1>
                            <p>{message || "An error occurred."}</p>
                            <p>Click <Link to="/sign-up" className="text-blue-500">here</Link> to try again.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

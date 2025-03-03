import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const VerifyEmail = () => {
  const { token } = useParams(); 
  const [message, setMessage] = useState("Verifying...");
  const navigate = useNavigate();


  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(
          `https://talenvo-healthcare-app-production-7d8e.up.railway.app/api/v1/auth/verify-email/${token}` 
        );
        setMessage(response.data.message);
      } catch (error) {
        setMessage(error.response?.data?.message || "Email verification failed. Try again.");
      }
    };

    verifyEmail();
  }, [token]);

  useEffect(() => {
    const timer = setTimeout(() => {
        navigate('/log-in');
    }, 5000);

    return () => clearTimeout(timer); 
}, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-2">Email Verification</h2>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default VerifyEmail;

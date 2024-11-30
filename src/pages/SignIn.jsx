


import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/login.gif";
import { useFirebaseAuth } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser } = useFirebaseAuth();
  const navigate = useNavigate();





  const handleSignIn = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    try {
        const res = await signInUser(email, password);
        console.log(res);
        

        if(res?.uid){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
          });

          //update last login time
          const lastSignInTime = res?.metadata?.lastSignInTime;
          console.log(lastSignInTime)

          const loginInfo = {
            email, lastSignInTime
          }

          fetch(`http://localhost:5000/users`, {
            
            method:"PATCH",
            headers:{
              'content-type':'application/json',
            },
            body: JSON.stringify(loginInfo),



          }).then(res=> res.json()).
          then(data => console.log(data));

          


          navigate('/');
        }
    } catch (error) {
        console.error('Error:', error);
        Swal.fire({
            icon: 'error',
            title: 'Something Error try again',
            text: error.message,
        });
    }


    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font_2">
      <div className="lg:flex lg:w-2/3 w-full bg-white rounded-lg shadow-lg overflow-hidden flex items-center" >
        {/* Left Side: Form */}

        <div className="lg:w-1/2 bg-cover bg-center hidden lg:block">
          <img src={loginImage} alt="" />
        </div>

        {/* Right Side: info*/}
        <div className="lg:w-1/2 p-8">
          <h2 className="text-3xl font-semibold mb-6  font_1">SignIn</h2>

          <form className="space-y-4" onSubmit={handleSignIn}>
            
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#331A15]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#331A15]"
              required
            />
            <Link
              to={"/signUp"}
              className="text-sm text-[#331A15] hover:underline"
            >
             Haven't Register ? Click here to Register
            </Link>
            <button
              type="submit"
              className="w-full py-2 bg-[#331A15] text-white font-semibold rounded-md hover:bg-[#331A15] focus:outline-none focus:ring-2 focus:ring-[#331A15]"
            >
              SignIn
            </button>
          </form>

          <div className="mt-4 text-center">
            <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#331A15]">
              <FcGoogle className="mr-2 text-xl" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

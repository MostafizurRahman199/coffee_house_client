import React from "react";
import {
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoPhonePortrait, // Correct import for phone icon
    IoMail,
  } from 'react-icons/io5';
  import { FaPhoneAlt } from "react-icons/fa";

  import logoImage from "../assets/more/logo1.png"

const ContactUs = () => {
  return (
  <div className="w-10/12 mx-auto">
      
      <div className="flex flex-col lg:flex-row justify-between items-center bg-[url('/path-to-bg.jpg')] bg-cover bg-center ">
       
       
             <div className="lg:w-1/2 text-center lg:text-left space-y-4 mb-6 lg:mb-0">

             <div className="flex justify-start ">
           <img src={logoImage} alt="Espresso Emporium Logo" className="w-12 h-12" />
       </div>
               <h2 className="text-3xl font-semibold text-[#331A15]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Espresso Emporium</h2>
               <p className="text-gray-700">
                 Always ready to be your friend. Come & Contact with us to share your
                 memorable moments, to share with your best companion.
               </p>
       
               <div className="flex justify-center lg:justify-start gap-4">
                 <a href="#" className="text-gray-700 hover:text-[#331A15]">
                   <IoLogoFacebook className="text-[#331A15] text-2xl" />
                 </a>
                 <a href="#" className="text-gray-700 hover:text-[#331A15]">
                   <IoLogoTwitter className="text-[#331A15] text-2xl" />
                 </a>
                 <a href="#" className="text-gray-700 hover:text-[#331A15]">
                   <IoLogoInstagram className="text-[#331A15] text-2xl" />
                 </a>
                 <a href="#" className="text-gray-700 hover:text-[#331A15]">
                   <IoLogoLinkedin className="text-[#331A15] text-2xl" />
                 </a>
               </div>
       
               <div className="space-y-2">
                   <h1 className="text-3xl font-semibold text-[#331A15]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Get In Touch</h1>
                 <p className="text-[#331A15]">
                   <FaPhoneAlt className="inline-block"/>
                   +88 0423 333 333
                 </p>
                 <p className="text-[#331A15]">
                   <IoMail className="inline-block" /> info@gmail.com
                 </p>
               </div>
             </div>
       
             {/* Right Section */}
             <div className="lg:w-1/2 bg-white  p-6">
               <h2 className="text-3xl font-semibold text-[#331A15] text-center mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                 Connect with Us
               </h2>
               <form className="space-y-4">
                 <input
                   type="text"
                   placeholder="Name"
                   className="w-full p-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-[#331A15]"
                 />
                 <input
                   type="email"
                   placeholder="Email"
                   className="w-full p-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-[#331A15]"
                 />
                 <textarea
                   placeholder="Message"
                   rows="4"
                   className="w-full p-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-[#331A15]"
                 ></textarea>
                 <button
                   type="submit"
                   className="w-fit p-4 border-2 border-[#331A15] text-[#331A15] hover:text-white py-3 rounded-2xl hover:bg-[#52352c] transition"
                 >
                   Send Message
                 </button>
               </form>
             </div>
           </div>
  </div>
  );
};

export default ContactUs;

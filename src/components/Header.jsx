import React from 'react'
import logoImage from "../assets/more/logo1.png"

const Header = () => {
  return (
    <div className='flex items-center justify-center bg-[#331A15] py-2'>
        <img src={logoImage} className='w-16 h-16' alt="" />
        <h1 className='text-4xl font-bold text-white'>Espresso Emporium</h1>
    </div>
  )
}

export default Header
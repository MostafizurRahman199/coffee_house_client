import React from 'react'
import icon1 from "../assets/icons/1.png"
import icon2 from "../assets/icons/2.png"
import icon3 from "../assets/icons/3.png"
import icon4 from "../assets/icons/4.png"

const UnderBannerItem = ({ icon, title, description }) => (
    <div className='flex flex-col items-center'>
        <img src={icon} alt="" />
        <h3 className="text-[#331A15] font-bold text-2xl">{title}</h3>
        <p className="text-[#1B1A1A] text-center font_2">{description}</p>
    </div>
);

const UnderBanner = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto p-4'>
         <UnderBannerItem icon={icon1} title="Rich Coffee Blends" description="Experience the perfect blend of flavors that awaken your senses." />
         <UnderBannerItem icon={icon2} title="Sustainable Sourcing" description="Our beans are sourced from sustainable farms, ensuring quality and care for the environment." />
         <UnderBannerItem icon={icon3} title="Expert Roasting" description="Our expert roasters bring out the best in every bean, delivering a rich and aromatic experience." />
         <UnderBannerItem icon={icon4} title="Freshly Brewed" description="Enjoy the taste of freshly brewed coffee, made just for you with love and precision." />
    </div>
  )
}

export default UnderBanner
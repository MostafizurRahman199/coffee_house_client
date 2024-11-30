import { Button, Carousel, Typography } from '@material-tailwind/react'

import React from 'react'
import bannerImage1 from "../assets/banner1.jpeg";
import bannerImage3 from "../assets/banner3.jpg";
import bannerImage5 from "../assets/banner5.jpg";

const BannerItem = ({ image, title, description }) => (
  <div className="relative h-full w-full font_2">
    <img src={image} alt={title} className="h-full w-full object-cover" />
    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
      <div className="w-3/4 text-center md:w-2/4">
        <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
          {title}
        </Typography>
        <Typography variant="lead" color="white" className="mb-12 opacity-80">
          {description}
        </Typography>
        <div className="flex justify-center gap-2">
          <Button size="lg" color="white">Explore</Button>
          <Button size="lg" color="white" variant="text">Gallery</Button>
        </div>
      </div>
    </div>
  </div>
);

const Banner = () => {
  const bannerData = [
    { image: bannerImage5, title: "Awaken Your Senses", description: "Experience the rich aroma and flavor of freshly brewed coffee, crafted from the finest beans sourced from around the world, designed to invigorate your mornings." },
    { image: bannerImage1, title: "Coffee Bliss", description: "Indulge in the perfect cup that brings comfort and joy, with every sip transporting you to a cozy café where the warmth of coffee embraces you." },
    { image: bannerImage3, title: "Brewed to Perfection", description: "Savor the taste of our expertly crafted coffee blends, each cup a harmonious balance of flavor and aroma, meticulously brewed to elevate your coffee experience." },
  ];

  return (
    <div className='h-[600px] font_2'>
      <Carousel>
        {bannerData.map((item, index) => (
          <BannerItem key={index} image={item.image} title={item.title} description={item.description} />
        ))}
      </Carousel>
    </div>
  );
}

export default Banner
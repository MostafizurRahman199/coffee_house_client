import React from 'react'
import Banner from '../components/Banner'
import UnderBanner from '../components/UnderBanner'
import PopularProducts from '../components/PopularProducts'
import { Gallery } from '../components/Gallery'
import ContactUs from '../components/ContactUs'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const loadedCoffees = useLoaderData();
  return (
   <>
   <Banner/>
    <UnderBanner></UnderBanner>
     <PopularProducts />
     <Gallery></Gallery>
     <ContactUs></ContactUs>
   </>
  )
}

export default Home
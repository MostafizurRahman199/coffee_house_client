import React from 'react'
import Banner from '../components/Banner'
import UnderBanner from '../components/UnderBanner'
import PopularProducts from '../components/PopularProducts'
import { Gallery } from '../components/Gallery'
import ContactUs from '../components/ContactUs'

const Home = () => {
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
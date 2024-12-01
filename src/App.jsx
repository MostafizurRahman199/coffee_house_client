import { Outlet, useLoaderData } from 'react-router-dom';

import './App.css';
import PopularProducts from './components/PopularProducts';
import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import UnderBanner from './components/UnderBanner';
import { Gallery } from './components/Gallery';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import { Navbar } from './components/Navbar';
import { useFirebaseAuth } from './Providers/AuthProvider';
import Footer from './components/Footer';

function App() {
 
const {loading} = useFirebaseAuth()



  return (
  <div className=''>
    <Navbar></Navbar>
   {
    loading ? <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner loading-lg"></span></div>:  <Outlet></Outlet>
   }

   <Footer></Footer>
  </div>
  );
}

export default App;

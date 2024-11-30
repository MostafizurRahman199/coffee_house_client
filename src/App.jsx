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

function App() {
 


  return (
  <div className=''>
    <Navbar></Navbar>
    <Outlet></Outlet>
  </div>
  );
}

export default App;

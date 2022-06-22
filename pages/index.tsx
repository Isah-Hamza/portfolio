import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main   from '../components/Main'

import AOS from 'aos';


const Index = () => {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  

  return (
      <div className='flex flex-col h-screen relative'>
        {/* <img src={'/assets/images/laptop.webp'} alt = '' className='-z-10 w-screen top-0 left-0 h-screen absolute' /> */}
        <Header />
        <Main />
        <Footer />
      </div>
  )
}

export default Index
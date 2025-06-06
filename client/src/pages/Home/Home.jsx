import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'
import AboutHome from '../../components/ABoutHome/AboutHome'
import OurHome from '../../components/OurHome/OurHome'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SpecialOffer />
      <AboutHome />
      <OurHome />
    </>
  )
}

export default Home
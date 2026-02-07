import React from 'react'
import Nav from './components/Nav'
import Home1 from './components/Home1'
import Staysafe from './components/Staysafe'
import Slider from './components/Slider'
import WhyUseGoSaif from './components/WhyCard'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      {/* <Nav/> */}
      <Home1/>
      <Staysafe/>
      <Slider/>
      <WhyUseGoSaif/>
      {/* Landing Page */}
    </div>
  )
}

export default page

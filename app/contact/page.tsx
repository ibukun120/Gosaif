import React from 'react'
import Home from '../components/form/Home'
import Or from '../components/Or'
import FaqSection from '../components/FaqSection'

const page = () => {
  return (
    <div>
      <Home/>
      <Or/>
      <div className='pt-32 bg-white'>
        <FaqSection/>
      </div>
    </div>
  )
}

export default page

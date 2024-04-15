import React from 'react'
import Hero from './section/Hero'
import TransBookCompare from './section/TransBookCompare'
import Testimonials from './section/Testimonials'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col relative gap-8 z-0'>
      <Hero />
      <TransBookCompare />
      <Testimonials />
    </div>
  )
}

export default Home

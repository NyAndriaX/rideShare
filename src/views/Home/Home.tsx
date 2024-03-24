import React from 'react'
import Hero from './section/Hero'

const Home: React.FC = () => {
  return (
    <div className='flex relative border-black flex-col items-center justify-center gap-4 z-0'>
      <Hero />
    </div>
  )
}

export default Home

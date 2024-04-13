import React from 'react'
import TransBookCompare from './section/TransBookCompare'
// import Subscribe from './section/Subscribe'
import Hero from './section/Hero'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col relative gap-8 z-0'>
      <Hero />
      <TransBookCompare />
      {/* <Subscribe /> */}
    </div>
  )
}

export default Home

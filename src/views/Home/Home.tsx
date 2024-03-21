import React from 'react'

// Background Div 175px in web and  360px in mobile
// Background SVG Display block in web and Display none in mobile

const Home: React.FC = () => {
  return (
    <main>
      <div className='bg-primary' style={{ height: '200px' }} />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='SearchBarContainer_wave__zs6k2'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#208cfb'
          d='m0 160 60 21.3c60 21.7 180 63.7 300 64C480 245 600 203 720 176s240-37 360-37.3c120 .3 240 10.3 300 16l60 5.3V0H0Z'
        ></path>
      </svg>
    </main>
  )
}

export default Home

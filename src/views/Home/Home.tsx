import React from 'react'

// Background Div 200px in web and  360px in mobile
// Background SVG Display block in web and Display none in mobile

const Home: React.FC = () => {
  const isMobile = window.innerWidth < 768

  return (
    <main className='relative' style={{ height: isMobile ? '460px' : '525px' }}>
      <div className='absolute left-0 z-0'>
        <div
          className='w-screen bg-primary'
          style={{ height: isMobile ? '460px' : '300px' }}
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='SearchBarContainer_wave__zs6k2 w-screen hidden md:flex '
          viewBox='0 0 1440 320'
        >
          <path
            fill='#208cfb'
            d='m0 160 60 21.3c60 21.7 180 63.7 300 64C480 245 600 203 720 176s240-37 360-37.3c120 .3 240 10.3 300 16l60 5.3V0H0Z'
          ></path>
        </svg>
      </div>
      <div className='flex flex-row relative top-32 justify-center items-center z-10 gap-4'>
        <div className='w-1/2 p-6'>
          <div className='bg-white p-8 rounded-md shadow-lg'></div>
        </div>
        <div className='w-1/2'>
          <p className='flex flex-col gap-2 text-2xl text-white text-center font-semibold'>
            <span>E-Covoiturage.</span>
            <span>Toutes les informations sur le Covoiturage libre</span>
          </p>
          <div className='flex flex-row gap-4'>
            <p>Note de l'application</p>
            <p>Nombre de telechargement</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home

import React from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import FormSearch from '@/components/Search/FormSearch'
// import SearchCard from '@/components/common/Search/SearchCard'

const Hero: React.FC = () => {
  const isMobile = window.innerWidth < 768

  return (
    <main className='w-full' style={{ height: isMobile ? '460px' : '600px' }}>
      <div className='w-full absolute left-0 z-0'>
        <div
          className='w-full bg-primary'
          style={{ height: isMobile ? '460px' : '300px', width: '100%' }}
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='SearchBarContainer_wave__zs6k2 hidden md:flex w-full'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#208cfb'
            d='m0 160 60 21.3c60 21.7 180 63.7 300 64C480 245 600 203 720 176s240-37 360-37.3c120 .3 240 10.3 300 16l60 5.3V0H0Z'
          ></path>
        </svg>
      </div>
      <div className='flex flex-row relative top-32 justify-center z-10 gap-4'>
        <div className='w-1/2 p-6'>
          <FormSearch displayTitle={false} />
        </div>
        <div className='flex flex-col gap-4 w-1/2 mt-4'>
          <h1 className='text-6xl md:text-7xl font-bold mb-5 text-white text-center'>
            RideShare
          </h1>
          <h3 className='text-xl mb-5 font-light text-center text-white'>
            All information on free carpooling
          </h3>
          <div className='flex flex-row items-center justify-center py-4 gap-24'>
            <div className='flex flex-row justify-center items-center gap-4'>
              <div className='flex flex-col '>
                <div className='flex flex-row'>
                  <StarIcon
                    className='h-4 w-5 text-yellow'
                    aria-hidden='true'
                  />
                  <StarIcon
                    className='h-4 w-5 text-yellow'
                    aria-hidden='true'
                  />
                  <StarIcon
                    className='h-4 w-5 text-darkWhite'
                    aria-hidden='true'
                  />
                  <StarIcon
                    className='h-4 w-5 text-darkWhite'
                    aria-hidden='true'
                  />
                  <StarIcon
                    className='h-4 w-5 text-darkWhite'
                    aria-hidden='true'
                  />
                </div>
                <p className='text-sm text-white font-semibold'>Play Store</p>
              </div>
              <div>
                <div className='flex flex-row'>
                  <StarIcon
                    className='h-4 w-5 text-yellow'
                    aria-hidden='true'
                  />
                  <StarIcon
                    className='h-4 w-5 text-darkWhite'
                    aria-hidden='true'
                  />
                  <StarIcon
                    className='h-4 w-5 text-darkWhite'
                    aria-hidden='true'
                  />
                  <StarIcon
                    className='h-4 w-5 text-darkWhite'
                    aria-hidden='true'
                  />
                  <StarIcon
                    className='h-4 w-5 text-darkWhite'
                    aria-hidden='true'
                  />
                </div>
                <p className='text-sm text-white font-semibold'>App store</p>
              </div>
            </div>
            <div className='border border-l border-white h-10' />
            <p className='text-sm text-white font-semibold'>+0 Visitor</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero

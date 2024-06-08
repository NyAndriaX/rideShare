import React from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import FormSearch from '@/components/Search/FormSearch'
// import SearchCard from '@/components/common/Search/SearchCard'

interface StarsPlayStorsProps {
  id: number
  color: string
}

const starsPlayStors: StarsPlayStorsProps[] = [
  { id: 1, color: 'text-yellow' },
  { id: 2, color: 'text-yellow' },
  { id: 3, color: 'text-gray-400' },
  { id: 4, color: 'text-gray-400' },
  { id: 5, color: 'text-gray-400' },
]

interface AppStoreProps {
  id: number
  color: string
}

const appStore: AppStoreProps[] = [
  { id: 1, color: 'text-yellow' },
  { id: 2, color: 'text-yellow' },
  { id: 3, color: 'text-yellow' },
  { id: 4, color: 'text-yellow' },
  { id: 5, color: 'text-gray-400' },
]

const Hero: React.FC = () => {
  const isMobile = window.innerWidth < 768

  return (
    <main
      className='w-full mb-10'
      style={{ height: isMobile ? '82vh' : '600px' }}
    >
      <div className='w-full absolute left-0 z-0'>
        <div
          className='w-full bg-primary'
          style={{ height: isMobile ? '60vh' : '300px', width: '100%' }}
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
      <div className='flex flex-col-reverse md:flex-row relative top-32 justify-center z-10 gap-4'>
        <div className='w-full md:w-1/2 p-6'>
          <FormSearch displayTitle={false} />
        </div>
        <div className='flex flex-col gap-4 w-full px-4 md:px-0 md:w-1/2 md:mt-4'>
          <h1 className='text-6xl md:text-7xl font-bold text-white text-center'>
            RideShare
          </h1>
          <h3 className='text-xl mb-5 font-light text-center text-white'>
            All information on free carpooling
          </h3>
          <div className='hidden md:flex flex-col md:flex-row gap-6 items-center justify-between md:justify-around py-4 w-full'>
            <div className='flex flex-row justify-between md:justify-center items-center gap-4'>
              <div className='flex flex-col gap-1'>
                <div className='flex flex-row gap-1'>
                  {starsPlayStors.map((star) => (
                    <StarIcon
                      key={star.id}
                      className={`h-4 w-5 ${star.color}`}
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='text-sm text-white font-semibold'>Play Store</p>
              </div>
              <div className='flex flex-col gap-1'>
                <div className='flex flex-row gap-1'>
                  {appStore.map((star) => (
                    <StarIcon
                      key={star.id}
                      className={`h-4 w-5 ${star.color}`}
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='text-sm text-white font-semibold'>App store</p>
              </div>
            </div>
            <div className='border-b md:border-b-0 md:border-l border-gray-300 mx-4 h-0 md:h-8 w-2/5 md:w-0' />
            <p className='flex flex-col gap-1 text-sm text-white font-semibold'>
              <span>+0</span> <span>Visitor</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero

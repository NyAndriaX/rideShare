import React from 'react'
import Passenger from '@/components/Home/search-form/Passenger'
import ReturnDate from '@/components/Home/search-form/ReturnDate'
import DateOfDeparture from '@/components/Home/search-form/DateOfDeparture'
import Button from '@/components/common/Button/Button'
import CityOfArrival from '@/components/Home/search-form/CityOfArrival'
import DepartureCity from '@/components/Home/search-form/DepartureCity'
import { StarIcon } from '@heroicons/react/20/solid'

const Hero: React.FC = () => {
  const isMobile = window.innerWidth < 768

  return (
    <main
      className='relative w-full'
      style={{ height: isMobile ? '460px' : '525px' }}
    >
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
      <div className='flex flex-row relative top-32 justify-center z-10 gap-4'>
        <div className='w-1/2 p-6'>
          <div className='flex flex-col items-center justify-center gap-4 bg-white p-8 rounded-md shadow-lg'>
            <DepartureCity />
            <CityOfArrival />
            <div className='flex flex-row gap-4 w-full'>
              <DateOfDeparture />
              <ReturnDate />
            </div>
            <Passenger />
            <Button
              type='button'
              text='Search'
              className='bg-yellow text-black font-semibold'
            />
          </div>
        </div>
        <div className='flex flex-col gap-4 w-1/2 mt-4'>
          <p className='flex flex-col gap-2 text-2xl text-white text-center font-semibold'>
            <span>RideShare</span>
            <span>Toutes les informations sur le Covoiturage libre</span>
          </p>
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

import React from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const DriverInformation: React.FC = () => {
  return (
    <div className='flex w-full flex-col gap-8'>
      {/* Profil */}
      <div className='flex flex-col items-start gap-2 py-4 border-b border-gray-200'>
        <div className='flex flex-row gap-4 items-start'>
          <img
            src={new URL('/image/person.svg', import.meta.url).href}
            alt='personal reserved'
            className='w-16 h-16 border border-gray-200 rounded-full'
          />
          <div className='flex flex-col '>
            <span className='text-lg text-blue-900 font-semibold'>
              Zina Nmj
            </span>
            <span className='text-base text-gray-500'>20 ans</span>
          </div>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <StarIcon className='w-5 h-5 text-yellow' />
          <div className='flex flex-row gap-1 items-center text-sm'>
            <span className='text-blue-500'>1.5/5</span>
            <span className='text-gray-500'>-</span>
            <span className='text-gray-500'>12 avis</span>
          </div>
        </div>
      </div>
      {/* Profil checked */}
      <div className='flex flex-col gap-2 items-start py-4 border-b border-gray-200'>
        <div className='flex flex-row items-start gap-2 text-base text-blue-500'>
          <CheckCircleIcon className='h-5 w-5 text-blue-500' />
          <span>Phone checked</span>
        </div>
        <div className='flex flex-row items-start gap-2 text-base text-blue-500'>
          <CheckCircleIcon className='h-5 w-5 text-blue-500' />
          <span>Profil Checked</span>
        </div>
      </div>
      {/* Information car */}
      <div className='flex flex-row gap-1 items-center text-blue-900'>
        <span className='font-semibold'>Car</span>
        <span>:</span>
        <span>2 chevaux</span>
      </div>
    </div>
  )
}
export default DriverInformation

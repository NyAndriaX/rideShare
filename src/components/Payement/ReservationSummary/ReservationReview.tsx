import React from 'react'
import {
  QuestionMarkCircleIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline'

const ReservationReview: React.FC = () => {
  return (
    <div className='flex flex-col gap-2 items-start'>
      <div className='text-lg text-gray-500'>Trip Summary</div>
      <div className='flex w-full flex-col gap-4 p-4 bg-white border border-gray-200 rounded-md'>
        {/* Calcul */}
        <div className='flex flex-col gap-4 pb-4 border-b border-gray-200'>
          {/* Calcule sum */}
          <div className='flex flex-row justify-between text-base'>
            <div className='text-blue-900'>
              <span className='font-semibold'>2 places</span> x 25.000 Ar
            </div>
            <div className='text-gray-500'>50.000 Ar</div>
          </div>
          {/* Booking free */}
          <div className='flex flex-row justify-between items-center '>
            <div className='flex flex-row items-center gap-1 text-gray-500'>
              <div className='text-base'>Booking fee</div>
              <QuestionMarkCircleIcon className='w-5 h-5 text-gray-400' />
            </div>
            <div className='text-gray-500 text-base'>5.000 Ar</div>
          </div>
        </div>
        {/* Print Sum */}
        <div className='flex flex-row justify-between items-center  text-base text-gray-500'>
          <div className='flex flex-row gap-1 items-center'>
            <ChevronUpIcon className='h-5 w-5 text-gray-400' />
            <div>Total</div>
          </div>
          <div>55.000 Ar</div>
        </div>
      </div>
    </div>
  )
}
export default ReservationReview

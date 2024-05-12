import React from 'react'
import { Link } from 'react-router-dom'
import TripSummary from '@/components/Payement/TripSummary'
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid'
import ReservationSummary from '@/components/Payement/ReservationSummary'
import ReservationHighlights from '../../components/Payement/ReservationHighlights'

const Payement: React.FC = () => {
  return (
    <div className='flex flex-col justify-between items-start gap-4 pt-28 pb-28 px-4'>
      <div className='flex flex-row items-center gap-2'>
        <ArrowLongLeftIcon className='h-5 w-5 text-gray-400' />
        <Link to='/travel' className='text-base text-blue-500'>
          Back to ad
        </Link>
      </div>
      <div className='flex flex-row items-start justify-between gap-4 w-full'>
        <div className='w-2/3 flex flex-col gap-4'>
          <ReservationHighlights />
          <ReservationSummary />
        </div>
        <div className='w-1/3 rounded-md border border-gray-200'>
          <div className='p-4 bg-gray-50 text-lg text-gray-500'>Summary</div>
          <div className='p-4'>
            <TripSummary />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Payement

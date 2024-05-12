import React from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircleIcon,
  ArrowUturnDownIcon,
  CreditCardIcon,
} from '@heroicons/react/20/solid'

const ReservationHighlights: React.FC = () => {
  return (
    <div className='flex flex-row gap-4 items-center p-4 justify-between rounded-md bg-gray-50'>
      <div className='flex-1 flex gap-4 flex-row items-start border-r border-gray-200'>
        <CheckCircleIcon className='h-14 w-14 text-green-500' />
        <div className='flex flex-col text-base'>
          <span className='text-blue-900 font-semibold'>
            My place is guaranteed
          </span>
          <span className='text-gray-500'>en réglant en ligne</span>
        </div>
      </div>
      <div className='flex-1 flex flex-row gap-4 items-start  border-r border-gray-200'>
        <ArrowUturnDownIcon className='h-14 w-14 text-green-500' />
        <div className='flex flex-col text-base'>
          <span className='text-blue-900 font-semibold'>
            I can cancel if{' '}
            <span className='text-gray-500 font-normal'>
              I have an impediment
            </span>
          </span>
          <Link to='/' className='text-blue-500'>
            See conditions
          </Link>
        </div>
      </div>
      <div className='flex-1 flex gap-4 flex-row items-start border-r border-gray-200'>
        <CreditCardIcon className='h-14 w-14 text-green-500' />
        <div className='text-base'>
          <span className='text-blue-900 font-semibold'>
            You will receive a full refund if{' '}
            <span className='text-gray-500 font-normal '>
              the driver cancels
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
export default ReservationHighlights

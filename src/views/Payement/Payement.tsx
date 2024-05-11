import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid'

const Payement: React.FC = () => {
  return (
    <div className='flex flex-col justify-between items-start gap-4 pt-28 pb-28 px-4'>
      <div className='flex flex-row items-center gap-2'>
        <ArrowLongLeftIcon className='h-5 w-5 text-gray-400' />
        <Link to='/travel' className='text-base text-blue-500'>
          Back to ad
        </Link>
      </div>
      <div className='fle flex-row items-start justify-between gap-4 w-full'></div>
    </div>
  )
}
export default Payement

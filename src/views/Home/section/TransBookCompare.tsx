import React from 'react'
import Line from '@/components/common/Line/Line'

const TransBookCompare: React.FC = () => {
  return (
    <div className='w-full px-4 mx-auto'>
      <div className='flex flex-col gap-4 text-center max-w-xl mx-auto'>
        <h1 className=' text-6xl text-blue-900'>
          Find the best <br /> and <br /> book there, now
        </h1>
        <p className='text-lg text-gray-500'>
          The problem with ticket prices is that they change all the time. but
          by comparing, you are winners at all times
        </p>
        <Line />
      </div>
      <div className='-mx-3 md:flex items-start'>
        <div className='px-3 md:w-1/3'>{/* CardTravelPost */}</div>
        <div className='px-3 md:w-1/3'>{/* CardTravelPost */}</div>
        <div className='px-3 md:w-1/3'>{/* CardTravelPost */}</div>
      </div>
    </div>
  )
}

export default TransBookCompare

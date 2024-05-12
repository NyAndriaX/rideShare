import React from 'react'
import DetailsTravel from '@/components/Travel/DetailsTravel'
import DriverInformation from '@/components/DriverInformation'
import DetailsReservation from '@/components/Travel/DetailsReservation'

const Travel: React.FC = () => {
  return (
    <div className='flex justify-between items-start gap-4 pt-28 pb-28 px-4'>
      <DetailsTravel />
      <div className='flex flex-col gap-4 w-1/3'>
        <DetailsReservation />
        <div className='flex flex-col gap-4 rounded-md p-4 border border-gray-200'>
          {/* headers for reservation */}
          <div className='flex flex-row justify-between items-end border-b border-gray-200 p-4'>
            <span className='text-base text-gray-400'>Driver</span>
          </div>
          <DriverInformation />
        </div>
      </div>
    </div>
  )
}

export default Travel

import React from 'react'
import { styled } from 'styled-components'
import { formatDate } from '@/utils/formatDate'
import DriverInformation from '../DriverInformation'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'

const DoteOutlined = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 100%;
`

interface TripSummaryProps {
  trip?: any
}

const TripSummary: React.FC<TripSummaryProps> = ({ trip }) => {
  return (
    <div className='flex flex-col gap-4 items-start'>
      <div className='flex w-full border-b border-gray-200 pb-4 flex-col items-start gap-2'>
        {/* Date of departure */}
        <div className='flex w-full flex-row gap-4 items-center text-blue-900'>
          <CalendarDaysIcon className='h-5 w-5 text-blue-900' />
          <span>
            {formatDate(
              new Date(trip && trip.departureDate && trip.departureDate),
            )}{' '}
            à {trip?.departureTime}
          </span>
        </div>
        {/* Departure */}
        <div className='flex flex-row gap-4 items-center w-3/4 text-blue-500'>
          <DoteOutlined className='border-4 border-green-400' />
          <span>Reims, France</span>
        </div>
        {/* Destination */}
        <div className='flex flex-row gap-4 items-center text-blue-500'>
          <DoteOutlined className='border-4 border-red-400' />
          <span>City</span>
        </div>
      </div>
      <div className='flex flex-col items-start w-full'>
        <DriverInformation trip={trip} />
      </div>
    </div>
  )
}
export default TripSummary

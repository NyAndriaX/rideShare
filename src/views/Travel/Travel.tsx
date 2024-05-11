import React from 'react'
import DetailsTravel from '@/components/Travel/DetailsTravel'
import DetailsReservation from '@/components/Travel/DetailsReservation'

const Travel: React.FC = () => {
  return (
    <div className='flex justify-between items-start gap-4 pt-28 pb-28 px-4'>
      <DetailsTravel />
      <DetailsReservation />
    </div>
  )
}

export default Travel

import React from 'react'
import FormPayement from './ReservationSummary/FormPayement'
import ReservationReview from './ReservationSummary/ReservationReview'

const ReservationSummary: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 bg-gray-50 p-4 rounded-md'>
      <ReservationReview />
      <FormPayement />
    </div>
  )
}
export default ReservationSummary

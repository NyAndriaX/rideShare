import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GiftVoucher from '@/components/OfferSeats/GiftVoucher'
import DepartureCity from '@/components/OfferSeats/DepartureCity'
import CityOfArrival from '@/components/OfferSeats/CityOfArrival'
import MeetingPoints from '@/components/OfferSeats/MeetingPoints'
import DeclaredStopovers from '@/components/OfferSeats/DeclaredStopovers'
import TripPostingBenefits from '@/components/OfferSeats/TripPostingBenefits'

const OfferSeats: React.FC = () => {
  return (
    <div className='flex flex-col relative z-0 pt-24'>
      <div className='flex w-full justify-center items-center'>
        <Routes>
          <Route path='/' element={<TripPostingBenefits />} />
          <Route path='/gift-voucher' element={<GiftVoucher />} />
          <Route path='/departure/*' element={<DepartureCity />} />
          <Route path='/arrival/*' element={<CityOfArrival />} />
          <Route path='/meeting-points/*' element={<MeetingPoints />} />
          <Route path='/declared-stopovers/*' element={<DeclaredStopovers />} />
        </Routes>
      </div>
    </div>
  )
}

export default OfferSeats

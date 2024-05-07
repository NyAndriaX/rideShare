import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Seats from '@/components/OfferSeats/Seats'
import Confort from '@/components/OfferSeats/Confort'
import ReturnDate from '@/components/OfferSeats/ReturnDate'
import ReturnTrip from '@/components/OfferSeats/ReturnTrip'
import GiftVoucher from '@/components/OfferSeats/GiftVoucher'
import DepartureCity from '@/components/OfferSeats/DepartureCity'
import CityOfArrival from '@/components/OfferSeats/CityOfArrival'
import MeetingPoints from '@/components/OfferSeats/MeetingPoints'
import DateOfDeparture from '@/components/OfferSeats/DateOfDeparture'
import DeclaredStopovers from '@/components/OfferSeats/DeclaredStopovers'
import TripPostingBenefits from '@/components/OfferSeats/TripPostingBenefits'
import PhoneVerificationFill from '@/components/OfferSeats/PhoneVerificationFill'
import ReturnPriceRecommendation from '@/components/OfferSeats/ReturnPriceRecommendation'
import DeparturePriceRecommendation from '@/components/OfferSeats/DeparturePriceRecommendation'

const OfferSeats: React.FC = () => {
  return (
    <div className='flex flex-col relative justify-center items-center z-0 pt-28 gap-16'>
      <div className='flex w-full justify-center items-center'>
        <Routes>
          <Route path='/' element={<TripPostingBenefits />} />
          <Route path='/gift-voucher' element={<GiftVoucher />} />
          <Route path='/departure/*' element={<DepartureCity />} />
          <Route path='/arrival/*' element={<CityOfArrival />} />
          <Route path='/meeting-points/*' element={<MeetingPoints />} />
          <Route path='/declared-stopovers/*' element={<DeclaredStopovers />} />
          <Route path='/departure-date/*' element={<DateOfDeparture />} />
          <Route path='/Confort' element={<Confort />} />
          <Route path='/seats' element={<Seats />} />
          <Route path='/return-trip/*' element={<ReturnTrip />} />
          <Route
            path='/departure-price-recommendation/*'
            element={<DeparturePriceRecommendation />}
          />
          <Route path='/return-date/*' element={<ReturnDate />} />
          <Route
            path='/return-price-recommendation/*'
            element={<ReturnPriceRecommendation />}
          />
          <Route
            path='/phone-verification-fill/*'
            element={<PhoneVerificationFill />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default OfferSeats

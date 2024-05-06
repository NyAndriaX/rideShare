import React, { useState } from 'react'
import {
  useFormOfferSeatsActions,
  useFormOfferSeatsData,
} from '@/stores/use-form-offer-seats-store'
import { DayPicker } from 'react-day-picker'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/Button/Button'
import { ReturnDate as ReturnDateInterface } from '@/types/interface'

const ReturnDate: React.FC = () => {
  const navigate = useNavigate()
  const formOfferSeatsData = useFormOfferSeatsData()
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()
  const defaultDate =
    formOfferSeatsData?.departureDate?.date ??
    (navigate('/app/offer-seats/departure-date'), null)
  const defaultTime =
    formOfferSeatsData?.departureDate?.time ??
    (navigate('/app/offer-seats/departure-date'), null)
  const [returnDate, setReturnDate] = useState<ReturnDateInterface | undefined>(
    {
      date: defaultDate,
      time: defaultTime,
    },
  )

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <p className='text-4xl font-bold text-midnightBlue text-center'>
        When are you leaving again ?
      </p>
      <form className='flex flex-col gap-6' onSubmit={onSubmit}>
        <Button
          type='submit'
          text='Coninue'
          className={`rounded-md font-semibold text-midnightBlue bg-yellow`}
        />
      </form>
    </div>
  )
}

export default ReturnDate

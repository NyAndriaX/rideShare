import React, { useState } from 'react'
import {
  useFormOfferSeatsActions,
  useFormOfferSeatsData,
} from '@/stores/use-form-offer-seats-store'
import { DayPicker } from 'react-day-picker'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/Button/Button'
import { getFutureDate } from '@/utils/formatDateTime'
import { FormOfferSeatsData } from '@/types/interface'
import { ReturnDate as ReturnDateInterface } from '@/types/interface'

const ReturnDate: React.FC = () => {
  const navigate = useNavigate()
  const formOfferSeatsData = useFormOfferSeatsData()
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()
  const { date, time } = formOfferSeatsData?.departureDate || {}
  const [returnDate, setReturnDate] = useState<ReturnDateInterface | undefined>(
    {
      date: getFutureDate(date as string) ?? '',
      time: time ?? '',
    },
  )

  if (date === undefined || time === undefined) {
    navigate('/app/offer-seats/departure-date')
  }

  const disablePastDays = (day: Date) => {
    if (typeof date === 'string') {
      const parsedDate = new Date(date)
      return day <= parsedDate
    }
    return true
  }

  const handleSubmit = async () => {
    await setFormOfferSeatsData({
      returnDate,
    } as Partial<FormOfferSeatsData>)
    navigate('time')
  }

  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>When are you leaving again ?</h1>
      <div className='flex flex-col gap-6'>
        <DayPicker
          mode='single'
          captionLayout='dropdown-buttons'
          fromYear={2015}
          toYear={2025}
          selected={
            returnDate && returnDate.date
              ? new Date(returnDate.date)
              : undefined
          }
          onSelect={(date) =>
            setReturnDate((prevReturnDate) => {
              if (prevReturnDate && date) {
                const selectedDateString = date.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })
                return {
                  ...prevReturnDate,
                  date: selectedDateString,
                }
              }
              return prevReturnDate
            })
          }
          disabled={disablePastDays}
          numberOfMonths={2}
          pagedNavigation
        />
        <Button
          type='submit'
          onClick={handleSubmit}
          text='Continue'
          className={`rounded-md font-semibold text-blue-900 bg-yellow`}
        />
      </div>
    </div>
  )
}

export default ReturnDate

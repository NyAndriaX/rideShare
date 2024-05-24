import React, { useState } from 'react'
import {
  useFormTripsData,
  useFormTripsActions,
} from '@/stores/use-form-trips-store'
import { DayPicker } from 'react-day-picker'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/Button/Button'
import { getFutureDate } from '@/utils/formatDateTime'
import { FormTripsData } from '@/types/interface'

const ReturnDate: React.FC = () => {
  const navigate = useNavigate()
  const formTripsData = useFormTripsData()
  const { setFormTripsData } = useFormTripsActions()
  const departureDate = formTripsData?.departureDate
  const [returnDate, setReturnDate] = useState<Partial<FormTripsData>>({
    returnDate: getFutureDate(departureDate as string) ?? '',
  })

  if (departureDate) {
    navigate('/app/offer-seats/departure-date')
  }

  const disablePastDays = (day: Date) => {
    if (typeof departureDate === 'string') {
      const parsedDate = new Date(departureDate)
      return day <= parsedDate
    }
    return true
  }

  const handleSubmit = async () => {
    await setFormTripsData({
      returnDate: returnDate.returnDate,
    } as Partial<FormTripsData>)
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
            returnDate && returnDate.returnDate
              ? new Date(returnDate.returnDate)
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
                  returnDate: selectedDateString,
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

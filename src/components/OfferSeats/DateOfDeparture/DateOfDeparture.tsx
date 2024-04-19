import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/Button/Button'
import { DepartureDate, FormOfferSeatsData } from '@/types/interface'
import { DayPicker } from 'react-day-picker'
import {
  useFormOfferSeatsData,
  useFormOfferSeatsActions,
} from '@/stores/use-form-offer-seats-store'

const DateOfDeparture: React.FC = () => {
  const today = new Date()
  const navigate = useNavigate()
  const formOfferSeatsData = useFormOfferSeatsData()
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()
  const defaultDate =
    formOfferSeatsData?.departureDate?.date || today.toISOString().split('T')[0]
  const defaultTime =
    formOfferSeatsData?.departureDate?.time ||
    `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
  const [departureDate, setDepartureDate] = useState<DepartureDate | undefined>(
    {
      date: defaultDate,
      time: defaultTime,
    },
  )

  const disablePastDays = (day: Date) => {
    return day < today
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormOfferSeatsData({
      departureDate,
    } as Partial<FormOfferSeatsData>)
    navigate('time')
  }

  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <p className='text-4xl font-bold text-midnightBlue text-center'>
        When are you leaving ?
      </p>
      <form className='flex flex-col gap-6' onSubmit={onSubmit}>
        <DayPicker
          mode='single'
          captionLayout='dropdown-buttons'
          fromYear={2015}
          toYear={2025}
          selected={departureDate ? new Date(departureDate.date) : undefined}
          onSelect={(date) =>
            setDepartureDate((prevDepartureDate) => {
              if (prevDepartureDate && date) {
                const selectedDateString = date.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })
                return {
                  ...prevDepartureDate,
                  date: selectedDateString,
                }
              }
              return prevDepartureDate
            })
          }
          disabled={disablePastDays}
          numberOfMonths={2}
          pagedNavigation
        />
        <Button
          type='submit'
          text='Coninue'
          className={`rounded-md font-semibold text-midnightBlue bg-yellow`}
        />
      </form>
    </div>
  )
}
export default DateOfDeparture

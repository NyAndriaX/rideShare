import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/Button/Button'
import { FormTripsData } from '@/types/interface'
import { DayPicker } from 'react-day-picker'
import {
  useFormTripsData,
  useFormTripsActions,
} from '@/stores/use-form-trips-store'

const DateOfDeparture: React.FC = () => {
  const today = new Date()
  const navigate = useNavigate()
  const formTripsData = useFormTripsData()
  const { setFormTripsData } = useFormTripsActions()
  const defaultDate =
    formTripsData?.departureDate || today.toISOString().split('T')[0]
  const defaultTime =
    formTripsData?.departureTime ||
    `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
  const [departureDate, setDepartureDate] = useState<Partial<FormTripsData>>({
    departureDate: defaultDate,
    departureTime: defaultTime,
  })
  const [numberOfMonths, setNumberOfMonths] = useState(2)

  const disablePastDays = (day: Date) => {
    return day < today
  }

  useEffect(() => {
    const handleResize = () => {
      setNumberOfMonths(window.innerWidth < 765 ? 1 : 2)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSubmit = async () => {
    await setFormTripsData({
      departureDate: departureDate.departureDate,
      departureTime: departureDate.departureTime,
    } as Partial<FormTripsData>)
    navigate('time')
  }

  return (
    <div className='flex flex-col gap-8 px-4 md:px-0 w-full md:w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>When are you leaving ?</h1>
      <div className='flex flex-col gap-6'>
        <DayPicker
          mode='single'
          captionLayout='dropdown-buttons'
          fromYear={2015}
          toYear={2025}
          selected={
            departureDate
              ? new Date(departureDate.departureDate as string)
              : undefined
          }
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
                  departureDate: selectedDateString,
                }
              }
              return prevDepartureDate
            })
          }
          disabled={disablePastDays}
          numberOfMonths={numberOfMonths}
          pagedNavigation
        />
        <Button
          type='submit'
          text='Continue'
          onClick={handleSubmit}
          className={`rounded-md font-semibold text-blue-900 bg-yellow`}
        />
      </div>
    </div>
  )
}
export default DateOfDeparture

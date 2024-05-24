import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
  useFormTripsData,
  useFormTripsActions,
} from '@/stores/use-form-trips-store'
import { FormTripsData } from '@/types/interface'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'

const getCurrentTime = () => {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

const TimeOfDeparture: React.FC = () => {
  const today = new Date()
  const navigate = useNavigate()
  const formTripsData = useFormTripsData()
  const { setFormTripsData } = useFormTripsActions()
  const defaultDate =
    formTripsData?.departureDate || today.toISOString().split('T')[0]
  const defaultTime = getCurrentTime()
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<Partial<FormTripsData>>({
    mode: 'onSubmit',
    defaultValues: {
      departureDate: defaultDate,
      departureTime: defaultTime,
    },
  })

  const submit = async (data: Partial<FormTripsData>) => {
    await setFormTripsData({
      departureDate: data.departureDate,
      departureTime: data.departureTime,
    } as Partial<FormTripsData>)
    navigate('/app/offer-seats/comfort')
  }

  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>
        What time do you want to meet your passengers?
      </h1>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit((data) => submit(data))}
      >
        <Input
          {...register('departureTime', {
            required: 'Departure time is required',
          })}
          error={errors.departureTime?.message}
          ariaInvalid={isDirty}
          type='time'
          autofocus
          min='00:00'
          max='23:59'
          autoComplete='off'
        />
        <Button
          type='submit'
          text='Continue'
          disabled={!isValid}
          className={`rounded-md font-semibold text-blue-900 bg-yellow`}
        />
      </form>
    </div>
  )
}

export default TimeOfDeparture

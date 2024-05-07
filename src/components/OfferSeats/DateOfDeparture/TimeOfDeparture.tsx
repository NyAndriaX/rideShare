import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { DepartureDate } from '@/types/interface'
import { FormOfferSeatsData } from '@/types/interface'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import {
  useFormOfferSeatsData,
  useFormOfferSeatsActions,
} from '@/stores/use-form-offer-seats-store'

const getCurrentTime = () => {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

const TimeOfDeparture: React.FC = () => {
  const today = new Date()
  const navigate = useNavigate()
  const formOfferSeatsData = useFormOfferSeatsData()
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()
  const defaultDate =
    formOfferSeatsData?.departureDate?.date || today.toISOString().split('T')[0]
  const defaultTime = getCurrentTime()
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<Partial<DepartureDate>>({
    mode: 'onSubmit',
    defaultValues: {
      date: defaultDate,
      time: defaultTime,
    },
  })

  const submit = async (data: Partial<DepartureDate>) => {
    await setFormOfferSeatsData({
      departureDate: data,
    } as Partial<FormOfferSeatsData>)
    navigate('/app/offer-seats/confort')
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
          {...register('time', {
            required: 'Departure time is required',
          })}
          error={errors.time?.message}
          ariaInvalid={isDirty}
          type='time'
          autofocus
          min='00:00'
          max='23:59'
          autoComplete='off'
        />
        {isValid && (
          <Button
            type='submit'
            text='Continue'
            disabled={!isValid}
            className={`rounded-md font-semibold text-blue-900 bg-yellow`}
          />
        )}
      </form>
    </div>
  )
}

export default TimeOfDeparture

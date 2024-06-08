import React from 'react'
import {
  useFormTripsData,
  useFormTripsActions,
} from '@/stores/use-form-trips-store'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Input from '@/components/common/Input/Input'
import { FormTripsData } from '@/types/interface'
import Button from '@/components/common/Button/Button'

const ReturnTime: React.FC = () => {
  const navigate = useNavigate()
  const formTripsData = useFormTripsData()
  const { setFormTripsData } = useFormTripsActions()
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<Partial<FormTripsData>>({
    mode: 'onSubmit',
    defaultValues: {
      returnTime: formTripsData?.returnTime ?? '',
    },
  })

  const submit = async (data: Partial<FormTripsData>) => {
    await setFormTripsData({
      returnTime: data.returnTime,
    } as Partial<FormTripsData>)
    navigate('/app/offer-seats/return-price-recommendation')
  }

  return (
    <div className='flex flex-col gap-8 px-4 md:px-0 w-full md:w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>
        What time do you want to meet your passengers ?
      </h1>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit((data) => submit(data))}
      >
        <Input
          {...register('returnTime', {
            required: 'Return date time is required',
          })}
          error={errors.returnTime?.message}
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

export default ReturnTime

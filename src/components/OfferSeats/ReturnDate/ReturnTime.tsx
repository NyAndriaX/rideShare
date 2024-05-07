import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ReturnDate } from '@/types/interface'
import { useNavigate } from 'react-router-dom'
import Input from '@/components/common/Input/Input'
import { FormOfferSeatsData } from '@/types/interface'
import Button from '@/components/common/Button/Button'
import {
  useFormOfferSeatsData,
  useFormOfferSeatsActions,
} from '@/stores/use-form-offer-seats-store'

const ReturnTime: React.FC = () => {
  const navigate = useNavigate()
  const formOfferSeatsData = useFormOfferSeatsData()
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<Partial<ReturnDate>>({
    mode: 'onSubmit',
    defaultValues: {
      date: formOfferSeatsData?.returnDate?.date ?? '',
      time: formOfferSeatsData?.returnDate?.time ?? '',
    },
  })

  const submit = async (data: Partial<ReturnDate>) => {
    await setFormOfferSeatsData({
      returnDate: data,
    } as Partial<FormOfferSeatsData>)
    navigate('/app/offer-seats/return-price-recommendation')
  }

  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>
        What time do you want to meet your passengers ?
      </h1>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit((data) => submit(data))}
      >
        <Input
          {...register('time', {
            required: 'Return date time is required',
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

export default ReturnTime

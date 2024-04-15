import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import { FormOfferSeatsData } from '@/types/interface'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import {
  useFormOfferSeatsActions,
  useFormOfferSeatsData,
} from '@/stores/use-form-offer-seats-store'

const PreciseCityOfArrival: React.FC = () => {
  const formOfferSeatsData = useFormOfferSeatsData()
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<Partial<FormOfferSeatsData>>({
    mode: 'onSubmit',
    defaultValues: {
      destinationPrecise: formOfferSeatsData?.destinationPrecise || '',
    },
  })
  const navigate = useNavigate()
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()

  const submit = async (data: Partial<FormOfferSeatsData>) => {
    await setFormOfferSeatsData(data)
    navigate('/app/offer-seats/arrival')
  }
  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <p className='text-2xl font-bold text-midnightBlue text-center'>
        Where do you want to drop off your passengers ?
      </p>
      <div className='flex flex-col gap-2'>
        <button
          className='inline-flex items-center px-6 py-2 gap-4 border border-lightGrey rounded-md text-gray-400'
          style={{ width: 'fit-content' }}
        >
          <QuestionMarkCircleIcon className='h-6 w-6 text-gray-400' />
          <span>Why a precise address</span>
        </button>
        <form
          className='flex flex-col gap-6'
          onSubmit={handleSubmit((data) => submit(data))}
        >
          <Input
            {...register('destinationPrecise', {
              required: 'This field is required',
            })}
            error={errors.destinationPrecise?.message}
            ariaInvalid={isDirty}
            type='text'
            icon={<ChevronLeftIcon className='h-5 w-6 text-gray-400' />}
            placeholder='Enter the precise address'
            autofocus
            autoComplete='off'
          />
          {isValid && (
            <Button
              type='submit'
              text='Coninue'
              disabled={!isValid}
              className={`rounded-md font-semibold text-midnightBlue bg-yellow`}
            />
          )}
        </form>
      </div>
    </div>
  )
}

export default PreciseCityOfArrival

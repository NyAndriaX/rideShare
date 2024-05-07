import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from '@/components/common/Input/Input'
import { FormOfferSeatsData } from '@/types/interface'
import Button from '@/components/common/Button/Button'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import AddressExplanationModal from '../AddressExplanationModal'
import {
  useFormOfferSeatsData,
  useFormOfferSeatsActions,
} from '@/stores/use-form-offer-seats-store'

const PreciseDepartureCity: React.FC = () => {
  const formOfferSeatsData = useFormOfferSeatsData()
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<Partial<FormOfferSeatsData>>({
    mode: 'onSubmit',
    defaultValues: {
      departurePrecise: formOfferSeatsData?.departurePrecise || '',
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
      <h1 className='text-blue-900'>
        Where do you want to collect your passengers?
      </h1>
      <div className='flex flex-col gap-2'>
        <AddressExplanationModal />
        <form
          className='flex flex-col gap-6'
          onSubmit={handleSubmit((data) => submit(data))}
        >
          <Input
            {...register('departurePrecise', {
              required: 'This field is required',
            })}
            error={errors.departurePrecise?.message}
            ariaInvalid={isDirty}
            type='text'
            icon={<ChevronLeftIcon className='h-5 w-6 text-gray-400' />}
            placeholder='Enter the precise address'
            autofocus
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
    </div>
  )
}
export default PreciseDepartureCity

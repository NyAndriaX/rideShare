import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import { FormTripsData } from '@/types/interface'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import AddressExplanationModal from '../AddressExplanationModal'
import {
  useFormTripsData,
  useFormTripsActions,
} from '@/stores/use-form-trips-store'

const PreciseCityOfArrival: React.FC = () => {
  const formTripsData = useFormTripsData()
  const { setFormTripsData } = useFormTripsActions()
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<Partial<FormTripsData>>({
    mode: 'onSubmit',
    defaultValues: {
      destinationPrecise: formTripsData?.destinationPrecise || '',
    },
  })
  const navigate = useNavigate()

  const submit = async (data: Partial<FormTripsData>) => {
    await setFormTripsData(data as Partial<FormTripsData>)
    navigate('/app/offer-seats/declared-stopovers')
  }
  return (
    <div className='flex flex-col gap-8 px-4 md:px-0 w-full md:w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>
        Where do you want to drop off your passengers ?
      </h1>
      <div className='flex flex-col gap-2'>
        <AddressExplanationModal />
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

export default PreciseCityOfArrival

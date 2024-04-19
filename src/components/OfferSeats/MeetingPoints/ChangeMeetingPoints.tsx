import React from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  useFormOfferSeatsData,
  useFormOfferSeatsActions,
} from '@/stores/use-form-offer-seats-store'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import { FormOfferSeatsData, Stop } from '@/types/interface'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

const ChangeMeetingPoints: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search)
  const formOfferSeatsData = useFormOfferSeatsData()
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()
  const meetingPointsIndex = params.get('meetingPointsIndex')
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<{ stopoversItem: string }>({
    mode: 'onSubmit',
    defaultValues: {
      stopoversItem:
        formOfferSeatsData?.stops && meetingPointsIndex !== null
          ? formOfferSeatsData.stops[meetingPointsIndex as any].stopLocation ||
            ''
          : '',
    },
  })

  const submit = async (data: { stopoversItem: string }) => {
    const stops: Stop[] = formOfferSeatsData?.stops || []
    stops[meetingPointsIndex as any].stopLocation = data.stopoversItem
    setFormOfferSeatsData({
      stops: stops,
    } as Partial<FormOfferSeatsData>)
    navigate('/app/offer-seats/meeting-points')
  }

  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <p className='text-4xl font-bold text-midnightBlue text-center'>
        Where do you want to drop off your passengers?
      </p>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit((data) => submit(data))}
      >
        <Input
          {...register('stopoversItem', {
            required: 'This field is required',
          })}
          error={errors.stopoversItem?.message}
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
  )
}

export default ChangeMeetingPoints

import React from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  useFormTripsData,
  useFormTripsActions,
} from '@/stores/use-form-trips-store'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import { FormTripsData, DepartureStops } from '@/types/interface'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

const ChangeMeetingPoints: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search)
  const formTripsData = useFormTripsData()
  const { setFormTripsData } = useFormTripsActions()
  const meetingPointsIndex = params.get('meetingPointsIndex')
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<{ stopoversItem: string }>({
    mode: 'onSubmit',
    defaultValues: {
      stopoversItem:
        formTripsData?.departureStops && meetingPointsIndex !== null
          ? formTripsData.departureStops[meetingPointsIndex as any].location ||
            ''
          : '',
    },
  })

  const submit = async (data: { stopoversItem: string }) => {
    const departureStops: DepartureStops[] = formTripsData?.departureStops || []
    departureStops[meetingPointsIndex as any].location = data.stopoversItem
    setFormTripsData({
      departureStops: departureStops,
    } as Partial<FormTripsData>)
    navigate('/app/offer-seats/meeting-points')
  }

  return (
    <div className='flex flex-col gap-8 px-4 md:px-0 w-full md:w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>
        Where do you want to drop off your passengers?
      </h1>
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

export default ChangeMeetingPoints

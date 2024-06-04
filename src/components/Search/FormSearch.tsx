import React, { SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'
import {
  useFormSearchAction,
  useFormSearchData,
} from '@/stores/use-form-search-store'
import { useForm } from 'react-hook-form'
import Button from '../common/Button/Button'
import Passenger from './FormSearch/Passenger'
import { FormSearchData } from '@/types/interface'
import ReturnOfDate from './FormSearch/ReturnOfDate'
import DateOfDeparture from './FormSearch/DateOfDeparture'
import { useNavigate, useLocation } from 'react-router-dom'
import DeparturePrecise from './FormSearch/DeparturePrecise'
import DestinationPrecise from './FormSearch/DestinationPrecise'
import AnimationCircleLoading from '../common/Animation/AnimationCircleLoading'

interface FormSearchProps {
  displayTitle: boolean
  setHasMore?: React.Dispatch<SetStateAction<boolean>>
}

const FormSearch: React.FC<FormSearchProps> = ({
  displayTitle,
  setHasMore,
}) => {
  const today = new Date()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const formSearchData = useFormSearchData()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
    setValue,
    watch,
  } = useForm<Partial<FormSearchData>>({
    mode: 'onSubmit',
    defaultValues: {
      departurePrecise: formSearchData.departurePrecise || '',
      destinationPrecise: formSearchData.destinationPrecise || '',
      dateOfDeparture:
        formSearchData.dateOfDeparture || today.toISOString().split('T')[0],
      returnOfDate: formSearchData.returnOfDate || '',
      passenger: formSearchData.passenger || 1,
    },
  })

  const { search } = useFormSearchAction()

  const onSubmit = async (data: Partial<FormSearchData>) => {
    try {
      setIsLoading(true)
      if (pathname !== '/search') {
        await search(data)
        navigate('/search')
      } else {
        await search(data)
        setHasMore?.(true)
      }
    } catch (e: any) {
      toast.error(e?.message)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className='flex flex-col gap-4 w-full bg-white p-6 rounded-md border border-gray-100'>
      {displayTitle && (
        <div className='text-2xl text-blue-500 font-semibold text-center'>
          Find a route
        </div>
      )}
      <form
        className='flex flex-col items-center gap-4'
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <div className='flex flex-col w-full gap-2 items-center'>
          <DeparturePrecise
            register={register}
            isDirty={isDirty}
            errors={errors}
          />
          <DestinationPrecise
            register={register}
            isDirty={isDirty}
            errors={errors}
          />
          <div className='flex flex-row w-full gap-4'>
            <DateOfDeparture watch={watch} setValue={setValue} />
            <ReturnOfDate watch={watch} setValue={setValue} />
          </div>
          <Passenger watch={watch} setValue={setValue} />
        </div>
        {isLoading ? (
          <AnimationCircleLoading height={80} width={80} />
        ) : (
          <Button
            type='submit'
            text='Search'
            className='bg-yellow text-blue-900 font-semibold'
          />
        )}
      </form>
    </div>
  )
}
export default FormSearch

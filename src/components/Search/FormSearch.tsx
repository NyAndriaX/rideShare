import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../common/Button/Button'
import Passenger from './FormSearch/Passenger'
import { useNavigate } from 'react-router-dom'
import { FormSearchData } from '@/types/interface'
import ReturnOfDate from './FormSearch/ReturnOfDate'
import DateOfDeparture from './FormSearch/DateOfDeparture'
import DeparturePrecise from './FormSearch/DeparturePrecise'
import DestinationPrecise from './FormSearch/DestinationPrecise'
import {
  useFormSearchAction,
  useFormSearchData,
} from '@/stores/use-form-search-store'

interface FormSearchProps {
  displayTitle: boolean
}

const FormSearch: React.FC<FormSearchProps> = ({ displayTitle }) => {
  const today = new Date()
  const navigate = useNavigate()
  const formSearchData = useFormSearchData()
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

  const { setFormSearchData } = useFormSearchAction()

  const onSubmit = async (data: Partial<FormSearchData>) => {
    await setFormSearchData(data)
    navigate('/search')
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
        <Button
          type='submit'
          text='Search'
          className='bg-yellow text-blue-900 font-semibold'
        />
      </form>
    </div>
  )
}
export default FormSearch

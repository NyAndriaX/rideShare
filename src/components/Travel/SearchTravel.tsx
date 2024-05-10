import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../common/Button/Button'
import Passenger from './SearchTravel/Passenger'
import { FormSearchData } from '@/types/interface'
import ReturnOfDate from './SearchTravel/ReturnOfDate'
import DateOfDeparture from './SearchTravel/DateOfDeparture'
import DeparturePrecise from './SearchTravel/DeparturePrecise'
import DestinationPrecise from './SearchTravel/DestinationPrecise'
import { useFormSearchAction } from '@/stores/use-form-search-store'

const SearchTravel: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<Partial<FormSearchData>>({
    mode: 'onSubmit',
    defaultValues: {
      departurePrecise: '',
      destinationPrecise: '',
      dateOfDeparture: '',
      returnOfDate: '',
      passenger: 1,
    },
  })
  const { findResults } = useFormSearchAction()

  const onSubmit = async (data: Partial<FormSearchData>) => {}

  return (
    <div className='flex flex-col gap-4 w-full bg-white p-4 rounded-md border border-gray-100'>
      <div className='text-2xl text-blue-500 font-semibold text-center'>
        Find a route
      </div>
      <form
        className='flex flex-col items-center gap-4'
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <div className='flex flex-col w-full gap-1 items-center'>
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
          <div className='flex flex-row w-full gap-2'>
            <DateOfDeparture
              register={register}
              isDirty={isDirty}
              errors={errors}
            />
            <ReturnOfDate
              register={register}
              isDirty={isDirty}
              errors={errors}
            />
          </div>
          <Passenger register={register} isDirty={isDirty} errors={errors} />
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
export default SearchTravel

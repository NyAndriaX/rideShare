import React, { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { DepartureStops } from '@/types/interface'
import { toast } from 'react-toastify'

interface AddNewDeclaredStopoversProps {
  listStopovers: DepartureStops[] | []
  setListStopovers: Dispatch<SetStateAction<DepartureStops[] | []>>
}

const AddNewDeclaredStopovers: React.FC<AddNewDeclaredStopoversProps> = ({
  listStopovers,
  setListStopovers,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<Partial<DepartureStops>>({
    mode: 'onSubmit',
    defaultValues: {
      location: '',
    },
  })
  const navigate = useNavigate()

  const addNewStopovers = (data: Partial<DepartureStops>) => {
    const isLocationExist = listStopovers.some(
      (stop) => stop.location === data?.location,
    )
    if (isLocationExist) {
      toast.error('This stop already exists in the list')
      return
    }
    const newStop: DepartureStops = {
      location: data?.location ?? '',
      checked: true,
    }
    setListStopovers((prevList) => [...prevList, newStop])
    navigate('/app/offer-seats/declared-stopovers')
  }
  return (
    <div className='flex flex-col gap-8 px-4 md:px-0 w-full md:w-1/2 pt-10 pb-28'>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit((data) => addNewStopovers(data))}
      >
        <Input
          {...register('location', {
            required: 'Stop location is required',
          })}
          error={errors.location?.message}
          ariaInvalid={isDirty}
          type='text'
          icon={<ChevronLeftIcon className='h-5 w-6 text-gray-400' />}
          placeholder='ex: Antananarivo Itaosy Bemasoandro'
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

export default AddNewDeclaredStopovers

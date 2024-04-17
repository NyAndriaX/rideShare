import React, { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { Stop } from '@/types/interface'
import { toast } from 'react-toastify'

interface AddNewDeclaredStopoversProps {
  listStopovers: Stop[] | []
  setListStopovers: Dispatch<SetStateAction<Stop[] | []>>
}

const AddNewDeclaredStopovers: React.FC<AddNewDeclaredStopoversProps> = ({
  listStopovers,
  setListStopovers,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<Partial<Stop>>({
    mode: 'onSubmit',
    defaultValues: {
      stopLocation: '',
    },
  })
  const navigate = useNavigate()

  const addNewStopovers = (data: Partial<Stop>) => {
    const isLocationExist = listStopovers.some(
      (stop) => stop.stopLocation === data?.stopLocation,
    )
    if (isLocationExist) {
      toast.error('This stop already exists in the list')
      return
    }
    const newStop: Stop = {
      stopLocation: data?.stopLocation ?? '',
      checked: true,
    }
    setListStopovers((prevList) => [...prevList, newStop])
    navigate('/app/offer-seats/declared-stopovers')
  }
  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit((data) => addNewStopovers(data))}
      >
        <Input
          {...register('stopLocation', {
            required: 'Stop location is required',
          })}
          error={errors.stopLocation?.message}
          ariaInvalid={isDirty}
          type='text'
          icon={<ChevronLeftIcon className='h-5 w-6 text-gray-400' />}
          placeholder='ex: Antananarivo Itaosy Bemasoandro'
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

export default AddNewDeclaredStopovers

import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useFormActions } from '@/stores/use-form-store'
import { useFormData } from '@/stores/use-form-store'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const RegisterGenre: React.FC = () => {
  const navigate = useNavigate()
  const formData = useFormData()
  const { setFormData } = useFormActions()

  const handleGenreSelection = async (data: { gender: string }) => {
    await setFormData(data)
    navigate('/register/password')
  }

  return formData?.dateOfBirth ? (
    <div className='flex flex-col gap-8 w-1/2'>
      <p className='text-2xl font-bold text-midnightBlue text-center'>
        What do you prefer to be called?
      </p>
      <div className='flex flex-col gap-4'>
        <div
          className='flex flex-row justify-between rounded-md cursor-pointer items-center p-4 bg-white hover:bg-offWhite'
          onClick={() => handleGenreSelection({ gender: 'Md' })}
        >
          <p className='text-base text-deepSeaBlue font-semibold'>Madam</p>
          <ChevronRightIcon className='h-6 w-6' />
        </div>
        <div className='border border-lightGrey mx-4' />
        <div
          className='flex flex-row justify-between rounded-md cursor-pointer items-center p-4 bg-white hover:bg-offWhite'
          onClick={() => handleGenreSelection({ gender: 'Mr' })}
        >
          <p className='text-base text-deepSeaBlue font-semibold'>Sir</p>
          <ChevronRightIcon className='h-6 w-6' />
        </div>
        <div className='border border-lightGrey mx-4' />
        <div
          className='flex flex-row justify-between rounded-md cursor-pointer items-center p-4 bg-white hover:bg-offWhite'
          onClick={() => handleGenreSelection({ gender: 'not-specified' })}
        >
          <p className='text-base text-deepSeaBlue font-semibold'>
            I prefer not to say it
          </p>
          <ChevronRightIcon className='h-6 w-6' />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to='/register/dateofbirth' />
  )
}

export default RegisterGenre

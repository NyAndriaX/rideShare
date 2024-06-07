import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useFormAuthData } from '@/stores/use-form-auth-store'
import { useFormAuthActions } from '@/stores/use-form-auth-store'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const RegisterGenre: React.FC = () => {
  const navigate = useNavigate()
  const formAuthData = useFormAuthData()
  const { setFormAuthData } = useFormAuthActions()

  const handleGenreSelection = async (data: { gender: string }) => {
    await setFormAuthData(data)
    navigate('/register/password')
  }

  return formAuthData?.dateOfBirth ? (
    <div className='flex flex-col gap-8 w-full md:w-1/2'>
      <h1 className='text-blue-900'>What do you prefer to be called?</h1>
      <div className='flex flex-col gap-4'>
        <div
          className='flex flex-row justify-between rounded-md cursor-pointer items-center p-4 bg-white hover:bg-gray-50'
          onClick={() => handleGenreSelection({ gender: 'Md' })}
        >
          <p className='text-base text-blue-900 font-semibold'>Madam</p>
          <ChevronRightIcon className='h-6 w-6 text-gray-500' />
        </div>
        <div className='border border-gray-200 mx-4' />
        <div
          className='flex flex-row justify-between rounded-md cursor-pointer items-center p-4 bg-white hover:bg-offWhite'
          onClick={() => handleGenreSelection({ gender: 'Mr' })}
        >
          <p className='text-base text-blue-900 font-semibold'>Sir</p>
          <ChevronRightIcon className='h-6 w-6 text-gray-500' />
        </div>
        <div className='border border-gray-200 mx-4' />
        <div
          className='flex flex-row justify-between rounded-md cursor-pointer items-center p-4 bg-white hover:bg-offWhite'
          onClick={() => handleGenreSelection({ gender: 'not-specified' })}
        >
          <p className='text-base text-blue-900 font-semibold'>
            I prefer not to say it
          </p>
          <ChevronRightIcon className='h-6 w-6 text-gray-500' />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to='/register/dateofbirth' />
  )
}

export default RegisterGenre

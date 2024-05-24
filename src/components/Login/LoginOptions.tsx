import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FacebookIcon } from '../common/Icons/Icons'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const LoginOptions: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-8 w-1/2'>
      <h1 className='text-blue-900'>I connect :</h1>
      <div className='flex flex-col gap-4'>
        <div
          className='flex flex-row justify-between rounded-md cursor-pointer items-center p-4 bg-white hover:bg-offWhite'
          onClick={() => navigate('/login/email')}
        >
          <p className='text-base text-blue-900 font-semibold'>
            Continue with an email address
          </p>
          <ChevronRightIcon className='h-6 w-6 text-gray-400' />
        </div>
        <div className='border border-gray-200 mx-4' />
        <div
          className='flex flex-row justify-between cursor-pointer rounded-md items-center p-4 bg-white hover:bg-offWhite'
          onClick={() => navigate('/login')}
        >
          <p className='text-base text-blue-900 font-semibold'>
            Continue with Facebook
          </p>
          <span className='flex flex-row gap-2 items-center w-16 justify-end'>
            <FacebookIcon className='h-6 w-6 text-blue-900' />
            <ChevronRightIcon className='h-6 w-6 text-gray-400' />
          </span>
        </div>
      </div>
      <p className='text-base mx-4 text-gray-400  font-semibold'>
        Not a member yet ?{' '}
        <Link to='/register' className='text-blue-500'>
          Register
        </Link>
      </p>
    </div>
  )
}

export default LoginOptions

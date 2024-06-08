import React from 'react'
import { Navigate } from 'react-router-dom'
import Button from '../common/Button/Button'
import { useUserInfo } from '@/stores/use-auth-store'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'
import { User } from '@/types/interface'

const GiftVoucher: React.FC = () => {
  const navigate = useNavigate()
  const user: User | null = useUserInfo()
  return user && user.lastName ? (
    <div className='flex flex-col w-full items-center justify-center py-5'>
      <div className='w-full bg-yellow py-4 text-center'>
        <h1 className='text-blue-900 font-bold'>
          {user.lastName}, Get 5.000 Ar Welcome
        </h1>
      </div>
      <div className='flex flex-col gap-12 py-8 items-center justify-center w-full'>
        <div className='flex flex-col gap-8 w-full px-4 md:px-0 md:w-1/2 text-white'>
          <p className='text-blue-900'>
            From May 1, 2024, benefit from a 5.000 Ar welcome for you encourage
            carpooling!
          </p>
          <h2 className='text-xl text-blue-900 font-bold'>
            To take advantage of it, carpool and Rideshare takes care of
            everything!
          </h2>
          <p className='flex flex-row gap-2 text-blue-900'>
            <CheckIcon className='h-5 w-5 text-blue-500' />
            <span>
              Carpool for more than 80 km in one of the countries as as driver*
            </span>
          </p>
          <p className='flex flex-row text-blue-900 gap-2'>
            <CheckIcon className='h-5 w-5 text-blue-500' />
            <span>Receive 5.000 Ar directly to your bank account</span>
          </p>
          <a className='text-primary' href='#'>
            *See general conditions
          </a>
        </div>
        <div className='flex w-3/5 md:w-1/5'>
          <Button
            type='button'
            text='publish a route'
            onClick={() => navigate('/app/offer-seats/departure')}
            className='rounded-md font-semibold text-midnightBlue bg-yellow'
          />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to='/login' />
  )
}

export default GiftVoucher

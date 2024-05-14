import React from 'react'
import Button from '../common/Button/Button'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'

const GiftVoucher: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='min-w-screen w-full flex flex-col items-center justify-center'>
      <div className='w-full mx-auto bg-yellow text-center'>
        <h1 className='text-3xl font-bold py-6'>
          Henintsoa, Get 5.000 Ar Welcome{' '}
        </h1>
      </div>
      <div className='flex flex-col gap-12 items-center justify-center font-light w-full py-5 '>
        <div className='flex flex-col gap-8 w-1/2 text-deepSeaBlue'>
          <p>
            From May 1, 2024, benefit from a 5.000 Ar welcome for you encourage
            carpooling!
          </p>
          <h2 className='text-xl font-bold'>
            To take advantage of it, carpool and Rideshare takes care of
            everything!
          </h2>
          <p className='flex flex-row gap-2'>
            <CheckIcon className='h-5 w-5' />
            <span>
              Carpool for more than 80 km in one of the countries as as driver*
            </span>
          </p>
          <p className='flex flex-row gap-2'>
            <CheckIcon className='h-5 w-5' />
            <span>Receive $25 directly to your bank account</span>
          </p>
          <a className='text-primary' href='#'>
            *See general conditions
          </a>
        </div>
        <div className='flex w-1/5'>
          <Button
            type='button'
            text='publish a route'
            onClick={() => navigate('/app/offer-seats/departure')}
            className='rounded-md font-semibold text-midnightBlue bg-yellow'
          />
        </div>
      </div>
    </div>
  )
}

export default GiftVoucher

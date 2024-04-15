import React from 'react'
import { useNavigate } from 'react-router-dom'
import { WalletIcon } from '@heroicons/react/24/outline'
import Button from '@/components/common/Button/Button'

const WelcomeBonus: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='min-w-screen flex flex-col items-center justify-center py-5'>
      <div className='w-full mx-auto bg-yellow text-center'>
        <h1 className='text-3xl font-bold py-6'>Get $25 Welcome </h1>
      </div>
      <div className='flex flex-col gap-12 items-center justify-center font-light bg-midnightBlue w-full py-5'>
        <div className='flex flex-col gap-8 w-1/2 text-white'>
          <p>
            From May 1, 2024, benefit from a $25 welcome for you encourage
            carpooling!
          </p>
          <h2 className='text-xl font-bold'>
            To take advantage of it, carpool and Rideshare takes care of
            everything!
          </h2>
          <p className='flex flex-row gap-2'>
            <WalletIcon className='h-5 w-5' />
            <span>
              Carpool for more than 80 km in one of the countries as as driver*
            </span>
          </p>
          <p className='flex flex-row gap-2'>
            <WalletIcon className='h-5 w-5' />
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
            onClick={() => navigate('/app/offer-seats/gift-voucher')}
            className='rounded-md font-semibold text-midnightBlue bg-yellow'
          />
        </div>
      </div>
    </div>
  )
}

export default WelcomeBonus

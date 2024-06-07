import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserInfo } from '@/stores/use-auth-store'
import { WalletIcon } from '@heroicons/react/24/outline'
import Button from '@/components/common/Button/Button'

const WelcomeBonus: React.FC = () => {
  const user = useUserInfo()
  const navigate = useNavigate()

  console.log(user)

  const handleClick = useCallback(() => {
    user && !user?.hasTripCreated
      ? navigate('/app/offer-seats/gift-voucher')
      : navigate('/app/offer-seats/departure')
  }, [])

  return (
    <div className='flex flex-col w-full items-center justify-center py-5'>
      <div className='w-full bg-yellow py-4 text-center'>
        <h1 className='text-blue-900 font-bold'>Get 5.000 Ar Welcome</h1>
      </div>
      <div className='flex flex-col gap-12 py-8 items-center justify-center font-light bg-blue-900 w-full'>
        <div className='flex flex-col gap-8 w-full px-4 md:px-0 md:w-1/2 text-white'>
          <p>
            From May 1, 2024, benefit from a 5.000 Ar welcome for you encourage
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
            onClick={handleClick}
            className='rounded-md font-semibold text-midnightBlue bg-yellow'
          />
        </div>
      </div>
    </div>
  )
}

export default WelcomeBonus

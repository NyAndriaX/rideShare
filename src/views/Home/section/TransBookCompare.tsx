import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/Button/Button'
import Travel from '@/components/Search/Travel'

const TransBookCompare: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-16 justify-center items-center bg-lightGrey py-12 px-4'>
      <header className='flex flex-col justify-center items-center text-center gap-4 w-1/2'>
        <p className='text-2xl font-bold text-midnightBlue'>
          Car : Find the best and book now
        </p>
        <p className='text-base text-midnightBlue'>
          The problem with ticket prices is that they change all the time. But
          by comparing, you always win.
        </p>
      </header>
      <main className='flex flex-col gap-16 justify-center items-center w-full'>
        <div className='grid grid-cols-2 gap-4 w-full'>
          <Travel
            departureCity='Ville de départ'
            cityOfArrival="Ville d'arrivée"
            dateOfDeparture='01/04/2024'
            dateOfArrival='02/04/2024'
            price={145}
          />
          <Travel
            departureCity='Ville de départ'
            cityOfArrival="Ville d'arrivée"
            dateOfDeparture='01/04/2024'
            dateOfArrival='02/04/2024'
            price={145}
          />
          <Travel
            departureCity='Ville de départ'
            cityOfArrival="Ville d'arrivée"
            dateOfDeparture='01/04/2024'
            dateOfArrival='02/04/2024'
            price={145}
          />
          <Travel
            departureCity='Ville de départ'
            cityOfArrival="Ville d'arrivée"
            dateOfDeparture='01/04/2024'
            dateOfArrival='02/04/2024'
            price={145}
          />
        </div>
        <div className='flex justify-center w-1/3'>
          <Button
            type='button'
            text='Ticket search'
            onClick={() => navigate('/search')}
            className='bg-yellow text-black font-semibold'
          />
        </div>
      </main>
    </div>
  )
}

export default TransBookCompare

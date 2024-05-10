import React from 'react'
import Travel from '@/components/Search(last-version)/Travel'
import Line from '@/components/common/Line/Line'

const TransBookCompare: React.FC = () => {
  return (
    <div className='min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5'>
      <div className='w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800'>
        <div className='w-full max-w-6xl mx-auto'>
          <div className='text-center max-w-xl mx-auto'>
            <h1 className=' text-gray-600'>
              What people <br />
              are saying.
            </h1>
            <h3 className='text-xl mb-5 font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <Line />
          </div>
          <div className='-mx-3 md:flex items-start'>
            <div className='px-3 md:w-1/3'>
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
            <div className='px-3 md:w-1/3'>
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

            <div className='px-3 md:w-1/3'>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransBookCompare

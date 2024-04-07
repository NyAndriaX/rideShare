import React from 'react'
import Date from '@/components/Search/Date'
import Travel from '@/components/Search/Travel'
import SearchCard from '@/components/common/Search/SearchCard'
import TravelFilter from '@/components/Search/TravelFilter'

const Search: React.FC = () => {
  return (
    <div className='flex flex-row items-start gap-4 z-0 pt-32'>
      <div className='flex w-1/2 flex-col px-4'>
        <div className='flex flex-col w-full gap-14 justify-center items-center'>
          <p className='text-2xl text-primary font-semibold text-center'>
            Find a route
          </p>
          <SearchCard />
        </div>
      </div>
      <div className='flex w-1/2 flex-col gap-14 px-4 pb-4'>
        <Date />
        <TravelFilter />
        <div className='flex w-full flex-col gap-4'>
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
      </div>
    </div>
  )
}

export default Search

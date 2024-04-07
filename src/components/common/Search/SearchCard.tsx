import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DateOfDeparture from './search-form/DateOfDeparture'
import CityOfArrival from './search-form/CityOfArrival'
import ReturnDate from './search-form/ReturnDate'
import Passenger from './search-form/Passenger'
import DepartureCity from './search-form/DepartureCity'
import { initialFormSearch, initialErrorFormSearch } from '@/data/search-data'
import Button from '../Button/Button'

const SearchCard: React.FC = () => {
  const navigate = useNavigate()
  const [formSearch, setFormSearch] = useState(initialFormSearch)
  const [errorFormSearch, setErrorFormSearch] = useState(initialErrorFormSearch)

  const handleSearch = async () => {
    setErrorFormSearch(initialErrorFormSearch)
    if (!formSearch.departureCity.trim() && !formSearch.cityOfArrival.trim()) {
      setErrorFormSearch((prevState) => ({
        ...prevState,
        departureCity: true,
        cityOfArrival: true,
      }))
      return
    }
    if (!formSearch.departureCity.trim()) {
      setErrorFormSearch((prevState) => ({
        ...prevState,
        departureCity: true,
      }))
      return
    }
    if (!formSearch.cityOfArrival.trim()) {
      setErrorFormSearch((prevState) => ({
        ...prevState,
        cityOfArrival: true,
      }))
      return
    }
    const params = new URLSearchParams()
    for (const [key, value] of Object.entries(formSearch)) {
      const paramValue =
        value instanceof Date ? value.toISOString() : String(value)
      params.append(key, paramValue)
    }
    navigate(`app/search?${params.toString()}`)
  }
  return (
    <div className='flex flex-col w-full items-center justify-center gap-4 bg-white p-8 rounded-md shadow-lg'>
      <DepartureCity
        errorFormSearch={errorFormSearch}
        formSearch={formSearch}
        setErrorFormSearch={setErrorFormSearch}
        setFormSearch={setFormSearch}
      />
      <CityOfArrival
        errorFormSearch={errorFormSearch}
        formSearch={formSearch}
        setFormSearch={setFormSearch}
        setErrorFormSearch={setErrorFormSearch}
      />
      <div className='flex flex-row gap-4 w-full'>
        <DateOfDeparture
          formSearch={formSearch}
          setFormSearch={setFormSearch}
        />
        <ReturnDate formSearch={formSearch} setFormSearch={setFormSearch} />
      </div>
      <Passenger formSearch={formSearch} setFormSearch={setFormSearch} />
      <Button
        type='button'
        text='Search'
        onClick={handleSearch}
        className='bg-yellow text-black font-semibold'
      />
    </div>
  )
}

export default SearchCard

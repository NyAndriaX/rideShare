import React from 'react'
import Arrival from './CityOfArrival/Arrival'
import { Route, Routes } from 'react-router-dom'
import PreciseCityOfArrival from './CityOfArrival/PreciseCityOfArrival'

const CityOfArrival: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Arrival />} />
        <Route path='/precise' element={<PreciseCityOfArrival />} />
      </Routes>
    </React.Fragment>
  )
}

export default CityOfArrival

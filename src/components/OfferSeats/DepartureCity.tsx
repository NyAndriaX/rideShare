import React from 'react'
import Departure from './DepartureCity/Departure'
import { Routes, Route } from 'react-router-dom'
import PreciseDepartureCity from './DepartureCity/PreciseDepartureCity'

const DepartureCity: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Departure />} />
        <Route path='/precise' element={<PreciseDepartureCity />} />
      </Routes>
    </React.Fragment>
  )
}

export default DepartureCity

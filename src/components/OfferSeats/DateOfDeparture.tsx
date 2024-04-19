import React from 'react'
import TimeOfDeparture from './DateOfDeparture/TimeOfDeparture'
import DateOfDepartureComponent from './DateOfDeparture/DateOfDeparture'
import { Route, Routes } from 'react-router-dom'

const DateOfDeparture: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<DateOfDepartureComponent />} />
      <Route path='/time' element={<TimeOfDeparture />} />
    </Routes>
  )
}

export default DateOfDeparture

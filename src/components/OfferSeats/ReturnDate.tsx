import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReturnTime from './ReturnDate/ReturnTime'
import ReturnDateComponent from './ReturnDate/ReturnDate'

const ReturnDate: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<ReturnDateComponent />} />
      <Route path='/time' element={<ReturnTime />} />
    </Routes>
  )
}
export default ReturnDate

import React, { useState } from 'react'
import { DepartureStops } from '@/types/interface'
import { Routes, Route } from 'react-router-dom'
import { useFormTripsData } from '@/stores/use-form-trips-store'
import ListDeclaredStopovers from './DeclaredStopovers/ListDeclaredStopovers'
import AddNewDeclaredStopovers from './DeclaredStopovers/AddNewDeclaredStopovers'

const DeclaredStopovers: React.FC = () => {
  const formTripsData = useFormTripsData()
  const [listStopovers, setListStopovers] = useState<DepartureStops[] | []>(
    formTripsData?.departureStops || [],
  )

  return (
    <React.Fragment>
      <Routes>
        <Route
          path='/'
          element={
            <ListDeclaredStopovers
              listStopovers={listStopovers}
              setListStopovers={setListStopovers}
            />
          }
        />
        <Route
          path='/add'
          element={
            <AddNewDeclaredStopovers
              listStopovers={listStopovers}
              setListStopovers={setListStopovers}
            />
          }
        />
      </Routes>
    </React.Fragment>
  )
}
export default DeclaredStopovers

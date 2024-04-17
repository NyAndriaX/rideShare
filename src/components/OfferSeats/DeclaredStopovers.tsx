import React, { useState } from 'react'
import { Stop } from '@/types/interface'
import { Routes, Route } from 'react-router-dom'
import { useFormOfferSeatsData } from '@/stores/use-form-offer-seats-store'
import ListDeclaredStopovers from './DeclaredStopovers/ListDeclaredStopovers'
import AddNewDeclaredStopovers from './DeclaredStopovers/AddNewDeclaredStopovers'

const DeclaredStopovers: React.FC = () => {
  const formOfferSeatsData = useFormOfferSeatsData()
  const [listStopovers, setListStopovers] = useState<Stop[] | []>(
    formOfferSeatsData?.stops || [],
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

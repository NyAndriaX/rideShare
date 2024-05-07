import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalDeparturePriceComponent from './DeparturePriceRecommendation/GlobalDeparturePriceComponent'
import IncrementalDeparturePriceComponent from './DeparturePriceRecommendation/IncrementalDeparturePriceComponent'

const DeparturePriceRecommendation: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<GlobalDeparturePriceComponent />} />
        <Route path='/edit' element={<IncrementalDeparturePriceComponent />} />
      </Routes>
    </React.Fragment>
  )
}

export default DeparturePriceRecommendation

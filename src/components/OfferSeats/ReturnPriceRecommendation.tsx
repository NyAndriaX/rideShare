import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalReturnPriceRecommendation from './ReturnPriceRecommendation/GlobalReturnPriceRecommendation'
import IncrementalReturnPriceRecommendation from './ReturnPriceRecommendation/IncrementalReturnPriceRecommendation'

const ReturnPriceRecommendation: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<GlobalReturnPriceRecommendation />} />
        <Route
          path='/edit'
          element={<IncrementalReturnPriceRecommendation />}
        />
      </Routes>
    </React.Fragment>
  )
}

export default ReturnPriceRecommendation

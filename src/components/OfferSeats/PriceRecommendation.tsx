import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalPriceComponent from './PriceRecommendation/GlobalPriceComponent'
import IncrementalPriceComponent from './PriceRecommendation/IncrementalPriceComponent'

const PriceRecommendation: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<GlobalPriceComponent />} />
        <Route path='/edit' element={<IncrementalPriceComponent />} />
      </Routes>
    </React.Fragment>
  )
}

export default PriceRecommendation

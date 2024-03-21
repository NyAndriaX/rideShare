import React from 'react'
import Navigation from './layout/navigation'
import Footer from './layout/footer'
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

export default App

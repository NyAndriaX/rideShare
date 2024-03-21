import React from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from './layout/navigation'
import Footer from './layout/footer'
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <React.Fragment>
      {!(pathname === 'login' || pathname === '/register') && <Navigation />}
      <Outlet />
      {!(pathname === 'login' || pathname === '/register') && <Footer />}
    </React.Fragment>
  )
}

export default App

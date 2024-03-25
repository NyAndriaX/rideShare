import React from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from './layout/navigation'
import Footer from './layout/footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <React.Fragment>
      <Navigation />
      <Outlet />
      {!(pathname.startsWith('/login') || pathname.startsWith('/register')) && (
        <Footer />
      )}
      <ToastContainer position='top-right' />
    </React.Fragment>
  )
}

export default App

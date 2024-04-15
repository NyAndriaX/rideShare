import React from 'react'
import Navigation from './layout/navigation'
import Footer from './layout/footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Outlet />
      <Footer />
      <ToastContainer position='top-right' />
    </React.Fragment>
  )
}

export default App

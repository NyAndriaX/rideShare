import React from 'react'
import Footer from './layout/footer'
import { Outlet } from 'react-router-dom'
import Navigation from './layout/navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ScrollToTop } from './components/ScrollToTop'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <Footer />
      <ToastContainer position='top-right' />
    </React.Fragment>
  )
}

export default App

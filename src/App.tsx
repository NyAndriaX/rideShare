import React, { useState, useEffect } from 'react'
import Footer from './layout/footer'
import { Outlet } from 'react-router-dom'
import Navigation from './layout/navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ScrollToTop } from './components/ScrollToTop'
import { useUserToken } from './stores/use-auth-store'
import { useAuthActions } from './stores/use-auth-store'

const App: React.FC = () => {
  const { me } = useAuthActions()
  const token: any = useUserToken()
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    async function fetchUser() {
      token && (await me(token))
    }
    fetchUser()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width <= 1280) {
        setZoom(0.9)
      } else {
        setZoom(1)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{ zoom: zoom }}>
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <Footer />
      <ToastContainer position='top-right' />
    </div>
  )
}

export default App

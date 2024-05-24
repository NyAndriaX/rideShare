import React, { useEffect } from 'react'
import Footer from './layout/footer'
import { Outlet } from 'react-router-dom'
import Navigation from './layout/navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ScrollToTop } from './components/ScrollToTop'
import { useUserToken } from './stores/use-auth-store'
import { useAuthActions } from './stores/use-auth-store'

const App: React.FC = () => {
  const token: any = useUserToken()
  const { me } = useAuthActions()

  useEffect(() => {
    async function fetchUser() {
      token && (await me(token))
    }
    fetchUser()
  }, [])

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

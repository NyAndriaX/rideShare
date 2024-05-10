import { createBrowserRouter } from 'react-router-dom'
import Login from './views/Auth/Login'
import NotFound from './views/NotFound'
import Home from './views/Home/Home'
import OfferSeats from './views/OfferSeats/OfferSeats'
import Register from './views/Auth/Register'
import AuthProtectedRoute from './views/AuthProtectedRoute'
import ProtectedRoute from './views/ProtectedRoute'
import Tickets from './views/Tickets/Tickets'
import Profile from './views/Profile/Profile'
import Search from './views/Search/Search'
import Travel from './views/Travel/Travel'
import App from './App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      // {
      //   path: '/search',
      //   element: <Search />,
      // },
      {
        path: 'app/account',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: 'app/after-sales',
        element: (
          <ProtectedRoute>
            <Tickets />
          </ProtectedRoute>
        ),
      },
      {
        path: 'app/offer-seats/*',
        element: (
          <ProtectedRoute>
            <OfferSeats />
          </ProtectedRoute>
        ),
      },
      {
        path: '/search/*',
        element: (
          <ProtectedRoute>
            <Search />
          </ProtectedRoute>
        ),
      },
      {
        path: '/travel/*',
        element: (
          <ProtectedRoute>
            <Travel />
          </ProtectedRoute>
        ),
      },
      {
        path: '/login/*',
        element: (
          <AuthProtectedRoute>
            <Login />
          </AuthProtectedRoute>
        ),
      },
      {
        path: '/register/*',
        element: (
          <AuthProtectedRoute>
            <Register />
          </AuthProtectedRoute>
        ),
      },
    ],
  },
])

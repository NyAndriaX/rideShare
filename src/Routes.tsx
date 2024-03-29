import { createBrowserRouter } from 'react-router-dom'
import Login from './views/Auth/Login'
import NotFound from './views/NotFound'
import Home from './views/Home/Home'
import Register from './views/Auth/Register'
import Search from './views/Search/Search'
import AuthProtectedRoute from './views/AuthProtectedRoute'
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
      {
        path: 'app/search',
        element: <Search />,
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

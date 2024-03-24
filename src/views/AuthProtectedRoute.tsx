import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserInfo } from '@/stores/use-auth-store'

interface RouteProps {
  children: ReactNode
}

const AuthProtectedRoute: React.FC<RouteProps> = ({ children }) => {
  const user = useUserInfo()
  if (user) return <Navigate to='/' replace />
  return <>{children}</>
}

export default AuthProtectedRoute

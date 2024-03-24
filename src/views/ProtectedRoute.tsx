import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserInfo } from '@/layout/navigation/stores/use-auth-store'

interface RouteProps {
  children: ReactNode
  requireAdmin?: boolean
}

const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
  const user = useUserInfo()
  if (!user) return <Navigate to='/login' replace />
  return <>{children}</>
}

export default ProtectedRoute

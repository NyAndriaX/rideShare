import React from 'react'
import LoginOptions from '@/components/Login/LoginOptions'
import { Routes, Route } from 'react-router-dom'

const Login: React.FC = () => {
  return (
    <div className='flex justify-center items-center pt-28 px-4'>
      <Routes>
        <Route path='/' element={<LoginOptions />} />
      </Routes>
    </div>
  )
}

export default Login

import React from 'react'
import { useLocation } from 'react-router-dom'
import StepProgressBar from '@/components/Register/StepProgressBar/StepProgressBar'
import RegisterPasswordInput from '@/components/Register/RegisterPasswordInput'
import RegisterGenre from '@/components/Register/RegisterGenre'
import RegisterDateOfBirth from '@/components/Register/RegisterDateOfBirth'
import RegisterNameInput from '@/components/Register/RegisterNameInput'
import RegisterEmailInput from '@/components/Register/RegisterEmailInput'
import RegisterOptions from '@/components/Register/RegisterOptions'
import { Routes, Route } from 'react-router-dom'

const Register: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <div className='flex flex-col justify-center items-center pt-28 px-4'>
      <StepProgressBar pathname={pathname as string} />
      <div className='flex w-full justify-center items-center'>
        <Routes>
          <Route path='/' element={<RegisterOptions />} />
          <Route path='/email' element={<RegisterEmailInput />} />
          <Route path='/name' element={<RegisterNameInput />} />
          <Route path='/date-of-birth' element={<RegisterDateOfBirth />} />
          <Route path='/gender' element={<RegisterGenre />} />
          <Route path='/password' element={<RegisterPasswordInput />} />
        </Routes>
      </div>
    </div>
  )
}

export default Register

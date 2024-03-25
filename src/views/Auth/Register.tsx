import React from 'react'
import RegisterPasswordInput from '@/components/Register/RegisterPasswordInput'
import RegisterGenre from '@/components/Register/RegisterGenre'
import RegisterDateOfBirth from '@/components/Register/RegisterDateOfBirth'
import RegisterNameInput from '@/components/Register/RegisterNameInput'
import RegisterEmailInput from '@/components/Register/RegisterEmailInput'
import RegisterOptions from '@/components/Register/RegisterOptions'
import { Routes, Route } from 'react-router-dom'

const Register: React.FC = () => {
  return (
    <div className='flex justify-center items-center pt-28 px-4'>
      <Routes>
        <Route path='/' element={<RegisterOptions />} />
        <Route path='/email' element={<RegisterEmailInput />} />
        <Route path='/name' element={<RegisterNameInput />} />
        <Route path='/dateofbirth' element={<RegisterDateOfBirth />} />
        <Route path='/genre' element={<RegisterGenre />} />
        <Route path='/password' element={<RegisterPasswordInput />} />
      </Routes>
    </div>
  )
}

export default Register

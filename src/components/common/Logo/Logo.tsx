import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div
      className='text-xl font-bold cursor-pointer'
      onClick={() => navigate('/')}
    >
      E-covoiturage.
    </div>
  )
}

export default Logo

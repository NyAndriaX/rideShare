import React from 'react'
import Edit from '@/components/Profil/Edit'
import { Routes, Route } from 'react-router-dom'
import Picture from '@/components/Profil/Picture'
import Account from '@/components/Profil/Account'
import UserShow from '@/components/Profil/UserShow'
import { useUserInfo } from '@/stores/use-auth-store'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'

const Profile: React.FC = () => {
  const user = useUserInfo()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className='flex flex-col items-center relative z-0 pt-24 px-4'>
      <Routes>
        <Route path='/' element={<Account user={user} />} />
      </Routes>
      <div className='flex flex-col items-center w-full'>
        {pathname !== '/app/account' && (
          <div className='w-full'>
            <button
              onClick={() => navigate(-1)}
              className='flex flex-row gap-2 items-center text-blue-500 text-base'
            >
              <ArrowLongLeftIcon className='h-5 w-6' />
              <span>Go back</span>
            </button>
          </div>
        )}
        <Routes>
          <Route path='/picture' element={<Picture user={user} />} />
          <Route path='/user/show' element={<UserShow user={user} />} />
          <Route path='/user/edit' element={<Edit user={user} />} />
        </Routes>
      </div>
    </div>
  )
}

export default Profile

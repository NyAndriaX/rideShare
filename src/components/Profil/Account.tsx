import React from 'react'
import PersonalInfos from './Account/PersonalInfos'
import { User } from '@/types/interface'

interface AccountProps {
  user: Partial<User> | null
}

const Account: React.FC<AccountProps> = ({ user }) => {
  return (
    <div className='flex flex-col gap-4 w-full md:w-1/2'>
      <h1 className='text-blue-900'>About you</h1>
      <PersonalInfos user={user} />
    </div>
  )
}
export default Account

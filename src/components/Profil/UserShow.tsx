import React from 'react'
import { User } from '@/types/interface'
import { calculateAge } from '@/utils/calculateAge'
import {
  XCircleIcon,
  // CheckCircleIcon
} from '@heroicons/react/20/solid'

interface UserShowProps {
  user: Partial<User> | null
}

const UserShow: React.FC<UserShowProps> = ({ user }) => {
  return (
    <div className='flex flex-col gap-6 py-6 w-full md:w-1/2'>
      <div className='flex flex-col gap-4 items-start'>
        <div className='flex flex-row justify-between rounded-md items-center px-6 py-2 w-full'>
          <div className='flex flex-col gap-1'>
            <p className='text-lg text-blue-900 font-semibold'>
              {user?.firstName} {user?.lastName}
            </p>
            <p className='text-sm text-gray-500'>
              {calculateAge(user?.dateOfBirth?.toString() ?? '--')} ans
            </p>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <img
              className='h-12 w-12 rounded-full border border-gray-200'
              src={new URL('/image/person.svg', import.meta.url).href}
              alt={'Anonymous'}
            />
          </div>
        </div>
        <div className='flex flex-row gap-2 items-center px-4 py-2'>
          <XCircleIcon className='h-6 w-6 text-red-500' />
          <p className='text-sm text-red-500'>Unverified email address</p>
        </div>
      </div>
      <div className='bg-gray-50 h-1 rounded-md' />
      <div className='flex flex-col items-start gap-6 px-6 py-2'>
        <p className='text-sm text-gray-500'>No route published yet</p>
      </div>
    </div>
  )
}
export default UserShow

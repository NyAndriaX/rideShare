import React from 'react'
import { Link } from 'react-router-dom'
import { User } from '@/types/interface'
import { calculateAge } from '@/utils/calculateAge'
import { ChevronRightIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

interface PersonalInfosProps {
  user: Partial<User> | null
}

const PersonalInfos: React.FC<PersonalInfosProps> = ({ user }) => {
  return (
    <div className='flex flex-col gap-8 py-6 border-b border-gray-200'>
      <Link
        to='user/show'
        className='flex flex-row justify-between rounded-md items-center cursor-pointer px-6 py-2 hover:bg-gray-50'
      >
        <div className='flex flex-col gap-1'>
          <p className='text-lg text-blue-900 font-semibold'>
            {user?.firstName} {user?.lastName}
          </p>
          <p className='text-base text-gray-500'>
            {calculateAge(user?.dateOfBirth?.toString() ?? '--')} ans
          </p>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <img
            className='h-12 w-12 rounded-full border border-gray-200'
            src={new URL('/image/person.svg', import.meta.url).href}
            alt={'Anonymous'}
          />
          <ChevronRightIcon className='h-4 w-4 text-gray-300' />
        </div>
      </Link>
      <Link
        to='user/edit'
        className='flex flex-row gap-2 text-base text-blue-500 mx-4'
      >
        <PlusCircleIcon className='h-6 w-6' />
        <span>Add a profile photo</span>
      </Link>
      <Link
        to='user/edit'
        className='flex flex-row gap-2 text-base text-blue-500 mx-4'
      >
        Edit personal information
      </Link>
    </div>
  )
}
export default PersonalInfos

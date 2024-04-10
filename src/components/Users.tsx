import React, { Fragment, forwardRef } from 'react'
import { NavigateFunction } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import {
  PencilSquareIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { User } from '@/types/interface'

interface UsersProps {
  open: boolean
  userData?: User
  mobile?: boolean
  navigate: NavigateFunction
  handleClickOpen: () => void
}

const Users: React.FC<UsersProps> = ({
  userData,
  // mobile,
  handleClickOpen,
  navigate,
}) => {
  return (
    <Popover className='relative hidden leading-3 md:block text-midnightBlue'>
      {({ open }) => (
        <div>
          <Popover.Button
            className={`flex flex-row px-4 py-2 min-w-20 gap-2 items-center border border-white hover:border-darkWhite rounded-md`}
            onClick={handleClickOpen}
          >
            <img
              className='h-8 w-7 rounded-full'
              src={
                (userData && userData.profilUrl) === 'default' ||
                !(userData && userData.profilUrl)
                  ? '/public/image/person.svg'
                  : userData.profilUrl
              }
              alt={userData ? userData.firstName : 'Anonymous'}
            />
            <ChevronDownIcon
              className='-mr-1 h-5 w-5 text-slateBlue'
              aria-hidden='true'
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            show={open}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute left-35 z-50 mt-0 w-[250px] max-w-sm -translate-x-1/2 px-3 pt-3 sm:px-0 lg:max-w-3xl'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5'>
                <div className='relative grid  bg-white '>
                  <div className='flex items-center bg-white p-2'>
                    <Popover.Button
                      onClick={() => navigate('/account')}
                      className='flex w-full items-center p-2 rounded-lg hover:bg-gray-50'
                    >
                      <PencilSquareIcon className='h-4 w-4' />
                      <p className='ml-3 text-base font-medium'>Edit Profile</p>
                    </Popover.Button>
                  </div>
                  <div className='flex items-center bg-gray-50 p-4'>
                    <Popover.Button
                      className='flex items-center text-sm font-medium text-primary'
                      // onClick={logout}
                    >
                      <ArrowLeftOnRectangleIcon className='h-4 w-4' />
                      <p className='ml-3 text-base font-medium text-primary'>
                        Sign out
                      </p>
                    </Popover.Button>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  )
}

export default Users

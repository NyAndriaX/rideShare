import React, { Fragment } from 'react'
import { styled } from 'styled-components'
import { Popover, Transition } from '@headlessui/react'
import { UserGroupIcon } from '@heroicons/react/20/solid'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'

const IconButton = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  border-radius: 100%;
`

interface PassengerProps {
  watch: any
  setValue: any
}

const Passenger: React.FC<PassengerProps> = ({ watch, setValue }) => {
  const passenger = watch('passenger')

  const IncrementPassenger = async () => {
    setValue('passenger', passenger >= 4 ? 4 : passenger + 1)
  }

  const DecrementPassenger = async () => {
    setValue('passenger', passenger <= 1 ? 1 : passenger - 1)
  }

  return (
    <div className='flex flex-col w-full'>
      <Popover className='relative'>
        {({}) => (
          <>
            <Popover.Button
              className={`
                group flex flex-row items-center gap-2 w-full border border-gray-200 rounded-md bg-gray-50 z-1 px-4 py-4 text-lg font-medium`}
            >
              <UserGroupIcon className='w-6 h-6 text-blue-500' />
              <div className='flex flex-row items-center gap-1 text-lg text-blue-900'>
                <span>{passenger}</span>
                <span>{passenger > 1 ? 'passengers' : 'passenger'}</span>
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute z-10 left-2/4 top-14 mt-3 w-full -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl'>
                <div className='overflow-hidden rounded-lg border border-gray-200'>
                  <div className='flex flex-row items-center justify-between relative gap-8 bg-white px-4 py-2'>
                    <div className='text-lg font-semibold text-blue-900'>
                      Passenger
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                      <IconButton onClick={DecrementPassenger}>
                        <MinusCircleIcon
                          className={`h-8 w-8 ${passenger <= 1 ? 'text-gray-200 cursor-default' : 'text-blue-500 cursor-pointer'}`}
                        />
                      </IconButton>
                      <span className='text-lg font-semibold text-blue-900'>
                        {passenger}
                      </span>
                      <IconButton onClick={IncrementPassenger}>
                        <PlusCircleIcon
                          className={`h-8 w-8  ${passenger >= 4 ? 'text-gray-200 cursor-default' : 'text-blue-500 cursor-pointer'}`}
                        />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default Passenger

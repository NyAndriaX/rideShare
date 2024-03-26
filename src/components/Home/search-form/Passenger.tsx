import React, { useState, Fragment } from 'react'
import { ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { UsersIcon } from '@heroicons/react/24/outline'
import { Button } from './Button.styled'
import { Transition, Dialog } from '@headlessui/react'

const Passenger: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  return (
    <React.Fragment>
      <Button
        type='button'
        className='flex flex-row justify-between'
        onClick={openModal}
      >
        <span className='flex flex-row gap-2'>
          1
          <UsersIcon className='h-5 w-5' />
          Passenger
        </span>
        <span>
          <ChevronUpDownIcon className='h-5 w-5' />
        </span>
      </Button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>
          <div className='fixed inset-0'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg leading-6 text-primary font-bold'
                  >
                    when do you want to come back ?
                  </Dialog.Title>
                  <div className='mt-4 '></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  )
}

export default Passenger

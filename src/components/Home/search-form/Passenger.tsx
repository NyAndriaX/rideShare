import React, { Fragment, useState } from 'react'
import Button from '@/components/common/Button/Button'
import {
  PlusCircleIcon,
  MinusCircleIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/24/outline'
import { UsersIcon } from '@heroicons/react/24/outline'
import { Button as ButtonStyled } from './Button.styled'
import { Dialog, Transition } from '@headlessui/react'
import { FormSearch } from '@/types/interface'

interface PassengerProps {
  formSearch: FormSearch
  setFormSearch: React.Dispatch<React.SetStateAction<FormSearch>>
}

const Passenger: React.FC<PassengerProps> = ({ formSearch, setFormSearch }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const updatedTotalPassengers = (): number => {
    return (
      formSearch.passenger.adult +
      formSearch.passenger.child +
      formSearch.passenger.baby +
      formSearch.passenger.reducedmobilitypassengers
    )
  }

  const updatedTotalStandardPassengers = (): number => {
    return (
      formSearch.passenger.adult +
      formSearch.passenger.child +
      formSearch.passenger.baby
    )
  }

  const reduceAdult = () => {
    if (formSearch.passenger.adult > 0) {
      setFormSearch({
        ...formSearch,
        passenger: {
          ...formSearch.passenger,
          adult: formSearch.passenger.adult - 1,
          totalstandardpassengers: updatedTotalStandardPassengers(),
          totalpassengers: updatedTotalPassengers(),
        },
      })
    }
  }

  const addAdult = () => {
    setFormSearch({
      ...formSearch,
      passenger: {
        ...formSearch.passenger,
        adult: formSearch.passenger.adult + 1,
        totalstandardpassengers: updatedTotalStandardPassengers(),
        totalpassengers: updatedTotalPassengers(),
      },
    })
  }

  const reduceChild = () => {
    if (formSearch.passenger.child > 0) {
      setFormSearch({
        ...formSearch,
        passenger: {
          ...formSearch.passenger,
          child: formSearch.passenger.child - 1,
          totalstandardpassengers: updatedTotalStandardPassengers(),
          totalpassengers: updatedTotalPassengers(),
        },
      })
    }
  }

  const addChild = () => {
    setFormSearch({
      ...formSearch,
      passenger: {
        ...formSearch.passenger,
        child: formSearch.passenger.child + 1,
        totalstandardpassengers: updatedTotalStandardPassengers(),
        totalpassengers: updatedTotalPassengers(),
      },
    })
  }

  const reduceBaby = () => {
    if (formSearch.passenger.baby > 0) {
      setFormSearch({
        ...formSearch,
        passenger: {
          ...formSearch.passenger,
          baby: formSearch.passenger.baby - 1,
          totalstandardpassengers: updatedTotalStandardPassengers(),
          totalpassengers: updatedTotalPassengers(),
        },
      })
    }
  }
  const addBaby = () => {
    setFormSearch({
      ...formSearch,
      passenger: {
        ...formSearch.passenger,
        adult: formSearch.passenger.adult + 1,
        totalstandardpassengers: updatedTotalStandardPassengers(),
        totalpassengers: updatedTotalPassengers(),
      },
    })
  }

  const reduceReducedMobilityPassengers = () => {
    if (formSearch.passenger.reducedmobilitypassengers > 0) {
      setFormSearch({
        ...formSearch,
        passenger: {
          ...formSearch.passenger,
          reducedmobilitypassengers:
            formSearch.passenger.reducedmobilitypassengers - 1,
          totalpassengers: updatedTotalPassengers(),
        },
      })
    }
  }
  const addReducedMobilityPassengers = () => {
    setFormSearch({
      ...formSearch,
      passenger: {
        ...formSearch.passenger,
        reducedmobilitypassengers:
          formSearch.passenger.reducedmobilitypassengers + 1,
        totalpassengers: updatedTotalPassengers(),
      },
    })
  }

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return (
    <React.Fragment>
      <ButtonStyled
        type='button'
        className='flex flex-row justify-between'
        onClick={openModal}
      >
        <span className='flex flex-row gap-2'>
          {formSearch.passenger.totalpassengers}
          <UsersIcon className='h-5 w-5' />
          Passenger
        </span>
        <span>
          <ChevronUpDownIcon className='h-5 w-5' />
        </span>
      </ButtonStyled>
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
                <Dialog.Panel className=' flex flex-col gap-4 w-1/2 transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-xl leading-6 text-primary font-bold'
                  >
                    Passenger
                  </Dialog.Title>
                  <p className='text-base text-slateBlue'>
                    {formSearch.passenger.totalstandardpassengers} passenger (
                    {formSearch.passenger.reducedmobilitypassengers} passenger
                    with reduced mobility)
                  </p>
                  <div className='relative mt-1'>
                    <div className='relative w-full cursor-default overflow-hidden bg-white text-left sm:text-sm'>
                      <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-4'>
                          <ButtonStyled className='flex flex-row justify-between'>
                            <span className='flex flex-row gap-1 justify-center items-center'>
                              <span className='text-lg text-midnightBlue'>
                                Adult
                              </span>
                              (12+ ans)
                            </span>
                            <span className='flex flex-row gap-4'>
                              <button onClick={reduceAdult}>
                                <MinusCircleIcon className='h-6 w-6 text-primary' />
                              </button>
                              <span className='text-xl'>
                                {formSearch.passenger.adult}
                              </span>
                              <button onClick={addAdult}>
                                <PlusCircleIcon className='h-6 w-6 text-primary' />
                              </button>
                            </span>
                          </ButtonStyled>
                          <ButtonStyled className='flex flex-row justify-between'>
                            <span className='flex flex-row gap-2 justify-center items-center'>
                              <span className='text-lg text-midnightBlue'>
                                Child
                              </span>
                              (4-11ans)
                            </span>
                            <span className='flex flex-row gap-4'>
                              <button onClick={reduceChild}>
                                <MinusCircleIcon className='h-6 w-6 text-primary' />
                              </button>
                              <span className='text-xl'>
                                {formSearch.passenger.child}
                              </span>
                              <button onClick={addChild}>
                                <PlusCircleIcon className='h-6 w-6 text-primary' />
                              </button>
                            </span>
                          </ButtonStyled>
                          <ButtonStyled className='flex flex-row justify-between'>
                            <span className='flex flex-row gap-1 justify-center items-center'>
                              <span className='text-lg text-midnightBlue'>
                                baby
                              </span>
                              (0-3ans)
                            </span>
                            <span className='flex flex-row gap-4'>
                              <button onClick={reduceBaby}>
                                <MinusCircleIcon className='h-6 w-6 text-primary' />
                              </button>
                              <span className='text-xl'>
                                {formSearch.passenger.baby}
                              </span>
                              <button onClick={addBaby}>
                                <PlusCircleIcon className='h-6 w-6 text-primary' />
                              </button>
                            </span>
                          </ButtonStyled>
                        </div>
                        <div>
                          <ButtonStyled className='flex flex-row justify-between'>
                            <span className='flex flex-row gap-1 justify-center items-center'>
                              <span className='text-lg text-midnightBlue'>
                                Passender width reducer mobility
                              </span>
                            </span>
                            <span className='flex flex-row gap-4'>
                              <button onClick={reduceReducedMobilityPassengers}>
                                <MinusCircleIcon className='h-6 w-6 text-primary' />
                              </button>
                              <span className='text-xl'>
                                {formSearch.passenger.reducedmobilitypassengers}
                              </span>
                              <button onClick={addReducedMobilityPassengers}>
                                <PlusCircleIcon className='h-6 w-6 text-primary' />
                              </button>
                            </span>
                          </ButtonStyled>
                        </div>
                        <Button
                          type='submit'
                          text='Submit'
                          className='bg-yellow text-black font-semibold'
                        />
                      </div>
                    </div>
                  </div>
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

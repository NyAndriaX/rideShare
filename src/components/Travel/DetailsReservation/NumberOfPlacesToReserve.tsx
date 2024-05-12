import React, { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { BoltIcon } from '@heroicons/react/24/outline'
import Button from '@/components/common/Button/Button'
import Input from '@/components/common/Input/Input'
import { useNavigate } from 'react-router-dom'
import {
  CheckIcon,
  ChevronDownIcon,
  TicketIcon,
} from '@heroicons/react/20/solid'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

const people = [{ name: '1 place' }, { name: '2 place' }, { name: '3 place' }]

const NumberOfPlacesToReserve: React.FC = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(people[0])

  return (
    <div className='flex flex-col w-full gap-4'>
      <div className='flex flex-row gap-2 items-center text-blue-900'>
        <div className='border border-solid border-yellow p-1 w-fit rounded-full'>
          <BoltIcon className='h-5 w-5 text-yellow' />
        </div>
        <span>
          Votre réservation sera{' '}
          <span className='font-semibold'>automatiquement</span> confirmée
        </span>
      </div>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <Listbox.Button className='relative w-full cursor-default rounded-md bg-white border border-gray-100 text-blue-900 py-3 px-4 text-left focus:border-blue-900'>
            <span className='block truncate'>{selected.name}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <div className='flex flex-row gap-4 items-start'>
        <div>
          <Input type='checkbox' />
        </div>
        <div className='text-base text-blue-900'>
          I accept the{' '}
          <span className='text-blue-500 cursor-pointer'>
            General conditions
          </span>{' '}
          and the
          <span className='text-blue-500 cursor-pointer'>Privacy Policy</span>
        </div>
      </div>
      <Button
        type='button'
        onClick={() => navigate('/app/payement')}
        text='Reserve'
        className='bg-yellow text-blue-900 font-semibold'
      />
      <div className='flex flex-row gap-2 justify-center items-center text-blue-900 cursor-pointer'>
        <TicketIcon className='h-6 w-6' />
        <span>Guaranteed arrival at destination</span>
        <QuestionMarkCircleIcon className='h-6 w-6 text-blue-500' />
      </div>
    </div>
  )
}

export default NumberOfPlacesToReserve

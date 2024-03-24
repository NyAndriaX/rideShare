import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  useCountryActions,
  useCurrentCountryState,
} from '@/stores/use-contry-store'
import { countriesData } from '@/data/countries-data'
import Flag from 'react-flagkit'

const SetCountry: React.FC = () => {
  const currentCountry = useCurrentCountryState()
  const { setCurrentCountry } = useCountryActions()

  return (
    <Listbox value={currentCountry} onChange={setCurrentCountry}>
      <div className='relative mt-1'>
        <Listbox.Button className='relative w-20 cursor-default  py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
          <span className='truncate'>
            <Flag country={currentCountry} size={20} />
          </span>
          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center '>
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
          <Listbox.Options className='absolute right-0 mt-1 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
            {countriesData.map((country, countryIdx) => (
              <Listbox.Option
                key={countryIdx}
                className={({ active }) =>
                  `relative w-52 cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={country.code}
              >
                {({ selected }) => (
                  <div className='flex flex-row items-center justify-between'>
                    <span>{country.name}</span>
                    <span>
                      <Flag country={country.code} size={20} />
                    </span>
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default SetCountry
{
  /*  */
}

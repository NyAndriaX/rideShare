import React, { useState, useEffect, Fragment } from 'react'
import {
  MapIcon,
  ChevronUpDownIcon,
  CheckIcon,
} from '@heroicons/react/20/solid'
import { Button } from './Button.styled'
import { countriesData } from '@/data/countries-data'
import { useCurrentCountryState } from '@/stores/use-contry-store'
import { Dialog, Transition, Combobox } from '@headlessui/react'
import { FormSearch, ErrorFormSearch } from '@/types/interface'

interface DepartureCityProps {
  formSearch: FormSearch
  errorFormSearch: ErrorFormSearch
  setFormSearch: React.Dispatch<React.SetStateAction<FormSearch>>
  setErrorFormSearch: React.Dispatch<React.SetStateAction<ErrorFormSearch>>
}

const DepartureCity: React.FC<DepartureCityProps> = ({
  formSearch,
  errorFormSearch,
  setFormSearch,
  setErrorFormSearch,
}) => {
  const [query, setQuery] = useState<string>('')
  const currentCountry = useCurrentCountryState()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentProvince, setCurrentProvince] = useState<string[] | []>([])

  const filteredProvince =
    query === ''
      ? currentProvince
      : currentProvince.filter((province) =>
          province
            .toLocaleLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLocaleLowerCase().replace(/\s+/g, '')),
        )

  useEffect(() => {
    const filteredCountries = countriesData.filter(
      (country) => country.code === currentCountry,
    )

    const provinces =
      filteredCountries.length > 0 ? filteredCountries[0].province : []

    setCurrentProvince(provinces)
  }, [currentCountry])

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  const handleDepartureCityChange = (event: string) => {
    setErrorFormSearch((prevState) => ({
      ...prevState,
      departureCity: false,
    }))
    setFormSearch({ ...formSearch, departureCity: event })
  }

  return (
    <React.Fragment>
      <div className='flex flex-col w-full'>
        <Button
          type='button'
          className={`border ${errorFormSearch.departureCity ? 'border-red-500' : 'border-lightGrey'}`}
          onClick={openModal}
        >
          <MapIcon className='h-5 w-5 text-primary' />
          {formSearch.departureCity
            ? formSearch.departureCity
            : 'Departure city'}
        </Button>
        {errorFormSearch.departureCity && (
          <p role='alert' className='text-sm text-red-500 font-semibold'>
            Departure city cannot be empty
          </p>
        )}
      </div>
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
                <Dialog.Panel
                  className=' w-1/2 transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all'
                  style={{ height: '50vh' }}
                >
                  <Dialog.Title
                    as='h3'
                    className='text-xl leading-6 text-primary font-bold'
                  >
                    Where are you leaving from?
                  </Dialog.Title>
                  <div className='mt-4'>
                    <Combobox
                      value={formSearch.departureCity}
                      onChange={(event) => handleDepartureCityChange(event)}
                    >
                      <div className='relative mt-1'>
                        <div className='relative w-full cursor-default overflow-hidden bg-white text-left sm:text-sm'>
                          <Combobox.Input
                            className='w-full py-3 border border-slateBlue rounded-md pl-3 pr-10 text-sm text-midnightBlue'
                            displayValue={(country: string) => country}
                            onChange={(event) => setQuery(event.target.value)}
                          />
                          <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
                            <ChevronUpDownIcon
                              className='h-5 w-5 text-gray-400'
                              aria-hidden='true'
                            />
                          </Combobox.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          leave='transition ease-in duration-100'
                          leaveFrom='opacity-100'
                          leaveTo='opacity-0'
                          afterLeave={() => setQuery('')}
                        >
                          <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                            {filteredProvince.length === 0 && query !== '' ? (
                              <div className='relative cursor-default select-none px-4 py-2 text-gray-700'>
                                Nothing found.
                              </div>
                            ) : (
                              filteredProvince.map((province) => (
                                <Combobox.Option
                                  key={province}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? 'bg-teal-600 text-white'
                                        : 'text-gray-900'
                                    }`
                                  }
                                  value={province}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? 'font-medium'
                                            : 'font-normal'
                                        }`}
                                      >
                                        {province}
                                      </span>
                                      {selected ? (
                                        <span
                                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                            active
                                              ? 'text-white'
                                              : 'text-teal-600'
                                          }`}
                                        >
                                          <CheckIcon
                                            className='h-5 w-5'
                                            aria-hidden='true'
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Combobox.Option>
                              ))
                            )}
                          </Combobox.Options>
                        </Transition>
                        <p className='text-primary text-lg mt-2 ml-2 font-semibold'>
                          recent
                        </p>
                      </div>
                    </Combobox>
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

export default DepartureCity

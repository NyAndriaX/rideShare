import React, {
  useState,
  useEffect,
  Fragment,
  Dispatch,
  SetStateAction,
} from 'react'
import { countriesData } from '@/data/countries-data'
import { Button } from './Button.styled'
import {
  MapPinIcon,
  ChevronUpDownIcon,
  CheckIcon,
} from '@heroicons/react/24/outline'
import { useCurrentCountryState } from '@/stores/use-contry-store'
import { Dialog, Transition, Combobox } from '@headlessui/react'

interface CityOfArrivalProps {
  formSearch: {
    departureCity: string
    cityOfArrival: string
  }
  setFormSearch: Dispatch<
    SetStateAction<{
      departureCity: string
      cityOfArrival: string
    }>
  >
}

const CityOfArrival: React.FC<CityOfArrivalProps> = ({
  formSearch,
  setFormSearch,
}) => {
  const [query, setQuery] = useState<string>('')
  const currentCountry = useCurrentCountryState()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentRegion, setCurrentRegion] = useState<string[] | []>([])

  const filteredRegion =
    query === ''
      ? currentRegion
      : currentRegion.filter((region) =>
          region
            .toLocaleLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLocaleLowerCase().replace(/\s+/g, '')),
        )

  useEffect(() => {
    const filteredCountries = countriesData.filter(
      (country) => country.code === currentCountry,
    )

    const regions =
      filteredCountries.length > 0 ? filteredCountries[0].regions : []

    setCurrentRegion(regions)
  }, [currentCountry])

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return (
    <React.Fragment>
      <Button type='button' onClick={openModal}>
        <MapPinIcon className='h-5 w-5 text-primary' />
        {formSearch.cityOfArrival
          ? formSearch.cityOfArrival
          : 'city of arrival'}
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
                    Where do you want to go?
                  </Dialog.Title>
                  <div className='mt-4 h-32'>
                    <Combobox
                      value={formSearch.cityOfArrival}
                      onChange={(event) =>
                        setFormSearch({ ...formSearch, cityOfArrival: event })
                      }
                    >
                      <div className='relative mt-1'>
                        <div className='relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
                          <Combobox.Input
                            className='w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0'
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
                            {filteredRegion.length === 0 && query !== '' ? (
                              <div className='relative cursor-default select-none px-4 py-2 text-gray-700'>
                                Nothing found.
                              </div>
                            ) : (
                              filteredRegion.map((region) => (
                                <Combobox.Option
                                  key={region}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? 'bg-teal-600 text-white'
                                        : 'text-gray-900'
                                    }`
                                  }
                                  value={region}
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
                                        {region}
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

export default CityOfArrival

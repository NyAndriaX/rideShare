import React, { Fragment } from 'react'
import { DayPicker } from 'react-day-picker'
import { formatDate } from '@/utils/formatDate'
import { Popover, Transition } from '@headlessui/react'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'

interface DateOfDepartureProps {
  watch: any
  setValue: any
}

const DateOfDeparture: React.FC<DateOfDepartureProps> = ({
  watch,
  setValue,
}) => {
  const dateOfDeparture = watch('dateOfDeparture')

  return (
    <div className='flex flex-col w-full'>
      <Popover className='relative'>
        {({ close }) => (
          <>
            <Popover.Button
              className={`
                group flex flex-row items-center gap-2 w-full my-2 border border-gray-200 rounded-md bg-gray-50 z-1 px-4 py-3 text-lg font-medium`}
            >
              <CalendarDaysIcon className='w-6 h-6 text-blue-500' />
              <span className='text-lg text-blue-900'>
                {formatDate(new Date(dateOfDeparture))}
              </span>
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
              <Popover.Panel className='absolute z-10 left-2/4 ml-7 top-14 mt-3 min-w-[350px] w-full -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl'>
                <div className='overflow-hidden rounded-lg border border-gray-200'>
                  <div className='flex flex-row items-center justify-between relative gap-8 bg-white px-4 py-2'>
                    <DayPicker
                      mode='single'
                      captionLayout='dropdown-buttons'
                      fromYear={2024}
                      toYear={2050}
                      selected={
                        dateOfDeparture ? new Date(dateOfDeparture) : undefined
                      }
                      onSelect={(date) => {
                        setValue('dateOfDeparture', date), close()
                      }}
                      numberOfMonths={1}
                      pagedNavigation
                    />
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

export default DateOfDeparture

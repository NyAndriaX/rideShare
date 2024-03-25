import React from 'react'
import { ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { UsersIcon } from '@heroicons/react/24/outline'
import { Button } from './Button.styled'

const Passenger: React.FC = () => {
  return (
    <React.Fragment>
      <Button type='button' className='flex flex-row justify-between'>
        <span className='flex flex-row gap-2'>
          1
          <UsersIcon className='h-5 w-5' />
          Passenger
        </span>
        <span>
          <ChevronUpDownIcon className='h-5 w-5' />
        </span>
      </Button>
    </React.Fragment>
  )
}

export default Passenger

import React from 'react'
import { Button } from './Button.styled'
import { MapPinIcon } from '@heroicons/react/24/outline'

const CityOfArrival: React.FC = () => {
  return (
    <React.Fragment>
      <Button type='button'>
        <MapPinIcon className='h-5 w-5 text-primary' />
        city of arrival
      </Button>
    </React.Fragment>
  )
}

export default CityOfArrival

import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import Input from '@/components/common/Input/Input'

interface DestinationPreciseProps {
  register: any
  isDirty: any
  errors: any
}

const DestinationPrecise: React.FC<DestinationPreciseProps> = ({
  register,
  errors,
  isDirty,
}) => {
  return (
    <div className='flex flex-col w-full'>
      <Input
        type='text'
        {...register('destinationPrecise', {
          required: 'This field is required',
        })}
        error={errors.destinationPrecise?.message}
        placeholder='Destination'
        ariaInvalid={isDirty}
        icon={<MapPinIcon className='h-6 w-6 text-blue-500' />}
        autoComplete='off'
      />
    </div>
  )
}
export default DestinationPrecise

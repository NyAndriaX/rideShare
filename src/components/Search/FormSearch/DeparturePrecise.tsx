import React from 'react'
import { MapIcon } from '@heroicons/react/20/solid'
import Input from '@/components/common/Input/Input'

interface DeparturePreciseProps {
  register: any
  isDirty: any
  errors: any
}

const DeparturePrecise: React.FC<DeparturePreciseProps> = ({
  register,
  isDirty,
  errors,
}) => {
  return (
    <div className='flex flex-col w-full'>
      <Input
        type='text'
        {...register('departurePrecise', {
          required: 'This field is required',
        })}
        error={errors.departurePrecise?.message}
        ariaInvalid={isDirty}
        placeholder='Departure'
        icon={<MapIcon className='h-6 w-6 text-gray-300' />}
        autofocus
        autoComplete='off'
      />
    </div>
  )
}
export default DeparturePrecise

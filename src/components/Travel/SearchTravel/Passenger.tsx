import React from 'react'
import Input from '@/components/common/Input/Input'

interface PassengerProps {
  register: any
  isDirty: any
  errors: any
}

const Passenger: React.FC<PassengerProps> = ({ register, isDirty, errors }) => {
  return (
    <div className='flex flex-col w-full'>
      <Input
        type='number'
        {...register('passenger', {
          required: 'This field is required',
        })}
        error={errors.dateOfDeparture?.message}
        placeholder='Passenger'
        min={0}
        ariaInvalid={isDirty}
        autofocus
        autoComplete='off'
      />
    </div>
  )
}

export default Passenger

import React from 'react'
import Input from '@/components/common/Input/Input'

interface DateOfDepartureProps {
  register: any
  isDirty: any
  errors: any
}

const DateOfDeparture: React.FC<DateOfDepartureProps> = ({
  register,
  isDirty,
  errors,
}) => {
  return (
    <div className='flex flex-col w-full'>
      <Input
        type='date'
        {...register('dateOfDeparture', {
          required: 'This field is required',
        })}
        error={errors.dateOfDeparture?.message}
        placeholder='Date of departure'
        ariaInvalid={isDirty}
        autofocus
        autoComplete='off'
      />
    </div>
  )
}

export default DateOfDeparture

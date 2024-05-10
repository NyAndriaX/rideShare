import React from 'react'
import Input from '@/components/common/Input/Input'

interface ReturnOfDateProps {
  register: any
  isDirty: any
  errors: any
}

const ReturnOfDate: React.FC<ReturnOfDateProps> = ({
  register,
  isDirty,
  errors,
}) => {
  return (
    <div className='flex flex-col w-full'>
      <Input
        type='date'
        {...register('returnOfDate', {
          required: 'This field is required',
        })}
        error={errors.returnOfDate?.message}
        placeholder='Return of date'
        ariaInvalid={isDirty}
        autofocus
        autoComplete='off'
      />
    </div>
  )
}

export default ReturnOfDate

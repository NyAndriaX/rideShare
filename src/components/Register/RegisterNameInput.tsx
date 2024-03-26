import React from 'react'
import Input from '../common/Input/Input'
import Button from '../common/Button/Button'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useFormData } from '@/stores/use-form-store'
import { useFormActions } from '@/stores/use-form-store'

const RegisterNameInput: React.FC = () => {
  const formData = useFormData()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<{ firstName: string; lastName: string }>({
    mode: 'onSubmit',
    defaultValues: {
      firstName: formData?.firstName || '',
      lastName: formData?.lastName || '',
    },
  })
  const navigate = useNavigate()
  const { setFormData } = useFormActions()

  const submit = async (data: { firstName: string; lastName: string }) => {
    await setFormData(data)
    navigate('/register/dateofbirth')
  }

  return formData?.email ? (
    <div className='flex flex-col gap-8 w-1/2'>
      <p className='text-2xl font-bold text-midnightBlue text-center'>
        What is your name ?
      </p>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit((data) => submit(data))}
      >
        <Input
          {...register('firstName', {
            required: 'Your first name is required',
          })}
          error={errors.firstName?.message}
          ariaInvalid={isDirty}
          type='text'
          placeholder='First Name'
          autofocus
          autoComplete='on'
        />
        <Input
          {...register('lastName', {
            required: 'Your last name is required',
          })}
          error={errors.lastName?.message}
          ariaInvalid={isDirty}
          type='text'
          placeholder='Last Name'
          autofocus
          autoComplete='on'
        />
        <Button
          type='submit'
          text='Coninue'
          disabled={isSubmitting}
          className={`${isSubmitting && 'hidden'} rounded-md font-semibold text-midnightBlue bg-yellow`}
        />
      </form>
    </div>
  ) : (
    <Navigate to='/register/email' replace />
  )
}

export default RegisterNameInput

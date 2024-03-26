import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Input from '../common/Input/Input'
import Button from '../common/Button/Button'
import { useForm } from 'react-hook-form'
import { useFormData } from '@/stores/use-form-store'
import { useFormActions } from '@/stores/use-form-store'

const RegisterDateOfBirth: React.FC = () => {
  const formData = useFormData()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<{ dateOfBirth: Date }>({
    mode: 'onSubmit',
    defaultValues: {
      dateOfBirth: formData?.dateOfBirth || undefined,
    },
  })
  const navigate = useNavigate()
  const { setFormData } = useFormActions()

  const submit = async (data: { dateOfBirth: Date }) => {
    await setFormData(data)
    navigate('/register/genre')
  }

  return formData?.firstName || formData?.lastName ? (
    <div className='flex flex-col gap-8 w-1/2'>
      <p className='text-2xl font-bold text-midnightBlue text-center'>
        What's your birthday ?
      </p>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit((data) => submit(data))}
      >
        <Input
          {...register('dateOfBirth', {
            required: 'Your date of birth is required',
          })}
          error={errors.dateOfBirth?.message}
          ariaInvalid={isDirty}
          type='date'
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
    <Navigate to='/register/name' />
  )
}

export default RegisterDateOfBirth

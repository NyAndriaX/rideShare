import React from 'react'
import Input from '../common/Input/Input'
import Button from '../common/Button/Button'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useFormAuthData } from '@/stores/use-form-auth-store'
import { useFormAuthActions } from '@/stores/use-form-auth-store'

const RegisterNameInput: React.FC = () => {
  const formData = useFormAuthData()
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
  const { setFormAuthData } = useFormAuthActions()

  const submit = async (data: { firstName: string; lastName: string }) => {
    await setFormAuthData(data)
    navigate('/register/date-of-birth')
  }

  return formData?.email ? (
    <div className='flex flex-col gap-8 w-1/2'>
      <h1 className='text-blue-900'>What is your name ?</h1>
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
          autoComplete='on'
        />
        <Button
          type='submit'
          text='Continue'
          disabled={isSubmitting}
          className={`rounded-md font-semibold text-blue-900 bg-yellow`}
        />
      </form>
    </div>
  ) : (
    <Navigate to='/register/email' replace />
  )
}

export default RegisterNameInput

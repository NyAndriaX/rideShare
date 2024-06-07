import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Input from '../common/Input/Input'
import Button from '../common/Button/Button'
import { useForm } from 'react-hook-form'
import { useFormAuthData } from '@/stores/use-form-auth-store'
import { useFormAuthActions } from '@/stores/use-form-auth-store'

const RegisterDateOfBirth: React.FC = () => {
  const formData = useFormAuthData()
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
  const { setFormAuthData } = useFormAuthActions()

  const submit = async (data: { dateOfBirth: Date }) => {
    await setFormAuthData(data)
    navigate('/register/gender')
  }

  return formData?.firstName || formData?.lastName ? (
    <div className='flex flex-col gap-8 w-full md:w-1/2'>
      <h1 className='text-blue-900'>What's your birthday ?</h1>
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
          text='Continue'
          disabled={isSubmitting}
          className={`rounded-md font-semibold text-blue-900 bg-yellow`}
        />
      </form>
    </div>
  ) : (
    <Navigate to='/register/name' />
  )
}

export default RegisterDateOfBirth

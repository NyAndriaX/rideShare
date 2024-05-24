import React from 'react'
import Input from '../common/Input/Input'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useFormAuthData } from '@/stores/use-form-auth-store'
import { useFormAuthActions } from '@/stores/use-form-auth-store'
import { EMAIL_REGEX } from '@/constants/app-constants'
import Button from '../common/Button/Button'

const RegisterEmailInput: React.FC = () => {
  const formData = useFormAuthData()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<{ email: string; unsubscribe: boolean }>({
    mode: 'onSubmit',
    defaultValues: {
      email: formData?.email || '',
      unsubscribe: formData?.unsubscribe || false,
    },
  })
  const navigate = useNavigate()
  const { setFormAuthData } = useFormAuthActions()

  const submit = async (data: { email: string; unsubscribe: boolean }) => {
    await setFormAuthData(data)
    navigate('/register/name')
  }

  return (
    <div className='flex flex-col gap-8 w-1/2'>
      <h1 className='text-blue-900'>your email address ?</h1>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit((data) => submit(data))}
      >
        <Input
          {...register('email', {
            required: 'This email is required',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Invalid address. Try Again.',
            },
          })}
          error={errors.email?.message}
          ariaInvalid={isDirty}
          type='text'
          placeholder='E-mail'
          autofocus
          autoComplete='off'
        />
        <div className='flex flex-row justify-between items-center'>
          <p className='text-sm text-blue-900 font-semibold'>
            I do not wish to receive information, good deals and gifts from
            rideShare.
          </p>
          <input type='checkbox' {...register('unsubscribe')} />
        </div>
        <p className='text-sm text-gray-400 font-semibold'>
          As a subscriber, I can unsubscribe at any time by contacting rideShare
          or by clicking on the link in the newsletter.
        </p>
        <Button
          type='submit'
          text='Continue'
          disabled={isSubmitting}
          className={`rounded-md font-semibold text-blue-900 bg-yellow`}
        />
      </form>
    </div>
  )
}

export default RegisterEmailInput

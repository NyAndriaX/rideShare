import React from 'react'
import Input from '../common/Input/Input'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useFormData } from '@/stores/use-form-store'
import { useFormActions } from '@/stores/use-form-store'
import { EMAIL_REGEX } from '@/constants/app-constants'
import Button from '../common/Button/Button'

const RegisterEmailInput: React.FC = () => {
  const formData = useFormData()
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
  const { setFormData } = useFormActions()

  console.log(formData)

  const submit = async (data: { email: string; unsubscribe: boolean }) => {
    await setFormData(data)
    navigate('/register/name')
  }

  return (
    <div className='flex flex-col gap-8 w-1/2'>
      <p className='text-2xl font-bold text-midnightBlue text-center'>
        your email address ?
      </p>
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
          <p className='text-sm text-midnightBlue font-semibold'>
            I do not wish to receive information, good deals and gifts from
            rideShare.
          </p>
          <input type='checkbox' {...register('unsubscribe')} />
        </div>
        <p className='text-sm text-slateBlue font-semibold'>
          As a subscriber, I can unsubscribe at any time by contacting rideShare
          or by clicking on the link in the newsletter.
        </p>
        <Button
          type='submit'
          text='Coninue'
          disabled={isSubmitting}
          className={`${isSubmitting && 'hidden'} rounded-md font-semibold text-midnightBlue bg-yellow`}
        />
      </form>
    </div>
  )
}

export default RegisterEmailInput

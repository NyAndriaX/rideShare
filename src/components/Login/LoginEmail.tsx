import React from 'react'
import Input from '../common/Input/Input'
import { useForm } from 'react-hook-form'
import { useAuthActions } from '@/stores/use-auth-store'
// import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { EMAIL_REGEX } from '@/constants/app-constants'
import Button from '../common/Button/Button'

const LoginEmail: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<{ email: string; password: string; saveAccount: boolean }>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      saveAccount: false,
    },
  })
  const { login } = useAuthActions()
  // const navigate = useNavigate()

  const submit = async (data: { email: string; password: string }) => {
    try {
      const res = await login(data)
      console.log(res)
    } catch (e: any) {
      toast.error(e.response?.data.message)
    } finally {
    }
  }

  return (
    <div className='flex flex-col gap-8 w-1/2'>
      <p className='text-2xl font-bold text-midnightBlue text-center'>Log in</p>
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
        <Input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password needs to be between 6 to 20 characters',
            },
            maxLength: {
              value: 20,
              message: 'Password needs to be between 6 to 20 characters',
            },
          })}
          error={errors.password?.message}
          ariaInvalid={isDirty}
          type='text'
          placeholder='Password'
          autofocus
          autoComplete='on'
        />
        <div className='flex flex-row justify-between items-center'>
          <p className='text-sm text-midnightBlue font-semibold'>Remember me</p>
          <input type='checkbox' {...register('saveAccount')} />
        </div>
        <p className='text-sm text-primary font-semibold cursor-pointer'>
          Forgot my password ?
        </p>
        <Button
          type='submit'
          text='Connexion'
          disabled={isSubmitting}
          className={`${isSubmitting && 'hidden'} rounded-md font-semibold text-midnightBlue bg-yellow`}
        />
      </form>
    </div>
  )
}
export default LoginEmail

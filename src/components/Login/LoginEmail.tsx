import React, { useState } from 'react'
import Input from '../common/Input/Input'
import { useForm } from 'react-hook-form'
import { useAuthActions } from '@/stores/use-auth-store'
// import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { EMAIL_REGEX } from '@/constants/app-constants'
import Button from '../common/Button/Button'
import AnimationCircleLoading from '../common/Animation/AnimationCircleLoading'

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
  // const navigate = useNavigate()
  const { login } = useAuthActions()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const submit = async (formValue: { email: string; password: string }) => {
    setIsLoading(true)
    try {
      await login(formValue)
      window.location.href = '/'
    } catch (e: any) {
      toast.error(e.response?.data.message || e.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex flex-col gap-8 w-1/2'>
      <h1 className='text-blue-900'>Log in</h1>
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
          autoComplete='off'
        />
        <Input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password needs to be between 8 to 20 characters',
            },
            maxLength: {
              value: 20,
              message: 'Password needs to be between 8 to 20 characters',
            },
          })}
          error={errors.password?.message}
          ariaInvalid={isDirty}
          type='password'
          placeholder='Password'
          autoComplete='on'
        />
        <div className='flex flex-row justify-between items-center'>
          <p className='text-sm text-blue-900 font-semibold'>Remember me</p>
          <input type='checkbox' {...register('saveAccount')} />
        </div>
        <p className='text-sm text-blue-500 font-semibold cursor-pointer'>
          Forgot my password ?
        </p>
        {isLoading ? (
          <AnimationCircleLoading height={100} width={100} />
        ) : (
          <Button
            type='submit'
            text='Connexion'
            disabled={isSubmitting}
            className={`rounded-md font-semibold text-blue-900 bg-yellow`}
          />
        )}
      </form>
    </div>
  )
}
export default LoginEmail

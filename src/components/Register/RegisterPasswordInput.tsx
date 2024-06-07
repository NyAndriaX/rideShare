import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import Input from '../common/Input/Input'
import { useForm } from 'react-hook-form'
import { RegisterInput } from '@/types/interface'
import Button from '../common/Button/Button'
import { useFormAuthData } from '@/stores/use-form-auth-store'
import { useAuthActions } from '@/stores/use-auth-store'
import AnimationCircleLoading from '@/components/common/Animation/AnimationCircleLoading'
import { toast } from 'react-toastify'

const RegisterPasswordInput: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<{ password: string }>({
    mode: 'onSubmit',
    defaultValues: { password: '' },
  })
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const formData = useFormAuthData()
  const authStoreAction = useAuthActions()

  const submit = async (data: { password: string }) => {
    setIsLoading(true)
    try {
      const statusText = await authStoreAction.register({
        ...formData,
        ...data,
      } as RegisterInput)
      statusText === 'Created' && toast.success('Register success')
      navigate('/login')
    } catch (e: any) {
      toast.error(e.response?.data?.message || e.message)
    } finally {
      setIsLoading(false)
    }
  }

  return formData?.gender ? (
    <div className='flex flex-col gap-8 w-full md:w-1/2'>
      <h1 className='text-blue-900'>choose your password</h1>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit((data) => submit(data))}
      >
        <p className='text-sm text-gray-400 font-semibold'>
          He needs to be between 8 to 20 characters.
        </p>
        <Input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password needs to be between 8 to 20 characters',
            },
            maxLength: {
              value: 20,
              message: 'Password needs to be between 6 to 20 characters',
            },
          })}
          error={errors.password?.message}
          ariaInvalid={isDirty}
          type='password'
          placeholder='Password'
          autofocus
          autoComplete='on'
        />
        {isLoading ? (
          <AnimationCircleLoading height={100} width={100} />
        ) : (
          <Button
            type='submit'
            text='Register'
            disabled={isSubmitting}
            className={` rounded-md font-semibold text-blue-900 bg-yellow`}
          />
        )}
      </form>
    </div>
  ) : (
    <Navigate to='/register/genre' />
  )
}

export default RegisterPasswordInput

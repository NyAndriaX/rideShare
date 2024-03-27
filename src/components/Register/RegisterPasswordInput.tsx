import React from 'react'
import { Navigate } from 'react-router-dom'
import Input from '../common/Input/Input'
import { useForm } from 'react-hook-form'
import { RegisterInput } from '@/types/interface'
import Button from '../common/Button/Button'
import { useFormData } from '@/stores/use-form-store'
import { useFormActions } from '@/stores/use-form-store'
import { useAuthActions } from '@/stores/use-auth-store'
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
  const formData = useFormData()
  const { resetDataState } = useFormActions()
  const authStoreAction = useAuthActions()

  const submit = async (data: { password: string }) => {
    try {
      const res = await authStoreAction.register({
        ...formData,
        ...data,
      } as RegisterInput)
      console.log(res)
      resetDataState()
    } catch (e: any) {
      toast.error(e.response?.data.message)
    } finally {
    }
  }

  return formData?.genre ? (
    <div className='flex flex-col gap-8 w-1/2'>
      <p className='text-2xl font-bold text-midnightBlue text-center'>
        choose your password
      </p>
      <form
        className='flex flex-col gap-6'
        onSubmit={handleSubmit((data) => submit(data))}
      >
        <p className='text-sm text-slateBlue font-semibold'>
          He needs to be between 6 to 20 characters.
        </p>
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
          type='password'
          placeholder='Password'
          autofocus
          autoComplete='on'
        />
        <Button
          type='submit'
          text='Register'
          disabled={isSubmitting}
          className={`${isSubmitting && 'hidden'} rounded-md font-semibold text-midnightBlue bg-yellow`}
        />
      </form>
    </div>
  ) : (
    <Navigate to='/register/genre' />
  )
}

export default RegisterPasswordInput

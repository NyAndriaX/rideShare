import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { User } from '@/types/interface'
import 'react-international-phone/style.css'
import { useNavigate } from 'react-router-dom'
import { useUserInfo } from '@/stores/use-auth-store'
import {
  useFormTripsData,
  useFormTripsActions,
} from '@/stores/use-form-trips-store'
import Button from '../common/Button/Button'
import { FormTripsData } from '@/types/interface'
import { PhoneInput } from 'react-international-phone'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { useTravelManageActions } from '@/stores/use-travel-manage-store'
import AnimationCircleLoading from '../common/Animation/AnimationCircleLoading'

const phoneUtil = PhoneNumberUtil.getInstance()

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
  } catch (error) {
    return false
  }
}

const PhoneVerificationFill: React.FC = () => {
  const navigate = useNavigate()
  const user: User | null = useUserInfo()
  const formTripsData = useFormTripsData()
  const { create } = useTravelManageActions()
  const [counter, setCounter] = useState<number>(0)
  const { setFormTripsData } = useFormTripsActions()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [phoneNumber, setPhoneNumber] = useState<string>(
    formTripsData?.phoneNumber ?? '',
  )
  const [countValueChanged, setCountValueChanged] = useState<number>(0)
  const [inputValueChanged, setInputValueChanged] = useState<boolean>(false)
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false)

  const isValid = isPhoneValid(phoneNumber)

  const handleChangePhoneNumber = async (phone: string) => {
    await setPhoneNumber(phone)
    await setCountValueChanged((prev) => prev + 1)
    countValueChanged > 0 && setInputValueChanged(true)
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null

    if (showConfirmation && counter > 0) {
      intervalId = setInterval(() => {
        setCounter((prev) => prev - 1)
      }, 1000)
    } else {
      setCounter(0)
      setShowConfirmation(false)
    }

    return () => {
      clearInterval(intervalId!)
    }
  }, [showConfirmation, counter])

  const onSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      setInputValueChanged(true)
      if (inputValueChanged && isValid) {
        if (counter > 0) {
          await setFormTripsData({
            phoneNumber: phoneNumber,
          } as Partial<FormTripsData>)
          if (user && user.userId) {
            const { statusText } = await create(
              user.userId,
              formTripsData as Partial<FormTripsData>,
            )
            statusText === 'Created' && toast.success('Creation success')
            setCounter(0)
            setShowConfirmation(false)
            navigate('/')
          } else {
            setCounter(0)
            setShowConfirmation(false)
            toast.error('Please, log in again')
          }
        } else {
          setCounter(10)
          setShowConfirmation(true)
        }
      }
    } catch (e: any) {
      toast.error(e.response?.data.message || e.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>Enter your phone number</h1>
      <form className='flex flex-col gap-6' onSubmit={(e) => onSubmit(e)}>
        <div className='flex flex-col gap-1'>
          <PhoneInput
            defaultCountry='mg'
            value={phoneNumber}
            onChange={(phone) => handleChangePhoneNumber(phone)}
            className={`${inputValueChanged && !isValid ? 'errors' : ''}`}
          />
          {inputValueChanged && !isValid && (
            <span role='alert' className='text-sm text-red-500'>
              please, telephone numbers are required and must be valid
            </span>
          )}
        </div>
        {isLoading ? (
          <AnimationCircleLoading height={100} width={100} />
        ) : (
          <Button
            type='submit'
            text={`${showConfirmation ? `Are you sure ? ${counter}s` : 'Publish'}`}
            className={`rounded-md font-semibold text-blue-900 bg-yellow`}
          />
        )}
      </form>
    </div>
  )
}
export default PhoneVerificationFill

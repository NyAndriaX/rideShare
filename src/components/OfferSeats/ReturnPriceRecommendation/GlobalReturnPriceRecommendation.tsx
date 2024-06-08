import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import {
  useFormTripsData,
  useFormTripsActions,
} from '@/stores/use-form-trips-store'
import { useNavigate } from 'react-router-dom'
import {
  ChevronRightIcon,
  PencilSquareIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import { FormTripsData } from '@/types/interface'
import { formatPriceToDisplay } from '@/utils/formatPriceToDisplay'

const IconButton = styled.button`
  width: fit-content;
  height: fit-content;
`

const ContainerPrice = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const ContainerOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 0.375rem;
  cursor: pointer;
  align-items: center;
  padding: 1rem;
`

const TextOptions = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
`

const GlobalReturnPriceRecommendation: React.FC = () => {
  const navigate = useNavigate()
  const formTripsData = useFormTripsData()
  const departureStops = formTripsData?.departureStops ?? []
  const recommendedPrice: number =
    departureStops && departureStops.length !== 0
      ? departureStops.length * 1000
      : 1000
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const { setFormTripsData } = useFormTripsActions()
  const [returnPrice, setReturnPrice] = useState<number>(
    formTripsData?.returnPrice || recommendedPrice,
  )
  const [inputValues, setInputValues] = useState<number>(returnPrice)

  useEffect(() => {
    setInputValues(returnPrice)
  }, [returnPrice])

  const handleEdit = () => {
    setIsEdit(true)
  }

  const handleCancel = () => {
    setIsEdit(false)
    setInputValues(returnPrice)
  }

  const handleCheck = () => {
    setIsEdit(false)
    setReturnPrice(inputValues)
  }

  const incrementReturnPrice = async () => {
    await setReturnPrice((prev) => prev + 1000)
  }

  const handleInputValueChange = (price: number) => {
    setInputValues(price)
  }

  const decrementReturnPrice = async () => {
    returnPrice - 1000 > 1000
      ? setReturnPrice((prev) => prev - 1000)
      : setReturnPrice(1000)
  }

  const handleSubmit = async () => {
    await setFormTripsData({
      returnPrice: returnPrice,
    } as Partial<FormTripsData>)
    navigate('/app/offer-seats/phone-verification-fill')
  }
  return (
    <div className='flex flex-col gap-8 px-4 md:px-0 w-full md:w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>Set your price per place</h1>
      <div className='flex flex-col items-center justify-center gap-14'>
        <div className='flex flex-col w-full items-center gap-8'>
          <div className='flex w-full flex-row justify-between items-center'>
            <IconButton
              className={
                returnPrice <= 1000 ? `text-gray-200` : 'text-blue-500'
              }
              disabled={returnPrice <= 1000}
              onClick={decrementReturnPrice}
            >
              <MinusCircleIcon className={`h-8 w-8`} />
            </IconButton>
            <div className='flex flex-col items-center justify-center'>
              {isEdit ? (
                <div className='flex flex-col relative bottom-4'>
                  <div className='flex flex-row gap-2 justify-end'>
                    <IconButton onClick={handleCheck} className='text-blue-500'>
                      <CheckIcon className={`h-5 w-5`} />
                    </IconButton>
                    <IconButton onClick={handleCancel} className='text-red-500'>
                      <XMarkIcon className='h-5 w-5' />
                    </IconButton>
                  </div>
                  <Input
                    type='number'
                    value={inputValues.toString()}
                    onChange={(e) =>
                      handleInputValueChange(parseInt(e.target.value))
                    }
                    className='bg-white text-4xl text-center text-blue-900 border border-gray-200 font-bold'
                    style={{
                      height: 'fit-content',
                      maxWidth: '20rem',
                    }}
                  />
                </div>
              ) : (
                <>
                  <ContainerPrice>
                    <p className='text-4xl font-bold text-blue-900'>
                      {formatPriceToDisplay(returnPrice)}
                    </p>
                    <IconButton onClick={handleEdit}>
                      <PencilSquareIcon className='h-5 w-5 text-gray-400' />
                    </IconButton>
                  </ContainerPrice>
                </>
              )}
            </div>
            <IconButton
              onClick={incrementReturnPrice}
              className='text-blue-500'
            >
              <PlusCircleIcon className='h-8 w-8' />
            </IconButton>
          </div>
          <div className='flex flex-col w-full gap-4 items-center'>
            <div className='flex px-4 flex-col w-full gap-1 justify-start'>
              <p
                className='rounded-md px-2 py-1 bg-green-500 text-white font-semibold text-xs'
                style={{ width: 'fit-content' }}
              >
                Recommended price : {formatPriceToDisplay(recommendedPrice)}
              </p>
              <p className='text-slateBlue text-xs font-semibold'>
                Ideal price for this trip! You will get passengers in no time.
              </p>
            </div>
            {formTripsData?.departureStops &&
            formTripsData.departureStops.length !== 0 ? (
              <>
                <div className='rounded-md w-full border h-1 bg-gray-100 ' />
                <div className='flex flex-col w-full gap-1'>
                  <ContainerOptions
                    className='bg-white hover:bg-gray-50'
                    onClick={() => navigate('edit')}
                  >
                    <TextOptions className='text-blue-900'>
                      Stage prices
                    </TextOptions>
                    <ChevronRightIcon className='h-6 w-6 text-gray-400' />
                  </ContainerOptions>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <Button
        type='submit'
        text='Continue'
        onClick={handleSubmit}
        className={`rounded-md font-semibold text-midnightBlue bg-yellow`}
      />
    </div>
  )
}
export default GlobalReturnPriceRecommendation

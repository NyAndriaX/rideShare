import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import {
  useFormOfferSeatsData,
  useFormOfferSeatsActions,
} from '@/stores/use-form-offer-seats-store'
import { useNavigate } from 'react-router-dom'
import { FormOfferSeatsData } from '@/types/interface'
import {
  ChevronRightIcon,
  PencilSquareIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const IconButton = styled.button`
  width: fit-content;
  height: fit-content;
  color: var(--color-primary);
  &:disabled {
    color: var(--color-off-white);
  }
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
  background-color: var(--color-white);
  &:hover {
    background-color: var(--color-off-white);
  }
`

const TextOptions = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--color-deep-sea-blue);
`

const formatPriceToString = (price: number): string => {
  return (
    (price / 1000).toLocaleString('en-US', { minimumFractionDigits: 3 }) + ' Ar'
  )
}

const GlobalPriceComponent: React.FC = () => {
  const navigate = useNavigate()
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const formOfferSeatsData = useFormOfferSeatsData()
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()
  const [price, setPrice] = useState<number>(
    formOfferSeatsData?.pricePerSeat || 1000,
  )
  const [inputValue, setInputValue] = useState<string>(
    formatPriceToString(price),
  )
  const [tempPrice, setTempPrice] = useState<number>(price)

  useEffect(() => {
    setInputValue(formatPriceToString(price))
  }, [price])

  const formatPriceToDisplay = (price: number): string => {
    return `${price.toLocaleString('en-US')} Ar`
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/[^\d]/g, '')
    const selectionStart = event.target.selectionStart
    setInputValue(newValue)
    setTempPrice(parseInt(newValue))
    event.target.setSelectionRange(selectionStart, selectionStart)
  }

  const handleEdit = () => {
    setTempPrice(price)
    setIsEdit(true)
  }

  const handleCheck = () => {
    if (tempPrice >= 1000) {
      setPrice(tempPrice)
      setIsEdit(false)
    }
  }

  const checkIconColorWithPrice =
    price <= 1000 ? 'text-gray-200' : 'text-primary'

  const checkIconColorWithTempPrice =
    tempPrice < 1000 && !Number.isNaN(tempPrice)
      ? 'text-gray-200'
      : 'text-primary'

  const handleCancel = () => {
    setIsEdit(false)
    setInputValue(formatPriceToString(price))
  }

  const increment = () => {
    setPrice((prevPrice) => prevPrice + 1000)
  }

  const decrement = () => {
    if (price > 1000) {
      setPrice((prevPrice) => prevPrice - 1000)
    }
  }

  const onSubmit = async () => {
    await setFormOfferSeatsData({
      pricePerSeat: price,
    } as Partial<FormOfferSeatsData>)
    navigate('/app/offer-seats/return-trip')
  }

  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>
        Set your price per place
      </h1>
      <div className='flex flex-col items-center justify-center gap-14'>
        <div className='flex flex-col w-full items-center gap-8'>
          <div className='flex w-full flex-row justify-between items-center'>
            <IconButton onClick={decrement} disabled={price <= 1000}>
              <MinusCircleIcon
                className={`h-10 w-10 ${checkIconColorWithPrice}`}
              />
            </IconButton>
            <div className='flex flex-col items-center justify-center'>
              {isEdit ? (
                <div className='flex flex-col'>
                  <div className='flex flex-row gap-2 justify-end'>
                    <IconButton
                      onClick={handleCheck}
                      disabled={tempPrice < 1000}
                    >
                      <CheckIcon
                        className={`h-5 w-5 ${checkIconColorWithTempPrice}`}
                      />
                    </IconButton>
                    <IconButton onClick={handleCancel}>
                      <XMarkIcon className='h-5 w-5 text-red-500' />
                    </IconButton>
                  </div>
                  <Input
                    type='text'
                    value={inputValue.replace(/ Ar/g, '')}
                    onChange={handleInputChange}
                    className='bg-white text-5xl text-center text-midnightBlue border border-gray-200 font-bold'
                    style={{
                      height: 'fit-content',
                      maxWidth: '20rem',
                    }}
                  />
                </div>
              ) : (
                <>
                  <ContainerPrice>
                    <p className='text-5xl font-bold text-midnightBlue'>
                      {formatPriceToDisplay(price)}
                    </p>
                    <IconButton onClick={handleEdit}>
                      <PencilSquareIcon className='h-5 w-5 text-slateBlue' />
                    </IconButton>
                  </ContainerPrice>
                </>
              )}
            </div>
            <IconButton onClick={increment}>
              <PlusCircleIcon className='h-10 w-10' />
            </IconButton>
          </div>
          <div className='flex flex-col w-full gap-4 items-center'>
            <div className='flex px-4 flex-col w-full gap-1 justify-start'>
              <p
                className='rounded-md px-2 py-1 bg-success text-white font-semibold text-sm'
                style={{ width: 'fit-content' }}
              >
                Recommended price : 25.000 Ariary
              </p>
              <p className='text-slateBlue text-base font-semibold'>
                Ideal price for this trip! You will get passengers in no time.
              </p>
            </div>
            <div className='rounded-md w-full border h-2 bg-lightGrey ' />
            <div className='flex flex-col w-full gap-1'>
              <ContainerOptions onClick={() => navigate('edit')}>
                <TextOptions>Stage prices</TextOptions>
                <ChevronRightIcon className='h-6 w-6' />
              </ContainerOptions>
            </div>
          </div>
        </div>

        <Button
          type='submit'
          text='Continue'
          onClick={onSubmit}
          className={`rounded-md font-semibold text-midnightBlue bg-yellow`}
        />
      </div>
    </div>
  )
}

export default GlobalPriceComponent

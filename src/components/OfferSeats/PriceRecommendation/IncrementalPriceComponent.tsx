import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import {
  MinusCircleIcon,
  PlusCircleIcon,
  PencilSquareIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  useFormOfferSeatsData,
  useFormOfferSeatsActions,
} from '@/stores/use-form-offer-seats-store'
import { useNavigate } from 'react-router-dom'
import { StopPrice } from '@/types/interface'
import Input from '@/components/common/Input/Input'
import { FormOfferSeatsData } from '@/types/interface'
import Button from '@/components/common/Button/Button'
import { formatPriceToDisplay } from '@/utils/formatPriceToDisplay'

const IconButton = styled.button`
  position: relative;
  z-index: 2;
  width: fit-content;
  height: fit-content;
`

const ContainerPrice = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const DoteOutlined = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  border: 3px solid #ccc;
`
const DoteContainer = styled.div`
  display: inline-flex;
  width: 20px;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`
const Line = styled.div`
  border-left: 3px solid #ccc;
`
const ContainerStopovers = styled.div`
  display: flex;
  position: relative;
  left: 24.9vw;
  gap: 8px;
  flex-direction: row;
  min-height: 50px;
  height: fit-content;
  width: 50vw;
`

const IncrementalPriceComponent: React.FC = () => {
  const navigate = useNavigate()
  const formOfferSeatsData = useFormOfferSeatsData()
  const [isEdit, setIsEdit] = useState<boolean[]>([])
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()
  const [inputValue, setInputValue] = useState<StopPrice[]>([])
  const [stopPrices, setStopPrices] = useState<StopPrice[]>([])

  useEffect(() => {
    if (formOfferSeatsData && formOfferSeatsData.stops) {
      setIsEdit(new Array(formOfferSeatsData.stops.length).fill(false))
      const initialStopPrices: StopPrice[] = formOfferSeatsData.stops.map(
        (stop) => {
          const correspondStopPrice =
            formOfferSeatsData.stopPrices &&
            formOfferSeatsData.stopPrices.find(
              (stopPrice) => stopPrice.stopId === stop.stopLocation,
            )
          if (correspondStopPrice) {
            return {
              stopId: stop.stopLocation,
              price: correspondStopPrice.price,
            }
          } else {
            return {
              stopId: stop.stopLocation,
              price: 0,
            }
          }
        },
      )
      setInputValue([...initialStopPrices])
      setStopPrices([...initialStopPrices])
    }
  }, [formOfferSeatsData])

  const handleEdit = (index: number) => {
    const updatedIsEdit = [...isEdit]
    updatedIsEdit[index] = true
    setIsEdit(updatedIsEdit)
  }

  const handleCheck = (index: number) => {
    const updatedIsEdit = [...isEdit]
    updatedIsEdit[index] = false
    setIsEdit(updatedIsEdit)
    setStopPrices(inputValue)
  }

  const handleCancel = (index: number) => {
    const updatedIsEdit = [...isEdit]
    updatedIsEdit[index] = false
    setIsEdit(updatedIsEdit)
    setInputValue(stopPrices)
  }

  const incrementStopPrice = (index: number, price: number) => {
    const updatedStopPrice = stopPrices.map((stopPrice, i) => {
      if (i === index) {
        return { ...stopPrice, price: price + 1000 }
      }
      return stopPrice
    })
    setStopPrices(updatedStopPrice)
    setInputValue(updatedStopPrice)
  }

  const decrementStopPrice = (index: number, price: number) => {
    const updatedStopPrice = stopPrices.map((stopPrice, i) => {
      if (i === index) {
        return {
          ...stopPrice,
          price: price - 1000 > 1000 ? price - 1000 : 1000,
        }
      }
      return stopPrice
    })
    setStopPrices(updatedStopPrice)
    setInputValue(updatedStopPrice)
  }

  const handleInputValueChange = (index: number, price: number) => {
    const updatedInputValue = inputValue.map((stopPrice, i) => {
      if (i === index) {
        return {
          ...stopPrice,
          price: price,
        }
      }
      return stopPrice
    })
    setInputValue(updatedInputValue)
  }

  const handleSubmit = async () => {
    const pricePerSeat = await stopPrices.reduce(
      (total, stopPrice) => total + stopPrice.price,
      0,
    )
    await setFormOfferSeatsData({
      stopPrices: stopPrices,
      pricePerSeat: pricePerSeat,
    } as Partial<FormOfferSeatsData>)

    navigate('/app/offer-seats/return-trip')
  }

  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>Change our recommended price per seat</h1>
      {formOfferSeatsData?.stops?.map((stop, index) => (
        <div key={index} className='flex flex-row justify-between items-center'>
          <DoteContainer>
            <div className='flex flex-row relative'>
              <DoteOutlined />
              <p className='text-xs absolute left-4 text-gray-500 font-bold w-52'>
                {index === 0
                  ? formOfferSeatsData?.departureProvince
                  : formOfferSeatsData?.stops &&
                    formOfferSeatsData.stops[index - 1]?.stopLocation}
              </p>
            </div>
            <ContainerStopovers>
              <Line />
            </ContainerStopovers>
            <div className='flex flex-row relative'>
              <DoteOutlined />
              <p className='text-xs absolute left-4 text-gray-500 font-bold w-52'>
                {index ===
                (formOfferSeatsData.stops &&
                  formOfferSeatsData.stops?.length - 1)
                  ? formOfferSeatsData.destinationProvince
                  : stop.stopLocation}
              </p>
            </div>
          </DoteContainer>
          <div className='flex flex-row justify-between items-center gap-2 w-1/3'>
            <IconButton
              disabled={stopPrices[index]?.price <= 1000}
              onClick={() => decrementStopPrice(index, stopPrices[index].price)}
              className={
                stopPrices[index]?.price <= 1000
                  ? 'text-gray-300'
                  : 'text-blue-500'
              }
            >
              <MinusCircleIcon className={`h-6 w-6`} />
            </IconButton>
            {isEdit[index] ? (
              <div className='flex flex-col relative bottom-2'>
                <div className='flex flex-row gap-2 justify-end'>
                  <IconButton
                    disabled={inputValue[index]?.price <= 1000}
                    onClick={() => handleCheck(index)}
                    className={
                      inputValue[index].price <= 1000
                        ? 'text-gray-300'
                        : 'text-blue-500'
                    }
                  >
                    <CheckIcon className={`h-4 w-4`} />
                  </IconButton>
                  <IconButton
                    className='text-red-500'
                    onClick={() => handleCancel(index)}
                  >
                    <XMarkIcon className={`h-4 w-4`} />
                  </IconButton>
                </div>
                <Input
                  type='number'
                  value={inputValue[index].price.toString()}
                  onChange={(e) =>
                    handleInputValueChange(index, parseInt(e.target.value))
                  }
                  className='bg-white h-fit text-lg text-center text-blue-900 border border-gray-200 font-bold'
                  style={{
                    maxWidth: '20rem',
                  }}
                  min={1000}
                />
              </div>
            ) : (
              <ContainerPrice>
                {stopPrices && stopPrices[index] && (
                  <p className='text-lg font-bold text-blue-900'>
                    {formatPriceToDisplay(stopPrices[index]?.price)}
                  </p>
                )}
                <IconButton onClick={() => handleEdit(index)}>
                  <PencilSquareIcon className='h-4 w-4 text-gray-400' />
                </IconButton>
              </ContainerPrice>
            )}
            <IconButton
              className='text-blue-500'
              onClick={() => incrementStopPrice(index, stopPrices[index].price)}
            >
              <PlusCircleIcon className={`h-6 w-6`} />
            </IconButton>
          </div>
        </div>
      ))}
      <Button
        type='button'
        text='Continue'
        onClick={handleSubmit}
        className={`rounded-md font-semibold text-blue-900 bg-yellow`}
      />
    </div>
  )
}

export default IncrementalPriceComponent

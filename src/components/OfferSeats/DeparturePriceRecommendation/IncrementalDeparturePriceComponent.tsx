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
  useFormTripsData,
  useFormTripsActions,
} from '@/stores/use-form-trips-store'
import { useNavigate } from 'react-router-dom'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import { FormTripsData, DepartureStops } from '@/types/interface'
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

const IncrementalDeparturePriceComponent: React.FC = () => {
  const navigate = useNavigate()
  const formTripsData = useFormTripsData()
  const [isEdit, setIsEdit] = useState<boolean[]>([])
  const { setFormTripsData } = useFormTripsActions()
  const [inputValues, setInputValues] = useState<number[]>([])
  const [departureStops, setDepartureStops] = useState<DepartureStops[]>([])

  useEffect(() => {
    const initialStops = formTripsData?.departureStops ?? []
    const updatedStops = initialStops
      .map((stop) => ({
        ...stop,
        price: typeof stop.price === 'number' ? stop.price : 1000,
      }))
      .concat({
        location: '',
        checked: true,
        price: 1000,
      })

    setDepartureStops(updatedStops)
    setIsEdit(new Array(updatedStops.length).fill(false))
    setInputValues(updatedStops.map((stop) => stop.price ?? 1000))
  }, [formTripsData])

  const handleEdit = (index: number) => {
    const updatedIsEdit = [...isEdit]
    updatedIsEdit[index] = true
    setIsEdit(updatedIsEdit)
  }

  const handleCheck = (index: number) => {
    const updatedIsEdit = [...isEdit]
    updatedIsEdit[index] = false
    setIsEdit(updatedIsEdit)

    const updatedDepartureStops = [...departureStops]
    updatedDepartureStops[index].price = inputValues[index]
    setDepartureStops(updatedDepartureStops)
  }

  const handleCancel = (index: number) => {
    const updatedIsEdit = [...isEdit]
    updatedIsEdit[index] = false
    setIsEdit(updatedIsEdit)

    const updatedInputValues = [...inputValues]
    updatedInputValues[index] = departureStops[index].price ?? 1000
    setInputValues(updatedInputValues)
  }

  const handleInputValueChange = (index: number, value: number) => {
    const updatedInputValues = [...inputValues]
    updatedInputValues[index] = value
    setInputValues(updatedInputValues)
  }

  const incrementStopPrice = (index: number) => {
    const updatedInputValues = [...inputValues]
    updatedInputValues[index] += 1000
    setInputValues(updatedInputValues)

    const updatedDepartureStops = [...departureStops]
    updatedDepartureStops[index].price = updatedInputValues[index]
    setDepartureStops(updatedDepartureStops)
  }

  const decrementStopPrice = (index: number) => {
    const updatedInputValues = [...inputValues]
    updatedInputValues[index] = Math.max(updatedInputValues[index] - 1000, 1000)
    setInputValues(updatedInputValues)

    const updatedDepartureStops = [...departureStops]
    updatedDepartureStops[index].price = updatedInputValues[index]
    setDepartureStops(updatedDepartureStops)
  }

  const handleSubmit = async () => {
    const newDepartureStops = await departureStops.slice(0, -1)

    const sumDepartureStops = newDepartureStops.reduce((total, stop) => {
      return total + (stop.price ?? 0)
    }, 0)

    await setFormTripsData({
      departureStops: newDepartureStops,
      departurePrice: sumDepartureStops,
      fixedDeparturePrice: false,
    } as Partial<FormTripsData>)
    navigate('/app/offer-seats/return-trip')
  }

  return (
    <div className='flex flex-col gap-8 px-4 md:px-0 w-full md:w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>Change our recommended price per seat</h1>
      {formTripsData &&
        formTripsData?.departureStops &&
        departureStops.map((stopover, index) => (
          <div
            key={index}
            className='flex flex-row justify-between items-center'
          >
            <DoteContainer>
              <div className='flex flex-row relative'>
                <DoteOutlined />
                <p className='text-xs absolute left-4 text-gray-500 font-bold w-52'>
                  {index === 0
                    ? formTripsData?.departureProvince
                    : departureStops[index - 1].location}
                </p>
              </div>
              <ContainerStopovers>
                <Line />
              </ContainerStopovers>
              <div className='flex flex-row relative'>
                <DoteOutlined />
                <p className='text-xs absolute left-4 text-gray-500 font-bold w-52'>
                  {index === departureStops.length - 1
                    ? formTripsData?.destinationProvince
                    : stopover.location}
                </p>
              </div>
            </DoteContainer>
            <div className='flex flex-row justify-between items-center gap-2 w-1/3'>
              <IconButton
                disabled={(stopover.price ?? 0) <= 1000}
                onClick={() => decrementStopPrice(index)}
                className={
                  (stopover.price ?? 0) <= 1000
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
                      disabled={inputValues[index] <= 1000}
                      onClick={() => handleCheck(index)}
                      className={
                        inputValues[index] <= 1000
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
                    value={inputValues[index].toString()}
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
                  <p className='text-lg font-bold text-blue-900'>
                    {formatPriceToDisplay(stopover.price ?? 1000)}
                  </p>
                  <IconButton onClick={() => handleEdit(index)}>
                    <PencilSquareIcon className='h-4 w-4 text-gray-400' />
                  </IconButton>
                </ContainerPrice>
              )}
              <IconButton
                className='text-blue-500'
                onClick={() => incrementStopPrice(index)}
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

export default IncrementalDeparturePriceComponent

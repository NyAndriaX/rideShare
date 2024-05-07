import React, { useState } from 'react'
import { styled } from 'styled-components'
import Button from '../common/Button/Button'
import { useNavigate } from 'react-router-dom'
import {
  useFormOfferSeatsData,
  useFormOfferSeatsActions,
} from '@/stores/use-form-offer-seats-store'
import { FormOfferSeatsData } from '@/types/interface'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'

const IconButton = styled.button`
  color: var(--color-primary);
  &:disabled {
    color: var(--color-off-white);
  }
`

const Seats: React.FC = () => {
  const navigate = useNavigate()
  const formOfferSeatsData = useFormOfferSeatsData()
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()
  const [seats, setSeats] = useState<number>(formOfferSeatsData?.seats || 3)

  const increment = async () => {
    setSeats((val) => val + 1)
  }

  const decrement = async () => {
    setSeats((val) => val - 1)
  }

  const onSubmit = async () => {
    await setFormOfferSeatsData({
      seats,
    } as Partial<FormOfferSeatsData>)
    navigate('/app/offer-seats/departure-price-recommendation')
  }

  return (
    <div className='flex flex-col gap-12 w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>
        How many Rideshare passengers can you accept?
      </h1>
      <div className='flex flex-col items-center justify-center gap-14'>
        <div className='flex w-full flex-row justify-between items-center'>
          <IconButton onClick={decrement} disabled={seats <= 1}>
            <MinusCircleIcon className='h-8 w-8' />
          </IconButton>
          <p className='text-4xl font-bold text-blue-900'>{seats}</p>
          <IconButton onClick={increment}>
            <PlusCircleIcon className='h-8 w-8' />
          </IconButton>
        </div>
        <Button
          type='submit'
          text='Continue'
          onClick={onSubmit}
          className={`rounded-md font-semibold text-blue-900 bg-yellow`}
        />
      </div>
    </div>
  )
}
export default Seats

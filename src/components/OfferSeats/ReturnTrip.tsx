import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { FormOfferSeatsData } from '@/types/interface'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useFormOfferSeatsActions } from '@/stores/use-form-offer-seats-store'

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

interface ReturnTripItem {
  id: number
  text: string
  value: boolean
}

const returnTripState: ReturnTripItem[] = [
  {
    id: 1,
    text: 'Yes, with pleasure',
    value: true,
  },
  {
    id: 2,
    text: 'No, thanks',
    value: false,
  },
]

const ReturnTrip: React.FC = () => {
  const navigate = useNavigate()
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()

  const handleChoice = async (data: ReturnTripItem) => {
    await setFormOfferSeatsData({
      oneWay: data.value,
    } as Partial<FormOfferSeatsData>)
    if (data.value) {
      navigate('/app/offer-seats/return-date')
    } else {
      console.log(data)
    }
  }

  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <p className='text-4xl font-bold text-midnightBlue text-center text-gray-700'>
        Are you also making the return trip? Publish your trip now
      </p>
      <div className='flex flex-col items-center justify-center gap-6'>
        {returnTripState.map((state) => (
          <div
            key={state.id}
            onClick={() => handleChoice(state)}
            className='flex flex-col w-full items-center justify-center gap-2'
          >
            <div className='flex flex-col w-full gap-1'>
              <ContainerOptions>
                <TextOptions>{state.text}</TextOptions>
                <ChevronRightIcon className='h-6 w-6' />
              </ContainerOptions>
              <div className='border-b border-gray-200' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReturnTrip

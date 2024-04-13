import React from 'react'
import { UserIcon, CheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import { styled } from 'styled-components'

const DoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 44px;
  justify-content: space-between;
  width: 20px;
  align-items: center;
`

const DoteOutlined = styled.div`
  width: 13px;
  height: 13px;
  border: 1px solid #ccc;
  border-radius: 100%;
`

const DoteContained = styled.div`
  width: 13px;
  height: 13px;
  background-color: #ccc;
  border-radius: 100%;
`

const Line = styled.div`
  height: 50%;
  border-left: 2px dotted #ccc;
`

const Date = styled.p`
  font-size: 14px;
  color: var(--color-deep-sea-blue);
`
const Country = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: var(--color-deep-sea-blue);
`
const CountrySpan = styled.span`
  font-weight: 600;
`

const Count = styled.div`
  display: flex;
  align-items: center;
`
const CountSpan = styled.span`
  font-size: 14px;
`
const Price = styled.p`
  font-size: 23px;
  font-weight: bold;
  color: var(--color-primary);
`

interface TravelProps {
  departureCity: string
  cityOfArrival: string
  dateOfDeparture: string
  dateOfArrival: string
  price: number
}

const Travel: React.FC<TravelProps> = ({
  departureCity,
  cityOfArrival,
  dateOfDeparture,
  dateOfArrival,
  price,
}) => {
  const isRefundable = true

  return (
    <div className='flex flex-col bg-white rounded-md shadow-lg'>
      <header className='flex flex-row justify-between items-center px-4 border-b border-lightGrey'>
        <img src='/public/icons/cars.png' alt='cars' className='w-10' />
        <div className='flex flex-row items-center gap-2 text-slateBlue'>
          <ClockIcon className='h-4 w-4' />
          <p className='text-sm'>03h20min</p>
        </div>
      </header>
      <main className='flex flex-row w-full p-4 justify-between items-center'>
        <div className='flex flex-col gap-2'>
          <Date>{dateOfDeparture}</Date>
          <Date>{dateOfArrival}</Date>
        </div>
        <DoteContainer>
          <DoteOutlined />
          <Line />
          <DoteContained />
        </DoteContainer>
        <div className='flex flex-col gap-2'>
          <Country>
            <CountrySpan>{departureCity}</CountrySpan> Paris-Gare-de-Lyon
          </Country>
          <Country>
            <CountrySpan>{cityOfArrival}</CountrySpan> Marseill-Saint-Chris
          </Country>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-row gap-1 text-slateBlue'>
            <Count>
              <CountSpan>4</CountSpan>
              <UserIcon className='h-5 w-5' />
            </Count>
            <Price>{price} Ar</Price>
          </div>
          {isRefundable && (
            <p className='flex flex-row gap-1 items-center justify-center text-xs text-success'>
              <CheckIcon className='h-3 w-3' />
              Refundable
            </p>
          )}
        </div>
      </main>
    </div>
  )
}

export default Travel

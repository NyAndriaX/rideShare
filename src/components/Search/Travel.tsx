import React from 'react'
import { UserIcon, CheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #edf2f7;
`

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

const DotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
`

const DotOutlined = styled.div`
  width: 0.8125rem;
  height: 0.8125rem;
  border: 1px solid #ccc;
  border-radius: 50%;
`

const DotContained = styled.div`
  width: 0.8125rem;
  height: 0.8125rem;
  background-color: #ccc;
  border-radius: 50%;
`

const Line = styled.div`
  height: 50%;
  border-left: 1px dotted #ccc;
`

const Text = styled.p`
  font-size: 0.75rem;
  color: #4a5568;
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
    <Container>
      <Header>
        <img src='/public/icons/cars.png' alt='cars' className='w-10' />
        <div className='flex items-center gap-2 text-slateBlue'>
          <ClockIcon className='h-4 w-4' />
          <Text>03h20min</Text>
        </div>
      </Header>
      <Main>
        <div className='flex flex-col gap-2'>
          <Text>{dateOfDeparture}</Text>
          <Text>{dateOfArrival}</Text>
        </div>
        <DotContainer>
          <DotOutlined />
          <Line />
          <DotContained />
        </DotContainer>
        <div className='flex flex-col gap-2 '>
          <Text>{departureCity}</Text>
          <Text>{cityOfArrival}</Text>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex items-center gap-1 text-slateBlue'>
            <Text>4</Text>
            <UserIcon className='h-5 w-5' />
            <Text>{price} Ar</Text>
          </div>
          {isRefundable && (
            <p className='flex items-center gap-1 text-xs text-success'>
              <CheckIcon className='h-3 w-3' />
              <Text>Refundable</Text>
            </p>
          )}
        </div>
      </Main>
    </Container>
  )
}

export default Travel

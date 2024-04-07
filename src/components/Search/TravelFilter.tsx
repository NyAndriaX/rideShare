import React from 'react'
import { styled } from 'styled-components'

const TravelContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`

const RideshareTypeContainer = styled.div`
  border-bottom: 2px solid var(--color-off-white);
`

const RideshareTypeList = styled.div`
  width: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: -2px;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-primary);
  &.active {
    border-bottom: 2px solid var(--color-primary);
  }
`

const TagContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 4px;
`

const TagList = styled.li`
  display: inline;
  font-size: 13px;
  text-align: center;
  padding: 4px 20px;
  border-radius: 10px;
  color: var(--color-deep-sea-blue);
  background-color: var(--color-off-white);
  cursor: pointer;
`

const TravelFilter: React.FC = () => {
  return (
    <TravelContainer className='shadow-md rounded-md'>
      <RideshareTypeContainer>
        <RideshareTypeList className='active'>
          <div className='flex justify-center items-center'>
            <img
              src='/public/icons/cars-primary.png'
              alt='cars'
              className='w-12 h-12'
            />
          </div>
          <p className='font-bold text-primary text-center text-sm'>Sum : 10</p>
        </RideshareTypeList>
      </RideshareTypeContainer>
      <TagContainer className='p-4'>
        <TagList>Trajets direct</TagList>
        <TagList>Refundable</TagList>
      </TagContainer>
    </TravelContainer>
  )
}

export default TravelFilter

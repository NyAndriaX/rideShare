import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { styled } from 'styled-components'

const Button = styled.button`
  padding: 4px;
`

const DateContainer = styled.div`
  font-size: 16px;
  padding: 8px 14px;
  color: var(--color-primary);
`

const Date: React.FC = () => {
  return (
    <div className='flex justify-center gap-4 items-center'>
      <Button className='shadow-md'>
        <ChevronLeftIcon className='h-6 w-6 text-slateBlue' />
      </Button>
      <DateContainer className='shadow-md'>Sun. 7 Apr</DateContainer>
      <Button className='shadow-md'>
        <ChevronRightIcon className='h-6 w-6 text-primary' />
      </Button>
    </div>
  )
}

export default Date

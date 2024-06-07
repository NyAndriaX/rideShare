import React from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/20/solid'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'

const Subscribe: React.FC = () => {
  return (
    <div
      style={{ marginBottom: '-30px' }}
      className='flex flex-col relative z-10 justify-center items-center bg-blue-500 text-white mx-2 pt-12 pb-8 px-4 rounded-md shadow-md gap-8'
    >
      <header className='text-center'>
        <p className='font-bold text-2xl'>Subscribe to our newsletter</p>
        <p className='text-base'>Stay tuned for good deals.</p>
      </header>
      <main className='flex flex-col md:flex-row gap-2 justify-center items-center w-full md:w-6/12'>
        <div className='w-full md:w-3/4'>
          <Input type='text' placeholder='E-mail' />
        </div>
        <div className='w-full md:w-1/4'>
          <Button
            type='button'
            text='Send'
            endIcon={true}
            icon={<PaperAirplaneIcon className='h-6 w-6' />}
            className='rounded-md font-semibold text-blue-900 bg-yellow'
          />
        </div>
      </main>
    </div>
  )
}

export default Subscribe

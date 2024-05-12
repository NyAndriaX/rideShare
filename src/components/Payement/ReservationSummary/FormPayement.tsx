import React from 'react'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'
import { LockClosedIcon as LockClosedContained } from '@heroicons/react/20/solid'
import { LockClosedIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const FormPayement: React.FC = () => {
  const onSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className='flex flex-col gap-2 items-start'>
      <div className='flex w-full flex-row justify-between'>
        <div className='text-lg text-gray-500'>
          <span>Choose your payment method</span>
        </div>
        <div className='flex flex-row gap-1 items-center text-lg text-gray-500'>
          <span>Secure payment</span>
          <LockClosedIcon className='w-5 h-5 text-gray-400' />
        </div>
      </div>
      <div className='flex w-full flex-col gap-8 p-4 bg-white border border-gray-200 rounded-md'>
        <div className='flex flex-row gap-2 items-center text-lg text-gray-500 border-b border-gray-200 py-2'>
          <ChevronUpIcon className='h-6 w-6 text-gray-400' />
          <span>Bank card</span>
          <img
            src={new URL('/icons/visa-icon.png', import.meta.url).href}
            alt='visa icon'
            className='h-8 w-8 rended-md'
          />
        </div>
        <form
          className='flex flex-col gap-6 w-full items-center'
          onSubmit={onSubmit}
        >
          <div className='flex flex-col w-full gap-4 items-start'>
            <Input type='text' label='Car holder' />
            <Input type='text' label='Card number' />
            <div className='flex flex-col w-full gap-1 items-start'>
              <label className='text-lg font-semibold text-blue-900'>
                Expires at the end
              </label>
              <div className='flex w-full flex-row justify-between gap-4'>
                <Input type='month' />
                <Input type='years' />
              </div>
            </div>
            <div className='w-full'>
              <Input type='text' label='Security code' />
            </div>
          </div>
          <div className='flex flex-row justify-center'>
            <Button
              type='submit'
              icon={<LockClosedContained className='h-5 w-5 text-blue-900' />}
              className='bg-yellow rounded-md text-blue-900 font-semibold w-fit'
              text='Payer 55.000 Ar'
            />
          </div>
        </form>
      </div>
    </div>
  )
}
export default FormPayement

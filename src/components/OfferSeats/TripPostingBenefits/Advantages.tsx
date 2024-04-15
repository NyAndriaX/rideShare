import React from 'react'
import {
  EnergyIcon,
  ShareMomentIcon,
  MissileIcon,
} from '@/components/common/Icons/Icons'
import Line from '@/components/common/Line/Line'

const Advantages: React.FC = () => {
  return (
    <div className='min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5'>
      <div className='w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800'>
        <div className='w-full max-w-6xl mx-auto'>
          <div className='text-center max-w-xl mx-auto'>
            <h1 className='text-6xl md:text-7xl font-bold mb-5 text-gray-600'>
              Only good reasons to carpool with us
            </h1>
            <Line />
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='flex flex-col gap-4 shadow-lg py-8 px-6 rounded-md'>
              <EnergyIcon className='h-10 w-10' />
              <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-bold'>Save on your trips</h3>
                <p className='text-gray-500'>
                  Sharing your journey with other passengers means saving money
                  every time you hit the road. Register as a driver and travel
                  cheaply.
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-4 shadow-lg py-8 px-6 rounded-md'>
              <ShareMomentIcon className='h-10 w-10' />
              <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-bold'>Save on your trips</h3>
                <p className='text-gray-500'>
                  Sharing your journey with other passengers means saving money
                  every time you hit the road. Register as a driver and travel
                  cheaply.
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-4 shadow-lg py-8 px-6 rounded-md'>
              <MissileIcon className='h-10 w-10' />
              <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-bold'>Save on your trips</h3>
                <p className='text-gray-500'>
                  Sharing your journey with other passengers means saving money
                  every time you hit the road. Register as a driver and travel
                  cheaply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages

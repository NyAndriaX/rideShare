import React from 'react'
import CardTravelPost from '@/components/CardTravelPost/CardTravelPost'

const CreationHistory: React.FC = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-4 pt-28 pb-28 px-4'>
      <div className=' flex flex-col gap-4 w-2/3'>
        <CardTravelPost
          isCompleted={true}
          className='border border-gray-200 rounded-md'
        />
        <CardTravelPost
          isCompleted={true}
          className='border border-gray-200 rounded-md'
        />
        <CardTravelPost className='border border-gray-200 rounded-md' />
        <CardTravelPost className='border border-gray-200 rounded-md' />
      </div>
    </div>
  )
}
export default CreationHistory

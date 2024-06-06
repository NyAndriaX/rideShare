import React from 'react'
import { styled } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

const DoteOutlined = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 100%;
`

interface CardTravelPostSkeletonProps {
  className?: string
}

const CardTravelPostSkeleton: React.FC<CardTravelPostSkeletonProps> = ({
  className,
}) => {
  return (
    <div
      className={`${className} flex flex-row w-full gap-8 p-4 rounded-md mb-6 cursor-pointer opacity-100`}
    >
      {/* User information */}
      <div
        className={`flex flex-col w-1/4' py-2 gap-4 justify-start items-start`}
      >
        {/* Profil */}
        <div className='flex flex-row gap-6 items-center'>
          <Skeleton circle={true} className='h-14 w-14' />
          <div className='flex flex-col items-start gap-1'>
            <span className='text-blue-500 text-base'>
              <Skeleton className='w-14' />
            </span>
            <span className='text-gray-500 text-sm'>
              <Skeleton className='w-8' />
            </span>
          </div>
        </div>
        {/* Status */}
        <div className='flex flex-row items-center gap-2'>
          <Skeleton className='w-40' />
        </div>
      </div>
      <div className='bg-gray-100' style={{ width: '2px' }} />
      {/* Trip information */}
      <div className={`flex  flex-row w-3/4 justify-between pl-10 py-2`}>
        {/* Information details trip */}
        <div className='flex flex-col gap-2 justify-start'>
          <div className='flex flex-col gap-1 justify-start'>
            <div className='text-blue-500 text-base'>
              <Skeleton className='w-40' />
            </div>
            <div className='flex flex-row gap-1 text-sm text-gray-500'>
              <Skeleton className='w-16' />
              <ArrowLongRightIcon className='h-5 w-5 text-gray-500' />
              <Skeleton className='w-16' />
            </div>
          </div>
          <div className='text-gray-500 text-sm'>
            <div className='flex flex-row gap-1 items-center'>
              <DoteOutlined className='border-4 border-green-400' />
              <Skeleton className='w-36' />
            </div>
            <div className='flex flex-row gap-1 items-center'>
              <DoteOutlined className='border-4 border-red-400' />
              <Skeleton className='w-36' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardTravelPostSkeleton

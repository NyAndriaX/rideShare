import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { calculateAge } from '@/utils/calculateAge'
import { formatDateTime } from '@/utils/formatDateTime'
import { formatPriceToDisplay } from '@/utils/formatPriceToDisplay'
import { StarIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'

const DoteOutlined = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 100%;
`
const CountourImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 100%;
  padding: 2px;
  border: 1px solid #eaeaea;
`

interface CardTravelPostProps {
  trip?: any
  isCompleted?: boolean
  className?: string
  isVisiblePrice?: boolean
}

const CardTravelPost: React.FC<CardTravelPostProps> = ({
  trip,
  isCompleted,
  className,
  isVisiblePrice,
}) => {
  const navigate = useNavigate()
  const isContentsImage: boolean = true

  return (
    <div
      onClick={() => navigate('/travel')}
      className={`${className}  flex flex-row w-full gap-8 p-4 ${isCompleted ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer opacity-100'} `}
    >
      {/* User information */}
      <div
        className={`flex flex-col ${isVisiblePrice && isVisiblePrice === true ? 'w-1/4' : 'w-2/4'} py-2 gap-4 justify-start items-start`}
      >
        {/* Profil */}
        <div className='flex flex-row gap-6 items-center'>
          <img
            src={new URL('/image/person.svg', import.meta.url).href}
            className='h-14 w-14 rounded-full border border-gray-200'
            alt='Profil user who shared'
          />
          <div className='flex flex-col items-start gap-1'>
            <span className='text-blue-500 text-base'>
              {trip?.author?.firstName} {trip?.author?.lastName ?? '-------'}
            </span>
            <span className='text-gray-500 text-sm'>
              {calculateAge(trip?.author?.dateOfBirth) ?? '--'} ans
            </span>
          </div>
        </div>
        {/* Status */}
        <div className='flex flex-row items-center gap-2'>
          <StarIcon className='h-4 w-4 text-yellow' />
          <div className='flex flex-row gap-1 items-center text-sm'>
            <span className='text-blue-500'>1.5/5</span>
            <span className='text-gray-500'>-</span>
            <span className='text-gray-500'>12 avis</span>
          </div>
        </div>
      </div>
      <div className='bg-gray-100' style={{ width: '2px' }} />
      {/* Trip information */}
      <div
        className={`flex  flex-row  ${isVisiblePrice && isVisiblePrice === true ? 'w-3/4' : 'w-2/4'} justify-between pl-10 py-2`}
      >
        {/* Information details trip */}
        <div className='flex flex-col gap-2 justify-start'>
          <div className='flex flex-col gap-1 justify-start'>
            <div className='text-blue-500 text-base'>
              {formatDateTime(
                trip?.departureDate as string,
                trip?.departureTime as string,
              )}
            </div>
            <div className='flex flex-row gap-1 text-sm text-gray-500'>
              <span>{trip?.departureProvince as string}</span>
              <ArrowLongRightIcon className='h-5 w-5 text-gray-500' />
              <span>{trip?.destinationProvince as string}</span>
            </div>
          </div>
          <div className='text-gray-500 text-sm'>
            <div className='flex flex-row gap-1 items-center'>
              <DoteOutlined className='border-4 border-green-400' />
              {trip?.departureProvince as string},
              {trip?.departurePrecise as string}
            </div>
            <div className='flex flex-row gap-1 items-center'>
              <DoteOutlined className='border-4 border-red-400' />
              {trip?.destinationProvince as string},{' '}
              {trip?.destinationPrecise as string}
            </div>
          </div>
        </div>
        {/* Information price trip */}
        {isVisiblePrice && isVisiblePrice === true && (
          <>
            {isCompleted ? (
              <div className='text-sm text-red-500 font-semibold'>
                Completed
              </div>
            ) : (
              <div className='flex flex-col justify-between items-center'>
                <div className='flex flex-row gap-1 items-center text-sm text-blue-500'>
                  <span className='text-lg font-semibold'>
                    {formatPriceToDisplay(trip?.departurePrice)}
                  </span>
                  <span>Ariary</span>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='flex flex-row items-center gap-1 text-sm text-gray-500'>
                    <span className='text-lg font-semibold'>{trip?.seats}</span>
                    <span>places restantes</span>
                  </div>
                  <div className='flex flex-row gap-2 justify-end items-center'>
                    <CountourImage>
                      {isContentsImage && (
                        <img
                          src={
                            new URL('/image/person.svg', import.meta.url).href
                          }
                          alt='personal reserved'
                          className='w-6 h-6'
                        />
                      )}
                    </CountourImage>
                    <CountourImage></CountourImage>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default CardTravelPost

import React from 'react'
import { styled } from 'styled-components'
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
  isCompleted: boolean
}

const CardTravelPost: React.FC<CardTravelPostProps> = ({ isCompleted }) => {
  const isContentsImage: boolean = true

  return (
    <div
      className={`flex flex-row p-4 w-full border border-gray-100 rounded-md ${isCompleted ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer opacity-100'} cursor-pointer hover:bg-gray-50`}
    >
      {/* User information */}
      <div className='flex flex-col w-1/4 py-2 gap-4 justify-start items-start border-r border-gray-200'>
        {/* Profil */}
        <div className='flex flex-row gap-6 items-center'>
          <img
            src={new URL('/image/person.svg', import.meta.url).href}
            className='h-14 w-14 rounded-full border border-gray-200'
            alt='Profil user who shared'
          />
          <div className='flex flex-col items-start gap-1'>
            <span className='text-blue-500 text-base'>Zina Nmj</span>
            <span className='text-gray-500 text-sm'>20 ans</span>
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
      {/* Trip information */}
      <div className='flex w-3/4 flex-row justify-between pl-10 py-2'>
        {/* Information details trip */}
        <div className='flex flex-col gap-2 justify-start'>
          <div className='flex flex-col gap-1 justify-start'>
            <div className='text-blue-500 text-base'>Demain à 06:20</div>
            <div className='flex flex-row gap-1 text-sm text-gray-500'>
              <span>Reims</span>
              <ArrowLongRightIcon className='h-5 w-5 text-gray-500' />
              <span>Troyes</span>
            </div>
          </div>
          <div className='text-gray-500 text-sm'>
            <div className='flex flex-row gap-1 items-center'>
              <DoteOutlined className='border-4 border-green-400' />
              Reims,France
            </div>
            <div className='flex flex-row gap-1 items-center'>
              <DoteOutlined className='border-4 border-red-400' />
              10000 Troyes, France
            </div>
          </div>
        </div>
        {/* Information price trip */}
        {isCompleted ? (
          <div className='text-sm text-red-500 font-semibold'>Completed</div>
        ) : (
          <div className='flex flex-col justify-between items-center'>
            <div className='flex flex-row gap-1 items-center text-sm text-blue-500'>
              <span className='text-lg font-semibold'>25.000</span>
              <span>Ariary</span>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='flex flex-row items-center gap-1 text-sm text-gray-500'>
                <span className='text-lg font-semibold'>3</span>
                <span>places restantes</span>
              </div>
              <div className='flex flex-row gap-2 justify-end items-center'>
                <CountourImage>
                  {isContentsImage && (
                    <img
                      src={new URL('/image/person.svg', import.meta.url).href}
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
      </div>
    </div>
  )
}

export default CardTravelPost

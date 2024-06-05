import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import Button from '@/components/common/Button/Button'
import {
  ClockIcon,
  ArrowLongRightIcon,
  TicketIcon,
  CalendarDaysIcon,
  ArrowTrendingUpIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline'

const DoteOutlined = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 100%;
`

interface DetailsTravelProps {
  trip: any
}

const DetailsTravel: React.FC<DetailsTravelProps> = ({ trip }) => {
  const oneWay: boolean = true

  console.log(trip)

  return (
    <div className='flex flex-col items-start gap-4 w-2/3'>
      {/* Travel Indice */}
      <div className='flex flex-row text-base gap-8'>
        <div className='flex flex-row items-center gap-2 text-gray-400'>
          <span>
            {trip?.departureProvince} {trip?.departurePrecise}
          </span>
          <ArrowLongRightIcon className='h-6 w-6 text-gray-400' />
          <span>
            {trip?.destinationProvince} {trip?.destinationPrecise}
          </span>
        </div>
        <div className='flex flex-row gap-2 text-blue-500'>
          <TicketIcon className='h-6 w-6' />
          <Link to='/search'>See the route</Link>
        </div>
      </div>
      {/* Travel information */}
      <div className='flex flex-col justify-center gap-12 w-full border border-gray-200 rounded-md p-4'>
        <div className='flex flex-col w-full justify-center gap-4'>
          {/* Departure */}
          <div className='flex flex-row items-start text-base'>
            <div className='w-1/4 text-gray-400'>Departure</div>
            <div className='flex flex-row gap-4 items-center w-3/4 text-blue-500'>
              <DoteOutlined className='border-4 border-green-400' />
              <span>Reims, France</span>
            </div>
          </div>
          {/* Destination */}
          <div className='flex flex-row items-start text-base'>
            <div className='w-1/4 text-gray-400'>Destination</div>
            <div className='flex flex-row gap-4 items-center w-3/4 text-blue-500'>
              <DoteOutlined className='border-4 border-red-400' />
              <span>City</span>
            </div>
          </div>
          {/* Date de départure */}
          <div className='flex flex-row items-start text-base'>
            <div className='w-1/4 text-gray-400'>Date of departure</div>
            <div className='flex flex-row gap-4 items-center w-3/4 text-blue-900'>
              <CalendarDaysIcon className='h-5 w-5 text-blue-900' />
              <span>Demain à 16:45</span>
            </div>
          </div>
          {/* return of date */}
          {oneWay && (
            <div className='flex flex-row items-start text-base'>
              <div className='w-1/4 text-gray-400'>Return of date</div>
              <div className='flex flex-row gap-4 items-center w-3/4 text-blue-900'>
                <CalendarDaysIcon className='h-5 w-5 text-blue-900' />
                <span>Demain à 16:45</span>
              </div>
            </div>
          )}
          {/* Détails */}
          <div className='flex flex-row items-start text-base'>
            <div className='w-1/4 text-gray-400'>Details</div>
            <div className='flex flex-col gap-4 items-start w-3/4 text-gray-400'>
              <div className='flex flex-row gap-4 items-center'>
                <ClockIcon className='h-5 w-5 text-gray-400' />
                <span>Départ pile à heure</span>
              </div>
              <div className='flex flex-row gap-4 items-center'>
                <ArrowTrendingUpIcon className='h-5 w-5 text-gray-400' />
                <span>De 15 minutes max</span>
              </div>
            </div>
          </div>
          {/* Options */}
          <div className='flex flex-row items-start text-base'>
            <div className='w-1/4 text-gray-400'>Options</div>
            <div className='flex flex-row gap-4 items-start w-3/4 text-gray-400'>
              <img
                src={new URL('/image/person.svg', import.meta.url).href}
                alt='personal reserved'
                className='w-6 h-6 border border-gray-200 rounded-full'
              />
              <span>2 max. à l'arrière</span>
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-6 bg-gray-50 px-8 py-6'>
          <img
            src={new URL('/image/person.svg', import.meta.url).href}
            alt='personal reserved'
            className='w-14 h-14 border border-gray-200 rounded-full'
          />
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col items-start'>
              <span className='text-blue-900 font-semibold'>Benjamin Q</span>
              <span className='text-gray-400'>
                N'hésitez à me contacter pour les lieux de départ de d'arrivée
              </span>
            </div>
            <Button
              type='button'
              icon={
                <ChatBubbleLeftEllipsisIcon className='h-6 w-6 text-white' />
              }
              text='Contactez le conducteur'
              className='bg-blue-500 text-white font-semibold w-fit'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailsTravel

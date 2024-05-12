import React from 'react'
import NumberOfPlacesToReserve from './DetailsReservation/NumberOfPlacesToReserve'

const DetailsReservation: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='flex flex-row justify-end items-center text-base text-gray-400'>
        Annonce publiée le 27/11/2017 - vue 0 fois
      </div>
      <div className='w-full border border-gray-200 rounded-md'>
        {/* headers for reservation */}
        <div className='flex flex-row justify-between items-end border-b border-gray-200 p-4'>
          <span className='text-base text-gray-400'>Prix par place</span>
          <div className='flex flex-row items-end gap-1 text-blue-900 text-base'>
            <span className='text-2xl font-semibold'>25.000</span>
            <span>Ariary</span>
          </div>
        </div>
        {/* Content passenger */}
        <div className='flex flex-col justify-center gap-2 items-center border-b border-gray-200 p-4 text-gray-400'>
          <div className='text-base w-fit'>Passagers sur ce trajet</div>
          {/* a repeter en function de nombre de passage disponible */}
          <div className='flex flex-row items-center gap-2 justify-center'>
            <div className=' w-10 h-10 rounded-full border border-dotted ' />
            <div className=' w-10 h-10 rounded-full border border-dotted ' />
            <div className=' w-10 h-10 rounded-full border border-dotted ' />
          </div>
          <div className='flex flex-row items-center justify-center gap-1 text-base text-gray-400'>
            <span className='text-2xl font-semibold text-blue-900'>3</span>
            <span>places restantes</span>
          </div>
        </div>
        {/* Reservation forme */}
        <div className='flex flex-col p-4 bg-gray-50'>
          <NumberOfPlacesToReserve />
        </div>
      </div>
    </div>
  )
}
export default DetailsReservation

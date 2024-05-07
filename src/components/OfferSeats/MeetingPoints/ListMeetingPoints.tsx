import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/Button/Button'
import { Reorder } from 'framer-motion'
import { Stop, FormOfferSeatsData } from '@/types/interface'
import {
  useFormOfferSeatsData,
  useFormOfferSeatsActions,
} from '@/stores/use-form-offer-seats-store'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const DoteOutlined = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  border: 3px solid #ccc;
`

const DoteContainer = styled.div`
  display: inline-flex;
  width: 20px;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`
const Line = styled.div``

const ContainerStopovers = styled.div`
  display: flex;
  position: relative;
  left: 24.9vw;
  gap: 8px;
  flex-direction: row;
  min-height: 50px;
  height: fit-content;
  width: 50vw;
`
const ContainerItemStopovers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 2rem 0;
  min-width: 50px;
  height: fit-content;
  width: 100%;
`
const DoteOutlinedStopovers = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
  top: 8px;
  border-radius: 100%;
`

const ItemStopovers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: -2rem;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`

const ListMeetingPoints: React.FC = () => {
  const navigate = useNavigate()
  const formOfferSeatsData = useFormOfferSeatsData()
  const [stopovers, setStopovers] = useState<Stop[]>(
    formOfferSeatsData && formOfferSeatsData.stops
      ? formOfferSeatsData.stops
      : [],
  )
  const { setFormOfferSeatsData } = useFormOfferSeatsActions()

  const onSubmit = async () => {
    setFormOfferSeatsData({
      stops: stopovers,
    } as Partial<FormOfferSeatsData>)
    navigate('/app/offer-seats/departure-date')
  }

  return (
    <div className='flex flex-col gap-8 w-1/2 pt-10 pb-28'>
      <h1 className='text-blue-900'>
        Here are the best places to stop in these towns. Does it suit you ?
      </h1>
      <DoteContainer>
        <div className='flex flex-row relative'>
          <DoteOutlined />
          <p className='text-xs absolute left-4 text-gray-500 font-bold w-52'>
            {formOfferSeatsData?.departureProvince as string}
          </p>
        </div>
        <ContainerStopovers>
          <Line className='border-l-2 border-gray-200' />
          <ContainerItemStopovers>
            <Reorder.Group axis='y' values={stopovers} onReorder={setStopovers}>
              {stopovers?.map((stop, index) => (
                <Reorder.Item key={index} value={stop}>
                  <ItemStopovers
                    className='hover:bg-gray-50'
                    onClick={() =>
                      navigate(`change?meetingPointsIndex=${index}`)
                    }
                  >
                    <div className='flex flex-row gap-4 '>
                      <DoteOutlinedStopovers className='bg-white border-4 border-blue-900' />
                      <div className='flex flex-col'>
                        <p className='text-lg font-bold text-blue-900'>
                          {stop.stopLocation}
                        </p>
                        <p className='text-xs font-semibold text-gray-400'>
                          ville
                        </p>
                      </div>
                    </div>
                    <ChevronRightIcon className='h-6 w-6 text-gray-400' />
                  </ItemStopovers>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </ContainerItemStopovers>
        </ContainerStopovers>
        <div className='flex flex-row relative'>
          <DoteOutlined />
          <p className='text-xs absolute left-4 text-gray-500 font-bold w-52'>
            {formOfferSeatsData?.destinationProvince as string}
          </p>
        </div>
      </DoteContainer>
      <Button
        type='button'
        onClick={onSubmit}
        text='Continue'
        className={` rounded-md font-semibold text-blue-900 bg-yellow`}
      />
    </div>
  )
}

export default ListMeetingPoints

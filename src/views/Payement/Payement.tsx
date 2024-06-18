import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TripSummary from '@/components/Payement/TripSummary'
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid'
import ReservationSummary from '@/components/Payement/ReservationSummary'
import { useTravelManageActions } from '@/stores/use-travel-manage-store'
import ReservationHighlights from '../../components/Payement/ReservationHighlights'
import AnimationCircleLoading from '@/components/common/Animation/AnimationCircleLoading'

const Payement: React.FC = () => {
  const navigate = useNavigate()
  const [trip, setTrip] = useState<{} | any>({})
  const { getTripWithId } = useTravelManageActions()
  const [hasError, setHasError] = useState<boolean>(false)
  const searchParams = new URLSearchParams(location.search)
  const [isfetching, setIsfetching] = useState<boolean>(false)

  const fetchDataTripWithId = async () => {
    setIsfetching(true)
    try {
      const tripId: any = await searchParams.get('tripId')
      const { data } = await getTripWithId(parseInt(tripId))
      setTrip(data)
      setHasError(false)
    } catch (e: any) {
      setTrip(null)
      setHasError(true)
    } finally {
      setIsfetching(false)
    }
  }

  useEffect(() => {
    if (!isfetching) {
      fetchDataTripWithId()
    }
  }, [])

  return (
    <React.Fragment>
      {isfetching ? (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
          <AnimationCircleLoading height={100} width={100} />
        </div>
      ) : hasError ? (
        <div className='flex flex-col items-center justify-center h-screen'>
          <div className='w-fit h-fit'>Probleme</div>
        </div>
      ) : (
        <div className='flex flex-col justify-between items-start gap-4 pt-28 pb-28 px-4'>
          <button
            onClick={() => navigate(-1)}
            className='flex flex-row items-center cursor-pointer gap-2'
          >
            <ArrowLongLeftIcon className='h-5 w-5 text-gray-400' />
            <span className='text-base text-blue-500'>Back to add</span>
          </button>
          <div className='flex flex-row items-start justify-between gap-4 w-full'>
            <div className='w-2/3 flex flex-col gap-4'>
              <ReservationHighlights />
              <ReservationSummary />
            </div>
            <div className='w-1/3 rounded-md border border-gray-200'>
              <div className='p-4 bg-gray-50 text-lg text-gray-500'>
                Summary
              </div>
              <div className='p-4'>
                <TripSummary trip={trip} />
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
export default Payement

import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DetailsTravel from '@/components/Travel/DetailsTravel'
import DriverInformation from '@/components/DriverInformation'
import DetailsReservation from '@/components/Travel/DetailsReservation'
import { useTravelManageActions } from '@/stores/use-travel-manage-store'
import AnimationCircleLoading from '@/components/common/Animation/AnimationCircleLoading'

const Travel: React.FC = () => {
  const location = useLocation()
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
        <div className='w-full'>
          <AnimationCircleLoading height={100} width={100} />
        </div>
      ) : hasError ? (
        <>Probleme</>
      ) : (
        <div className='flex justify-between items-start gap-4 pt-28 pb-28 px-4'>
          <DetailsTravel trip={trip} />
          <div className='flex flex-col gap-4 w-1/3'>
            <DetailsReservation />
            <div className='flex flex-col gap-4 rounded-md p-4 border border-gray-200'>
              {/* headers for reservation */}
              <div className='flex flex-row justify-between items-end border-b border-gray-200 p-4'>
                <span className='text-base text-gray-400'>Driver</span>
              </div>
              <DriverInformation />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Travel

import React, { useState, useEffect } from 'react'
import Line from '@/components/common/Line/Line'
import { useTravelManageActions } from '@/stores/use-travel-manage-store'
import CardTravelPostSkeleton from '@/components/common/Animation/CardTravelPostSkeleton'
import CardTravelPost from '@/components/CardTravelPost/CardTravelPost'

const dataTravelPostSkeleton: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
  const result: T[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }
  return result
}

const TransBookCompare: React.FC = () => {
  const [chunkedTrips, setChunkedTrips] = useState<any[][]>([])
  const [hasError, setHasError] = useState<boolean>(false)
  const { getSixRecentTrips } = useTravelManageActions()
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const chunkedTravelPostSkeletons = chunkArray(dataTravelPostSkeleton, 3)

  useEffect(() => {
    const fetchSixRecentTrips = async () => {
      setIsFetching(true)
      try {
        const { data } = await getSixRecentTrips()
        setChunkedTrips(chunkArray(data, 3))
      } catch (e: any) {
        setHasError(true)
      } finally {
        setIsFetching(false)
      }
    }
    fetchSixRecentTrips()
  }, [getSixRecentTrips])

  return (
    <div className='w-full px-4 mx-auto'>
      <div className='flex flex-col gap-4 text-center max-w-xl mx-auto'>
        <h1 className='text-6xl text-blue-900'>
          Find the best <br /> and <br /> book there, now
        </h1>
        <p className='text-lg text-gray-500'>
          The problem with ticket prices is that they change all the time, but
          by comparing, you are winners at all times
        </p>
        <Line />
      </div>
      {isFetching ? (
        <div className='-mx-3 md:flex items-start'>
          {chunkedTravelPostSkeletons.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className='px-3 md:w-1/3'>
              {chunk.map((item) => (
                <React.Fragment key={item}>
                  <CardTravelPostSkeleton className='border border-gray-200' />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className='-mx-3 md:flex items-start'>
          {chunkedTrips.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className='px-3 md:w-1/3'>
              {chunk.map((trip, tripIndex) => (
                <React.Fragment key={tripIndex}>
                  <CardTravelPost
                    trip={trip}
                    isVisiblePrice={false}
                    className='border border-gray-200 mb-6'
                  />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      )}
      {hasError && <>Fetch have a probleme</>}
    </div>
  )
}

export default TransBookCompare

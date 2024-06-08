import React, { useState, useEffect } from 'react'
import {
  useSearchTrips,
  useFormSearchData,
  useTotalSearchItems,
  useSearchCountPage,
  useTotalSearchPages,
  useFormSearchAction,
} from '@/stores/use-form-search-store'
import { formatDate } from '@/utils/formatDate'
import Button from '@/components/common/Button/Button'
import FormSearch from '@/components/Search/FormSearch'
import InfiniteScroll from 'react-infinite-scroll-component'
import RideOptionsFilter from '@/components/Search/RideOptionsFilter'
import CardTravelPost from '@/components/CardTravelPost/CardTravelPost'
import AnimationCircleLoading from '@/components/common/Animation/AnimationCircleLoading'
import { ArrowLongRightIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

const Search: React.FC = () => {
  const trips = useSearchTrips()
  const page = useSearchCountPage()
  const totalPages = useTotalSearchPages()
  const totalItems = useTotalSearchItems()
  const formSearchData = useFormSearchData()
  const { nextPage } = useFormSearchAction()
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchMoreTrips = async () => {
    setIsLoading(true)
    await nextPage()
    setIsLoading(false)
    setHasMore(page < totalPages)
  }

  useEffect(() => {
    if (trips.length === 0 && !isLoading) {
      setIsLoading(true)
      fetchMoreTrips().then(() => setIsLoading(false))
    }
  }, [])

  useEffect(() => {
    setHasMore(() => {
      if (totalItems <= 6) {
        return false
      } else {
        return totalPages !== page
      }
    })
  }, [page, totalPages])

  return (
    <div className='flex pt-20 px-4'>
      <div className='flex flex-row gap-6 w-full'>
        <div className='hidden md:flex flex-col py-8 gap-8 h-fit w-2/5 sticky top-20'>
          <FormSearch displayTitle={true} setHasMore={setHasMore} />
        </div>
        <div className='flex-grow'>
          <div className='flex z-10 h-fit py-8 bg-white sticky top-20'>
            <RideOptionsFilter />
          </div>
          <div className='flex flex-col items-center min-h-[70vh] pb-10'>
            <div className='flex flex-col w-full'>
              {trips.length > 0 ? (
                <InfiniteScroll
                  dataLength={trips.length}
                  next={fetchMoreTrips}
                  hasMore={hasMore}
                  loader={
                    <div className='w-full'>
                      <AnimationCircleLoading height={80} width={80} />
                    </div>
                  }
                >
                  <div className='flex flex-col gap-4 items-start'>
                    <div className='flex flex-col gap-4'>
                      <span className='text-xl text-blue-500 font-semibold'>
                        {formatDate(
                          new Date(formSearchData.dateOfDeparture ?? ''),
                        ) ?? "Aujourd'hui"}
                        :
                      </span>
                      <div className='flex flex-col gap-1 text-gray-400 text-sm'>
                        <div className='flex flex-row gap-1 items-center'>
                          <span>{formSearchData.departurePrecise ?? '--'}</span>
                          <ArrowLongRightIcon className='h-5 w-5 text-gray-400' />
                          <span>
                            {formSearchData.destinationPrecise ?? '--'}
                          </span>
                          <span>:</span>
                        </div>
                        <span>{totalItems} trajets disponibles</span>
                      </div>
                    </div>
                    {trips.map((trip, index) => (
                      <React.Fragment key={index}>
                        <CardTravelPost
                          trip={trip}
                          isVisiblePrice={true}
                          className={`w-full border border-gray-100 rounded-md hover:bg-gray-50 `}
                          isCompleted={false}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </InfiniteScroll>
              ) : (
                <div className='flex flex-col gap-4 items-start'>
                  <div className='flex flex-col gap-4'>
                    <span className='text-xl text-blue-500 font-semibold'>
                      {formatDate(
                        new Date(formSearchData.dateOfDeparture ?? ''),
                      ) ?? "Aujourd'hui"}
                      :
                    </span>
                    <div className='flex flex-col gap-1 text-gray-400 text-base justify-center py-8 px-14 '>
                      <h1 className='text-blue-500'>
                        There is no trip available today between these cities
                      </h1>
                      <div className='flex flex-row gap-1 justify-center items-center'>
                        <span>{formSearchData.departurePrecise}</span>
                        <ArrowLongRightIcon className='h-5 w-5 text-gray-400' />
                        <span>{formSearchData.destinationPrecise}</span>
                        <span>:</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Button
              type='button'
              text='Create an alerte'
              className='mt-10 bg-yellow text-blue-900 font-semibold w-fit'
            />
            <button
              type='button'
              className='flex flex-row items-center justify-between gap-2 px-4 py-6 rounded-md max-h-[44px] mt-10 text-blue-500 font-semibold w-full hover:bg-gray-50'
            >
              <div className='flex-1 flex flex-row items-center gap-2 justify-start'>
                <ChevronDownIcon className='h-7 w-7 text-gray-400' />
                <span>Departure later</span>
              </div>
              {isLoading && <AnimationCircleLoading height={80} width={80} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search

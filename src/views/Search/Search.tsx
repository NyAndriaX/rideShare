import React, { useState } from 'react'
import Button from '@/components/common/Button/Button'
import FormSearch from '@/components/Search/FormSearch'
import InfiniteScroll from 'react-infinite-scroll-component'
import RideOptionsFilter from '@/components/Search/RideOptionsFilter'
import CardTravelPost from '@/components/CardTravelPost/CardTravelPost'
import { ArrowLongRightIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

const mocksData: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]

const Search: React.FC = () => {
  const [items, setItems] = useState(mocksData.slice(0, 5))
  // const [isLoading,setIsLoading] = useState<boolean>(false) // need for true data
  const [hasMore, setHasMore] = useState<boolean>(true)

  const fetchMoreData = async () => {
    const nextItems = mocksData.slice(items.length, items.length + 5)
    setItems([...items, ...nextItems])
    setHasMore(nextItems.length === 5)
  }

  return (
    <div className='flex pt-20 px-4'>
      <div className='flex flex-row gap-6 w-full'>
        <div className='flex flex-col py-8 gap-8 h-fit w-2/5 sticky top-20'>
          <FormSearch />
        </div>
        <div className='flex-grow'>
          <div className='flex z-10 h-fit py-8 bg-white sticky top-20'>
            <RideOptionsFilter />
          </div>
          <div className='flex flex-col items-center min-h-[70vh] pb-10'>
            <div className='flex flex-col w-full'>
              {items.length > 0 ? (
                <InfiniteScroll
                  dataLength={items.length}
                  next={fetchMoreData}
                  hasMore={hasMore}
                  loader={<div>Loading...</div>}
                >
                  <div className='flex flex-col gap-4 items-start'>
                    <div className='flex flex-col gap-4'>
                      <span className='text-xl text-blue-500 font-semibold'>
                        Ajourd'hui :
                      </span>
                      <div className='flex flex-col gap-1 text-gray-400 text-sm'>
                        <div className='flex flex-row gap-1 items-center'>
                          <span>Troyes</span>
                          <ArrowLongRightIcon className='h-5 w-5 text-gray-400' />
                          <span>Paris</span>
                          <span>:</span>
                        </div>
                        <span>1 trajets disponibles</span>
                      </div>
                    </div>
                    {items.map((items, index) => (
                      <React.Fragment key={index}>
                        <CardTravelPost
                          isCompleted={items % 2 === 0 ? false : true}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </InfiniteScroll>
              ) : (
                <div className='flex flex-col gap-4 items-start'>
                  <div className='flex flex-col gap-4'>
                    <span className='text-xl text-blue-500 font-semibold'>
                      Ajourd'hui :
                    </span>
                    <div className='flex flex-col gap-1 text-gray-400 text-base justify-center py-8 px-14 '>
                      <h1 className='text-blue-500'>
                        There is no trip available today between these cities
                      </h1>
                      <div className='flex flex-row gap-1 justify-center items-center'>
                        <span>Troyes</span>
                        <ArrowLongRightIcon className='h-5 w-5 text-gray-400' />
                        <span>Paris</span>
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
              className='flex flex-row items-center gap-2 px-4 py-6 rounded-md max-h-[44px] mt-10 text-blue-500 justify-start font-semibold w-full hover:bg-gray-50'
            >
              <ChevronDownIcon className='h-7 w-7 text-gray-400' />
              <span>Departure later</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search

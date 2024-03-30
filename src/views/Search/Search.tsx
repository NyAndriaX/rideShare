import React from 'react'
import SearchCard from '@/components/Home/SearchCard'
import Travel from '@/components/Search/Travel'

const Search: React.FC = () => {
  return (
    <div className='flex flex-row gap-4 z-0 pt-32'>
      <div className='flex flex-col justify-center items-center gap-8 w-1/2 px-4'>
        <p className='text-2xl text-primary font-semibold text-center'>
          Find a route
        </p>
        <SearchCard />
      </div>
      <div className='w-1/2'>
        <Travel />
      </div>
    </div>
  )
}

export default Search

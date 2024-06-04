import React, { useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { BusIson } from '../common/Icons/Icons'
import { CarsIcon } from '../common/Icons/Icons'
import { useTotalSearchItems } from '@/stores/use-form-search-store'

const NavLink: React.FC<{
  index: number
  text: string
  numbers: number
  icons?: ReactNode
  onClick: () => void
  activeLink: number
  variants: { [key: string]: any }
}> = ({ index, text, onClick, activeLink, variants, numbers, icons }) => (
  <li className='flex-1'>
    <button
      className={`flex flex-row gap-2 justify-center items-center ${activeLink === index ? ' text-blue-500' : 'text-gray-400'} w-full font-semibold py-2 px-4 text-center`}
      onClick={onClick}
    >
      <span>
        {icons &&
          typeof icons !== 'string' &&
          React.isValidElement(icons) &&
          icons}
      </span>
      <span>{text}</span>
      <div
        className={`h-1 w-1 rounded-full ${activeLink === index ? ' bg-blue-500' : 'bg-gray-400'}`}
      />
      <span>{numbers === 0 ? '--' : numbers}</span>
    </button>
    <motion.div
      animate={activeLink === index ? 'active' : 'underline'}
      variants={variants}
      className='border border-blue-500'
    />
  </li>
)

const RideOptionsFilter: React.FC = () => {
  const totalItems = useTotalSearchItems()
  const [activeLink, setActiveLink] = useState<number>(0)

  const variants = {
    underline: {
      width: '0%',
      height: '3px',
      backgroundColor: '#007bff',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    active: {
      width: '100%',
    },
  }

  const handleLinkClick = (index: number) => setActiveLink(index)

  return (
    <nav className='flex w-full items-center justify-between'>
      <ul className='flex space-x-4 flex-row justify-between items-end w-full p-4 rounded-md border border-gray-100'>
        <NavLink
          index={0}
          text='All'
          icons={<div className='h-9' />}
          numbers={totalItems}
          onClick={() => handleLinkClick(0)}
          activeLink={activeLink}
          variants={variants}
        />
        <NavLink
          index={1}
          text='Carpooling'
          icons={
            <CarsIcon
              className={`w-9 h-9 ${activeLink === 1 ? 'text-blue-500' : 'text-gray-400'}`}
            />
          }
          numbers={0}
          onClick={() => handleLinkClick(1)}
          activeLink={activeLink}
          variants={variants}
        />
        <NavLink
          index={2}
          text='Bus'
          numbers={0}
          icons={
            <BusIson
              className={`w-9 h-9 ${activeLink === 2 ? 'text-blue-500' : 'text-gray-400'}`}
            />
          }
          onClick={() => handleLinkClick(2)}
          activeLink={activeLink}
          variants={variants}
        />
      </ul>
    </nav>
  )
}

export default RideOptionsFilter

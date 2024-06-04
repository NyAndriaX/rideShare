import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'
import { User } from '@/types/interface'
import { formatDate } from '@/utils/formatDate'
import {
  PlusCircleIcon,
  Bars3BottomLeftIcon,
} from '@heroicons/react/24/outline'
import { CloseIcon } from '../common/Icons/Icons'

interface EditProps {
  user: Partial<User> | null
}

const Button = styled.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: start;
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  &:hover {
    background-color: #f9fafb;
  }
`

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
}

const overlayVariants = {
  open: { opacity: 1, pointerEvents: 'auto' as const },
  closed: { opacity: 0, pointerEvents: 'none' as const },
}

type DrawerProps = {
  // sets the default width
  children: any
  width?: number
}

export const Drawer: React.FC<DrawerProps> = ({ width = 350, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleOpen = useCallback(() => setIsOpen((isOpen) => !isOpen), [])

  const [hammerLoaded, setHammerLoaded] = useState<boolean>(false)

  const drawerRef = useRef<null | HTMLDivElement>(null)

  const pannerRef = useRef<null | HTMLDivElement>(null)

  const hammertimeDrawer = useRef<any>()

  const hammertimePanner = useRef<any>()

  const hammerInstance = useRef<any>()

  useEffect(() => {
    const loadHammer = async () => {
      hammerInstance.current = (await import('hammerjs')).default

      setHammerLoaded(true)
    }
    loadHammer()
  }, [])

  useEffect(() => {
    if (hammerLoaded) {
      const Hammer = hammerInstance.current
      if (drawerRef?.current) {
        if (!hammertimeDrawer?.current) {
          if (Hammer) {
            hammertimeDrawer.current = new Hammer(drawerRef.current, {
              touchAction: 'pan-y',
            })
          }
        }
        hammertimeDrawer?.current?.on('swipeleft', toggleOpen)
      }

      if (pannerRef?.current) {
        if (!hammertimePanner?.current) {
          if (Hammer) {
            hammertimePanner.current = new Hammer(pannerRef.current, {
              touchAction: 'pan-y',
            })
          }
        }
        hammertimePanner?.current?.on('swiperight', toggleOpen)
      }
      return () => {
        hammertimeDrawer?.current?.off('swipeleft', toggleOpen)
        hammertimePanner?.current?.off('swiperight', toggleOpen)
      }
    }

    return () => {}
  }, [toggleOpen, hammerLoaded])

  return (
    <React.Fragment>
      <button
        onClick={toggleOpen}
        className='hamburger py-4 text-purple-600 transform transition-transform  hover:scale-125 active:scale-95 focus:outline-none '
      >
        <Bars3BottomLeftIcon className='h-6 w-6' />
      </button>
      <div ref={pannerRef} className='z-20 fixed inset-y-0 p-4' />
      <motion.div
        className='z-10 fixed inset-0 bg-black'
        style={
          {
            '--tw-bg-oacity': 0.4,
          } as any
        }
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        variants={overlayVariants}
        transition={{ type: 'tween' }}
        onClick={toggleOpen}
      />
      <motion.div
        ref={drawerRef}
        className='fixed top-0 bottom-0 z-30'
        initial='closed'
        animate={isOpen ? 'open' : closed}
        variants={variants}
        transition={{ type: 'spring', stiffness: 350, damping: 40 }}
      >
        <div
          style={{ width }}
          className='bg-white border border-gray-300 p-4 h-full select-text'
        >
          <div className='flex items-center justify-end'>
            <button
              onClick={toggleOpen}
              className='hamburger p-1 text-red-500 transform transition-transform hover:scale-125 active:scale-95 focus:outline-none'
            >
              <CloseIcon className='h-6 w-6' />
            </button>
          </div>
          {/* Drawer Content */}
          {children}
        </div>
      </motion.div>
    </React.Fragment>
  )
}

const Edit: React.FC<EditProps> = ({ user }) => {
  return (
    <div className='flex flex-col gap-4 w-1/2'>
      {/* <Drawer>Test</Drawer> */}
      <h1 className='text-blue-900'>Personal information</h1>
      <div className='flex flex-col gap-6 '>
        <div className='flex flex-col gap-4 items-start w-full'>
          <Button>
            <p className='text-base text-gray-500'>Last Name</p>
            <p className='text-sm text-blue-500'>{user?.lastName}</p>
          </Button>
          <Button>
            <p className='text-base text-gray-500'>First Name</p>
            <p className='text-sm text-blue-500'>{user?.firstName}</p>
          </Button>
          <Button>
            <p className='text-base text-gray-500'>Date of birth</p>
            <p className='text-sm text-blue-500'>
              {user &&
                user.dateOfBirth &&
                formatDate(new Date(user?.dateOfBirth))}
            </p>
          </Button>
          <Button>
            <p className='text-base text-gray-500'>E-Mail</p>
            <p className='text-sm text-blue-500'>{user?.email}</p>
          </Button>
        </div>
        <div className='bg-gray-50 h-1 rounded-md' />
        <div className='flex flex-row items-center gap-2 px-6 py-2 text-blue-500'>
          <PlusCircleIcon className='h-6 w-6' />
          <p className='text-base'>Add a Minibio</p>
        </div>
      </div>
    </div>
  )
}
export default Edit

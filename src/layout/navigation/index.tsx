import React, { useState, useEffect, useCallback } from 'react'
import SetCountry from './setCountry'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  PlusCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { styled } from 'styled-components'
import Button from '@/components/common/Button/Button'
import Logo from '@/components/common/Logo/Logo'
import { motion, AnimatePresence } from 'framer-motion'
import Users from '@/components/Users'
import { useUserInfo } from '@/stores/use-auth-store'

const NavList = styled.li`
  list-style-type: none;
  font-weight: bold;
  color: rgb(32 140 251);
  cursor: pointer;
`
interface DrawerNavigationProps {
  showDrawer: boolean
  toggleDrawer: () => void
  toggleNavigation: (path: string) => void
}

const DrawerNavigation: React.FC<DrawerNavigationProps> = ({
  showDrawer,
  toggleDrawer,
  toggleNavigation,
}) => {
  useEffect(() => {
    if (showDrawer) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [showDrawer])

  return (
    <div className='flex md:hidden'>
      {!showDrawer ? (
        <button onClick={toggleDrawer}>
          <Bars3Icon className='h-7 w-7 text-gray-400' />
        </button>
      ) : (
        <button onClick={toggleDrawer}>
          <XMarkIcon className='h-7 w-7 text-gray-400' />
        </button>
      )}
      <AnimatePresence>
        {showDrawer && (
          <motion.div
            className='fixed inset-0 bg-black top-16 bg-opacity-50 z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleDrawer}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='flex flex-col gap-4 fixed inset-0 bg-white border  border-gray-200 top-16 py-6 w-2/3 z-50'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='flex flex-col gap-4  px-4'>
                <NavList>Carpooling</NavList>
                <NavList>Bus</NavList>
                <NavList>Daily carpooling</NavList>
              </div>
              <hr className='border-t border-gray-300 my-4' />
              <div className='flex flex-col items-center gap-2  px-4'>
                <Button
                  type='button'
                  text='Connexion'
                  onClick={() => toggleNavigation('/login')}
                  className='border border-white hover:border-blue-500 text-blue-500'
                />
                <Button
                  type='button'
                  text='Sign Up'
                  onClick={() => toggleNavigation('/register')}
                  className='bg-blue-500 text-white font-semibold hover:bg-blue-600'
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Navigation: React.FC = () => {
  const user = useUserInfo()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [showDrawer, setShowDrawer] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = useCallback(() => setOpen(true), [])

  const toggleDrawer = useCallback(() => {
    setShowDrawer((showDrawer) => !showDrawer)
  }, [])

  const toggleNavigation = useCallback((path: string) => {
    navigate(path)
    setShowDrawer((showDrawer) => !showDrawer)
  }, [])

  return (
    <motion.header
      animate={'visible'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className={`fixed z-50 bg-white w-full bg-opacity-100`}
    >
      <div className='flex flex-row justify-between items-center p-4'>
        <div className='flex flex-row justify-between items-center gap-10'>
          <div className='flex flex-row gap-2 items-center'>
            <DrawerNavigation
              toggleDrawer={toggleDrawer}
              showDrawer={showDrawer}
              toggleNavigation={toggleNavigation}
            />
            <Logo toggleNavigation={toggleNavigation} showDrawer={showDrawer} />
          </div>
          {!(
            pathname.startsWith('/register') ||
            pathname.startsWith('/app/offer-seats/')
          ) && (
            <div className='hidden md:flex flex-row gap-4'>
              <NavList>Carpooling</NavList>
              <NavList>Bus</NavList>
              <NavList>Daily carpooling</NavList>
            </div>
          )}
        </div>
        {!(
          pathname.startsWith('/register') ||
          pathname.startsWith('/app/offer-seats/')
        ) && (
          <div className='flex flex-row items-center justify-center gap-4'>
            <SetCountry />
            {user ? (
              <>
                <Button
                  type='button'
                  text='Publish'
                  onClick={() => toggleNavigation('/app/offer-seats')}
                  icon={
                    <PlusCircleIcon className='h-5 w-5' aria-hidden='true' />
                  }
                  className='border border-white hover:border-blue-500 text-blue-500'
                />
                <Users
                  open={open}
                  navigate={navigate}
                  handleClickOpen={handleClickOpen}
                />
              </>
            ) : (
              <div className='hidden md:flex flex-row items-center gap-4 w-full'>
                <Button
                  type='button'
                  text='Connexion'
                  onClick={() => toggleNavigation('/login')}
                  className='border border-white hover:border-blue-500 text-blue-500'
                />
                <Button
                  type='button'
                  text='Sign Up'
                  onClick={() => toggleNavigation('/register')}
                  className='bg-blue-500 text-white font-semibold hover:bg-blue-600'
                />
              </div>
            )}
          </div>
        )}
      </div>
    </motion.header>
  )
}

export default Navigation

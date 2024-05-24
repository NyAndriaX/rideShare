import React, { useState, useEffect } from 'react'
import SetCountry from './setCountry'
import { useLocation, useNavigate } from 'react-router-dom'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { styled } from 'styled-components'
import Button from '@/components/common/Button/Button'
import Logo from '@/components/common/Logo/Logo'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Users from '@/components/Users'
import { useUserInfo } from '@/stores/use-auth-store'

const NavList = styled.li`
  list-style-type: none;
  font-weight: bold;
  color: rgb(32 140 251);
  cursor: pointer;
`

const Navigation: React.FC = () => {
  const user = useUserInfo()
  const navigate = useNavigate()
  const { scrollY } = useScroll()
  const { pathname } = useLocation()
  const [hidden, setHidden] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const [prevScrollY, setPrevScrollY] = useState<number>(0)
  const [currentScrollY, setCurrentScrollY] = useState<number>(0)

  function update() {
    if (currentScrollY < prevScrollY) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  }

  const handleClickOpen = () => setOpen(true)

  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 },
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setCurrentScrollY(latest), update(), setPrevScrollY(currentScrollY)
  })

  useEffect(() => {
    setHidden(false)
  }, [pathname])

  return (
    <motion.header
      variants={variants}
      animate={!pathname.startsWith('/search') && hidden ? 'hidden' : 'visible'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className={`fixed z-50 bg-white w-full ${currentScrollY <= 0 ? 'bg-opacity-100' : 'bg-opacity-70'}`}
    >
      <div className='flex flex-row justify-between items-center p-4'>
        <div className='flex flex-row justify-between items-center gap-10'>
          <Logo />
          {!(
            pathname.startsWith('/register') ||
            pathname.startsWith('/app/offer-seats/')
          ) && (
            <div className='flex flex-row gap-4'>
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
                  onClick={() => navigate('/app/offer-seats')}
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
              <>
                <Button
                  type='button'
                  text='Connexion'
                  onClick={() => navigate('/login')}
                  className='border border-white hover:border-blue-500 text-blue-500'
                />
                <Button
                  type='button'
                  text='Sign Up'
                  onClick={() => navigate('/register')}
                  className='bg-blue-500 text-white font-semibold hover:bg-blue-600'
                />
              </>
            )}
          </div>
        )}
      </div>
    </motion.header>
  )
}

export default Navigation

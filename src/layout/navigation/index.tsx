import React, { useState } from 'react'
import SetCountry from './setCountry'
import { useLocation } from 'react-router-dom'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/Button/Button'
import Logo from '@/components/common/Logo/Logo'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const NavList = styled.li`
  list-style-type: none;
  font-weight: bold;
  color: rgb(32 140 251);
  cursor: pointer;
`

const Navigation: React.FC = () => {
  const navigate = useNavigate()
  const { scrollY } = useScroll()
  const { pathname } = useLocation()
  const [hidden, setHidden] = useState(false)
  const [prevScrollY, setPrevScrollY] = useState<number>(0)
  const [currentScrollY, setCurrentScrollY] = useState<number>(0)

  function update() {
    if (currentScrollY < prevScrollY) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  }

  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 },
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setCurrentScrollY(latest), update(), setPrevScrollY(currentScrollY)
  })

  return (
    <motion.header
      variants={variants}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className={`fixed z-10 bg-white w-full ${currentScrollY <= 0 ? 'bg-opacity-100' : 'bg-opacity-70'}`}
    >
      <div className='flex flex-row justify-between items-center p-4'>
        <div className='flex flex-row justify-between items-center gap-10'>
          <Logo />
          {!pathname.startsWith('/register') && (
            <div className='flex flex-row gap-4'>
              <NavList>Covoiturage</NavList>
              <NavList>Bus</NavList>
              <NavList>Covoiturage du quotidien</NavList>
            </div>
          )}
        </div>
        {!pathname.startsWith('/register') && (
          <div className='flex flex-row items-center justify-center gap-4'>
            <SetCountry />
            <Button
              type='button'
              text='search'
              icon={
                <MagnifyingGlassIcon className='h-6 w-5' aria-hidden='true' />
              }
              onClick={() => console.log('search')}
              className='border border-white hover:border-darkWhite text-primary'
            />
            <Button
              type='button'
              text='Connexion'
              onClick={() => navigate('/login')}
              className='border border-white hover:border-darkWhite text-primary'
            />
            <Button
              type='button'
              text='Sign Up'
              onClick={() => navigate('/register')}
              className='bg-primary text-white font-semibold hover:bg-darkPrimary'
            />
          </div>
        )}
      </div>
    </motion.header>
  )
}

export default Navigation

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/common/Button/Button'
import Logo from '@/components/common/Logo/Logo'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const Navigation: React.FC = () => {
  const { scrollY } = useScroll()
  const navigate = useNavigate()
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
        <Logo />
        <div>NavList</div>
        <div className='flex flex-row gap-4'>
          <Button
            type='button'
            text='Connexion'
            onClick={() => navigate('/login')}
            className='border border-white hover:border-darkWhite'
          />
          <Button
            type='button'
            text='Sign Up'
            className='bg-primary text-white font-semibold hover:bg-darkPrimary'
          />
        </div>
      </div>
    </motion.header>
  )
}

export default Navigation

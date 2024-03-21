import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const Navigation: React.FC = () => {
  const { scrollY } = useScroll()
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
      className={`fixed bg-white w-full ${currentScrollY <= 0 ? 'bg-opacity-100' : 'bg-opacity-70'}`}
    >
      <div className='flex flex-row justify-between items-center p-4'>
        <div>Logo</div>
        <div>NavList</div>
        <div>Authentification</div>
      </div>
    </motion.header>
  )
}

export default Navigation

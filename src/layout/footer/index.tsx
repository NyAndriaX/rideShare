import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Subscribe from './section/Subscribe'
import SiteLink from './section/SiteLink'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <React.Fragment>
      {!(
        pathname.startsWith('/login') ||
        pathname.startsWith('/register') ||
        pathname.startsWith('/search')
      ) && (
        <motion.footer className='mt-5'>
          <Subscribe />
          <SiteLink />
        </motion.footer>
      )}
    </React.Fragment>
  )
}

export default Footer

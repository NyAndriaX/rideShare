import React from 'react'
import Subscribe from './section/Subscribe'
import SiteLink from './section/SiteLink'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <motion.footer>
      <Subscribe />
      <SiteLink />
    </motion.footer>
  )
}

export default Footer

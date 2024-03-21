import { motion } from 'framer-motion'
import React from 'react'

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// const item = {
//   hide: {
//     opacity: 0,
//     y: 400,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       staggerChildren: 0.2,
//       delayChildren: 0.2,
//     },
//   },
// };

const Footer: React.FC = () => {
  const viewportConfig = {
    once: true,
    margin: '320px',
  }
  return (
    <div className='mt-5'>
      <motion.footer
        variants={container}
        initial='hide'
        whileInView='show'
        viewport={viewportConfig}
      >
        Footer
      </motion.footer>
    </div>
  )
}

export default Footer

import React from 'react'
import { motion } from 'framer-motion'
import Input from '@/components/common/Input/Input'
import Button from '@/components/common/Button/Button'

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
    <div className='mt-10'>
      <motion.footer
        variants={container}
        initial='hide'
        whileInView='show'
        viewport={viewportConfig}
      >
        <div className='flex flex-col'>
          <div className='flex flex-col bg-primary text-white p-4'>
            <form className='flex flex-row gap-2 items-center justify-center'>
              <Input type='text' className='rounded-md border border-black' />
              <Button
                type='button'
                text='Send'
                className='bg-yellow text-black font-semibold'
              />
            </form>
          </div>
          <div className='text-white bg-darkPrimary p-4'>Lien des contact</div>
        </div>
      </motion.footer>
    </div>
  )
}

export default Footer

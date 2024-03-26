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
          <div className='flex flex-col items-center text-center justify-center bg-primary text-white py-14 px-4'>
            <div className='flex flex-col gap-4 w-1/2'>
              <div>
                <p className='text-2xl font-semibold'>
                  Subscribe to our newsletter
                </p>
                <p className='text-lg'>Stay tuned for good deals.</p>
              </div>
              <form className='flex flex-row items-center justify-between gap-2'>
                <div className='w-2/3'>
                  <Input
                    type='text'
                    placeholder='Email'
                    className='text-midnightBlue'
                  />
                </div>
                <div className='w-1/3'>
                  <Button
                    type='button'
                    text='Send'
                    className='bg-yellow text-black font-semibold'
                  />
                </div>
              </form>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center text-white bg-midnightBlue p-4'>
            <div>Logo and link</div>
            <div>About Site</div>
            <div>About to travel</div>
            <div>About Contact</div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default Footer

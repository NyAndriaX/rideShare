import React, { useState, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { User } from '@/types/interface'
import { styled } from 'styled-components'
import { formatDate } from '@/utils/formatDate'
import { PlusCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface EditProps {
  user: Partial<User> | null
}

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: start;
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  &:hover {
    background-color: #f9fafb;
  }
`

interface DrawerBottomProps {
  children: ReactNode
}

const DrawerBottom: React.FC<DrawerBottomProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleDrawer = () => setIsOpen((isOpen) => !isOpen)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])

  return (
    <React.Fragment>
      <StyledButton onClick={toggleDrawer}>{children}</StyledButton>
      {isOpen &&
        createPortal(
          <AnimatePresence>
            <motion.div>
              <motion.div
                className='fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-50'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={toggleDrawer}
              />
              <motion.div
                className='fixed inset-x-0 h-screen bottom-0 z-50 bg-white'
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className='flex flex-col items-center gap-4'>
                  <div className='flex flex-col w-full items-start p-4'>
                    <button onClick={toggleDrawer}>
                      <XMarkIcon className='h-6 w-6 text-blue-500' />
                    </button>
                  </div>
                  <div className='w-1/2'>{children}</div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )}
    </React.Fragment>
  )
}

const Edit: React.FC<EditProps> = ({ user }) => {
  return (
    <div className='flex flex-col gap-4 w-1/2'>
      <h1 className='text-blue-900'>Personal information</h1>
      <div className='flex flex-col gap-6 '>
        <div className='flex flex-col gap-4 items-start w-full'>
          <DrawerBottom>
            <p className='text-base text-gray-500'>Last Name</p>
            <p className='text-sm text-blue-500'>{user?.lastName}</p>
          </DrawerBottom>
          <DrawerBottom>
            <p className='text-base text-gray-500'>First Name</p>
            <p className='text-sm text-blue-500'>{user?.firstName}</p>
          </DrawerBottom>
          <DrawerBottom>
            <p className='text-base text-gray-500'>Date of birth</p>
            <p className='text-sm text-blue-500'>
              {user &&
                user.dateOfBirth &&
                formatDate(new Date(user?.dateOfBirth))}
            </p>
          </DrawerBottom>
          <DrawerBottom>
            <p className='text-base text-gray-500'>E-Mail</p>
            <p className='text-sm text-blue-500'>{user?.email}</p>
          </DrawerBottom>
        </div>
        <div className='bg-gray-50 h-1 rounded-md' />
        <div className='flex flex-row items-center gap-2 px-6 py-2 text-blue-500'>
          <PlusCircleIcon className='h-6 w-6' />
          <p className='text-base'>Add a Minibio</p>
        </div>
      </div>
    </div>
  )
}
export default Edit

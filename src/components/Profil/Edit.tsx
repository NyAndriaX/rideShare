import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createPortal } from 'react-dom'
import { User } from '@/types/interface'
import Input from '../common/Input/Input'
import { styled } from 'styled-components'
import Button from '../common/Button/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { PlusCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

const CapitalizeFirstLetter = ({ str }: { str: string }) => {
  return <span>{str.charAt(0).toUpperCase() + str.slice(1)}</span>
}

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
  label: string
  name: string
  value: string
}

const DrawerBottom: React.FC<DrawerBottomProps> = ({ label, name, value }) => {
  const formDefaultValues: Record<string, string> = {}
  formDefaultValues[name] = value
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<Record<string, string>>({
    defaultValues: formDefaultValues,
  })
  const [zoom, setZoom] = useState(1)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleDrawer = () => setIsOpen((isOpen) => !isOpen)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width <= 1280) {
        setZoom(0.85)
      } else {
        setZoom(1)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.addEventListener('resize', handleResize)
  }, [])

  const handleRegister = async (data: Record<string, string>) => {
    console.log(data)
  }

  return (
    <React.Fragment>
      <StyledButton onClick={toggleDrawer}>
        <p className='text-base text-gray-500'>{label}</p>
        <p className='text-sm text-blue-500'>{value}</p>
      </StyledButton>
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
                  <div
                    className='flex flex-col gap-8 w-1/2 pt-10 pb-28'
                    style={{ zoom: zoom }}
                  >
                    <h1 className='text-blue-900'>
                      What is your <CapitalizeFirstLetter str={label} /> ?
                    </h1>
                    <form
                      className='flex flex-col gap-6'
                      onSubmit={handleSubmit((data) => handleRegister(data))}
                    >
                      <Input
                        type='text'
                        {...register(name, {
                          required: `${label} is required`,
                        })}
                        error={errors[name]?.message}
                        ariaInvalid={isDirty}
                        autofocus
                        autoComplete='off'
                      />
                      <Button
                        type='submit'
                        text='Register'
                        disabled={!isValid}
                        className={`rounded-md font-semibold text-blue-900 bg-yellow`}
                      />
                    </form>
                  </div>
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
          <DrawerBottom
            name='lastname'
            label='last name'
            value={user?.lastName ?? ''}
          />
          <DrawerBottom
            name='firstname'
            label='first name'
            value={user?.firstName ?? ''}
          />
          <DrawerBottom
            name='dateofbirth'
            label='date of birth'
            value={user?.dateOfBirth?.toString() ?? ''}
          />
          <DrawerBottom name='email' label='email' value={user?.email ?? ''} />
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

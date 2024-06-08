import React, { useRef, useEffect, useState } from 'react'
import { v4 } from 'uuid'
import { toast } from 'react-toastify'
import { createPortal } from 'react-dom'
import { User } from '@/types/interface'
import { setItem } from '@/utils/storage'
import { StorageEnum } from '@/types/enum'
import { storage } from '@/config/firebase'
import Button from '../common/Button/Button'
import { useUserAction } from '@/stores/use-user-store'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuthActions } from '@/stores/use-auth-store'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import AnimationCircleLoading from '../common/Animation/AnimationCircleLoading'

interface ShowPictureProps {
  imageUrl: string
  isLoading: boolean
  toggleClose: () => void
  uploadImage: () => void
}

const ShowPicture: React.FC<ShowPictureProps> = ({
  imageUrl,
  isLoading,
  toggleClose,
  uploadImage,
}) => {
  return (
    <React.Fragment>
      {createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 bg-black bg-opacity-50 z-50 cursor-pointer flex justify-center items-center'
            onClick={toggleClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className='relative bg-white rounded-md w-fit h-fit z-50'
              onClick={(e) => e.stopPropagation()}
            >
              {isLoading && (
                <div className='absolute flex opacity-60 z-20 items-center justify-center top-0 bg-white rounded-md h-[320px] md:h-[520px] w-full'>
                  <AnimationCircleLoading height={100} width={100} />
                </div>
              )}
              <div className='relative w-full h-full z-10 bg-transparent'>
                {!isLoading && (
                  <button
                    onClick={toggleClose}
                    className='fixed rounded-full bg-red-500 w-fit h-fit z-60 p-1 -mt-3 ml-[270px] md:ml-[430px]'
                  >
                    <XMarkIcon className='h-6 w-6 text-white' />
                  </button>
                )}
                <div className='relative flex flex-col gap-2 p-2 rounded-md w-[300px] md:w-[450px] h-fit'>
                  <img
                    className='h-[300px] md:h-[450px] rounded-md w-full object-contain'
                    src={imageUrl}
                    alt={'Anonymous'}
                  />
                  <Button
                    type='button'
                    text='Update profile'
                    onClick={uploadImage}
                    className={`rounded-md font-semibold text-blue-900 bg-yellow`}
                  />
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

interface PictureProps {
  user: User | null
}

const Picture: React.FC<PictureProps> = ({ user }) => {
  const { me } = useAuthActions()
  const { updatedProfile } = useUserAction()
  const [file, setFile] = useState<any | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPicture, setShowPicture] = useState<boolean>(false)
  const [selectedPicture, setSelectedPicture] = useState<string | null>(null)

  const toggleClose = () => {
    setFile(null)
    setShowPicture(false)
    setIsLoading(false)
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  useEffect(() => {
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setSelectedPicture(imageUrl)
      setShowPicture(true)
    }
  }, [file])

  const uploadImage = async () => {
    if (file === null) return
    setIsLoading(true)
    try {
      const imageRef = await ref(storage, `images/${file.name + v4()}`)
      await uploadBytes(imageRef, file)
      const imageUrl = await getDownloadURL(imageRef)
      const { data } = await updatedProfile(user!.userId, {
        profilUrl: imageUrl,
      } as Partial<User>)
      const { token } = data
      await me(token)
      setItem(StorageEnum.Token, token)
      toast.success('Profile updated successfully')
    } catch (e: any) {
      toast.error(
        'A problem occurred during the update, please try again later',
      )
    } finally {
      setIsLoading(false)
      setShowPicture(false)
      toggleClose()
    }
  }

  return (
    <React.Fragment>
      <div className='flex flex-col items-center '>
        <div className='flex flex-col gap-10 md:flex-row justify-between items-center md:items-start md:gap-40 px-4 md:px-0 py-6 w-full md:w-2/3'>
          <div className='w-fit h-fit'>
            <img
              className='w-20 h-20 md:h-20 md:w-32 object-contain rounded-full border-4 border-gray-50'
              src={
                user && user?.profilUrl
                  ? user.profilUrl
                  : new URL('/image/person.svg', import.meta.url).href
              }
              alt={'Anonymous'}
            />
          </div>
          <div className='flex flex-col gap-8 w-fit'>
            <p className='text-xl font-semibold text-center text-blue-900'>
              Look straight ahead, without sunglasses and without anyone next to
              you
            </p>
            <input
              type='file'
              className='hidden'
              accept='image/*'
              ref={fileInputRef}
              onChange={(e) => setFile(e.target.files?.[0])}
            />
            <Button
              type='button'
              text='Choose a photo'
              onClick={handleButtonClick}
              className={`rounded-md font-semibold text-blue-900 bg-yellow`}
            />
          </div>
        </div>
      </div>
      {showPicture && selectedPicture && (
        <ShowPicture
          isLoading={isLoading}
          toggleClose={toggleClose}
          imageUrl={selectedPicture}
          uploadImage={uploadImage}
        />
      )}
    </React.Fragment>
  )
}
export default Picture

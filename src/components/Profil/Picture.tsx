import React, { useRef, useEffect, useState } from 'react'
import { v4 } from 'uuid'
import { createPortal } from 'react-dom'
import { storage } from '@/config/firebase'
import Button from '../common/Button/Button'
import { motion, AnimatePresence } from 'framer-motion'
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
              className='relative bg-white rounded-md w-1/3 h-2/3 z-50'
              onClick={(e) => e.stopPropagation()}
            >
              {isLoading && (
                <div className='absolute flex opacity-20 z-20 items-center justify-center top-0 bg-black rounded-md h-[72vh] w-full'>
                  <AnimationCircleLoading height={100} width={100} />
                </div>
              )}
              <div className='relative flex flex-col gap-6 w-full h-full rounded-md z-10'>
                <img
                  className='h-full rounded-md w-full border border-gray-200'
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
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body,
      )}
    </React.Fragment>
  )
}

const Picture: React.FC = () => {
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
    try {
      setIsLoading(true)
      const imageRef = await ref(storage, `images/${file.name + v4()}`)
      await uploadBytes(imageRef, file)
      const imageUrl = await getDownloadURL(imageRef)
      setIsLoading(false)
      console.log(imageUrl)
    } catch (e: any) {
      console.log(e)
    } finally {
      setShowPicture(false)
    }
  }

  return (
    <React.Fragment>
      <div className='flex flex-col items-center '>
        <div className='flex flex-row justify-between items-start gap-40 py-6 w-2/3'>
          <div className='w-fit h-fit'>
            <img
              className='h-36 w-36 rounded-full'
              src={new URL('/image/person.svg', import.meta.url).href}
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

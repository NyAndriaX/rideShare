import React, { useState, Fragment, useEffect } from 'react'
import { Button } from './Button.styled'
import { Transition, Dialog } from '@headlessui/react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { FormSearch } from '@/types/interface'
// import { formatDate } from '@/utils/formatDate'

interface ReturnDateProps {
  formSearch: FormSearch
  setFormSearch: React.Dispatch<React.SetStateAction<FormSearch>>
}

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const ReturnDate: React.FC<ReturnDateProps> = ({
  formSearch,
  setFormSearch,
}) => {
  const currentDate = new Date()
  const futureDate = new Date(currentDate.setDate(currentDate.getDate() + 6))
  const [value, onChange] = useState<Value>(futureDate)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setFormSearch({
      ...formSearch,
      returndate: value as Date,
    })
  }, [value])

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  return (
    <React.Fragment>
      <Button onClick={openModal}>
        {/* {formatDate(formSearch.returndate as Date)
          ? formatDate(formSearch.returndate as Date)
          : '(return date)'} */}
        (return date)
      </Button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>
          <div className='fixed inset-0'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel
                  className='w-1/2 transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all'
                  style={{ height: '60vh' }}
                >
                  <Dialog.Title
                    as='h3'
                    className='text-xl leading-6 text-primary font-bold'
                  >
                    when do you want to leave ?
                  </Dialog.Title>
                  <div className='mt-8 '>
                    <Calendar
                      onChange={onChange}
                      value={value}
                      className='w-full'
                      minDate={futureDate}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  )
}

export default ReturnDate

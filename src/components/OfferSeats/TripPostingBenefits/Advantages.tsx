import React from 'react'
import {
  EnergyIcon,
  ShareMomentIcon,
  MissileIcon,
} from '@/components/common/Icons/Icons'
import Line from '@/components/common/Line/Line'

const Advantages: React.FC = () => {
  return (
    <div className='w-full py-8 px-4'>
      <div className='text-center max-w-xl mx-auto'>
        <h1 className='text-blue-900'>Only good reasons to carpool with us</h1>
        <Line />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='flex flex-col gap-4 shadow-lg py-8 px-6 rounded-md'>
          <EnergyIcon className='h-10 w-10' />
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg text-blue-900 font-bold'>
              At your service 7 days a week
            </h3>
            <p className='text-gray-500'>
              Our team is at your disposal to answer all your questions by
              email, on social networks or directly with our most experienced
              members
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 shadow-lg py-8 px-6 rounded-md'>
          <ShareMomentIcon className='h-10 w-10' />
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg text-blue-900 font-bold'>
              Rideshare supports you
            </h3>
            <p className='text-gray-500'>
              Benefit from the reimbursement of your excess of up to 5,000 Ar
              when you publish a trip as a driver on Rideshare, and this for
              only 1,000 Ar
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4 shadow-lg py-8 px-6 rounded-md'>
          <MissileIcon className='h-10 w-10' />
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg text-blue-900 font-bold'>
              Security of your information
            </h3>
            <p className='text-gray-500'>
              A team dedicated to the protection of your data which remains
              confidential, adapted monitoring tools, secure navigation and
              information kept encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages

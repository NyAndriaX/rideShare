import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const LoginOptions: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-8 w-1/2'>
      <p className='text-2xl font-bold text-midnightBlue text-center'>
        I connect :
      </p>
      <div className='flex flex-col gap-4'>
        <div
          className='flex flex-row justify-between rounded-md cursor-pointer items-center p-4 bg-white hover:bg-offWhite'
          onClick={() => navigate('/login/email')}
        >
          <p className='text-base text-deepSeaBlue font-semibold'>
            Continue with an email address
          </p>
          <ChevronRightIcon className='h-6 w-6' />
        </div>
        <div className='border border-lightGrey mx-4' />
        <div
          className='flex flex-row justify-between cursor-pointer rounded-md items-center p-4 bg-white hover:bg-offWhite'
          onClick={() => navigate('/login')}
        >
          <p className='text-base text-deepSeaBlue font-semibold'>
            Continue with Facebook
          </p>
          <span className='flex flex-row gap-2 items-center w-16 justify-end'>
            <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              aria-hidden='true'
              className='_1rks9rr1 ejccx3fu ejccx3u ejccx3fu ejccx3aa h-6 text-midnightBlue'
            >
              <g color='brandBgFacebook'>
                <g color='currentColor'>
                  <path
                    fill='currentColor'
                    d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.69 3.229 8.624 7.584 9.705v-6.65H7.522V12h2.062v-1.317c0-3.404 1.54-4.981 4.882-4.981.634 0 1.727.124 2.174.248v2.77a13 13 0 0 0-1.155-.037c-1.64 0-2.273.621-2.273 2.236v1.08h3.266l-.561 3.057h-2.705v6.87C18.163 21.328 22 17.113 22 12'
                  ></path>
                </g>
              </g>
            </svg>
            <ChevronRightIcon className='h-6 w-6' />
          </span>
        </div>
      </div>
      <p className='text-base mx-4 text-deepSeaBlue font-semibold'>
        Not a member yet ?{' '}
        <span className='text-primary cursor-pointer'>Register</span>
      </p>
    </div>
  )
}

export default LoginOptions

import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { StepProgressBarStyled } from './StepProgressBar.styled'

interface StepProgressBarProps {
  pathname: string
}

const StepProgressBar: React.FC<StepProgressBarProps> = ({ pathname }) => {
  const navigate = useNavigate()

  const keywords = {
    options: ['email', 'name', 'date-of-birth', 'gender', 'password'],
    email: ['name', 'date-of-birth', 'gender', 'password'],
    name: ['date-of-birth', 'gender', 'password'],
    dateofbirth: ['gender', 'password'],
    gender: ['password'],
  }

  const isActive = useCallback(
    (path: string) => {
      return path === pathname ? 'is-active' : ''
    },
    [pathname],
  )

  const isComplete = useCallback(
    (keyword: string[]) => {
      return keyword.some((word) => pathname.includes(word))
        ? 'is-complete'
        : ''
    },
    [pathname],
  )

  return (
    <StepProgressBarStyled>
      <ol className='steps'>
        <li
          onClick={() => navigate('/register')}
          className={`step ${isActive('/register')} ${isComplete(keywords.options)}`}
          data-step='1'
        >
          Registration options
        </li>
        <li
          onClick={() => navigate('/register/email')}
          className={`step ${isActive('/register/email')} ${isComplete(keywords.email)}`}
          data-step='2'
        >
          E-mail
        </li>
        <li
          onClick={() => navigate('/register/name')}
          className={`step ${isActive('/register/name')} ${isComplete(keywords.name)}`}
          data-step='3'
        >
          First and last name
        </li>
        <li
          onClick={() => navigate('/register/date-of-birth')}
          className={`step  ${isActive('/register/date-of-birth')} ${isComplete(keywords.dateofbirth)}`}
          data-step='4'
        >
          Date of birth
        </li>
        <li
          onClick={() => navigate('/register/gender')}
          className={`step  ${isActive('/register/gender')}  ${isComplete(keywords.gender)}`}
          data-step='4'
        >
          Gender
        </li>
        <li
          onClick={() => navigate('/register/password')}
          className={`step  ${isActive('/register/password')}`}
          data-step='4'
        >
          Password
        </li>
      </ol>
    </StepProgressBarStyled>
  )
}

export default StepProgressBar

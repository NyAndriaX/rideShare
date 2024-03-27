import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { StepProgressBarStyled } from './StepProgressBar.styled'

interface StepProgressBarProps {
  pathname: string
}

const StepProgressBar: React.FC<StepProgressBarProps> = ({ pathname }) => {
  const navigate = useNavigate()

  const regexPatterns = {
    email: /(name|date-of-birth|gender|password)\//,
    name: /(date-of-birth|gender|password)\//,
    dateofbirth: /(gender|password)\//,
    gender: /password\//,
  }
  // useEffect(() => {

  // })

  return (
    <StepProgressBarStyled>
      <ol className='steps'>
        <li
          onClick={() => navigate('/register')}
          className={`step ${pathname === '/register' ? 'is-active' : 'is-complete'}`}
          data-step='1'
        >
          Registration options
        </li>
        <li
          onClick={() => navigate('/register/email')}
          className={`step ${pathname === '/register/email' && 'is-active'} ${!regexPatterns.email.test(pathname) && 'is-complete'}`}
          data-step='2'
        >
          E-mail
        </li>
        <li
          onClick={() => navigate('/register/name')}
          className={`step ${pathname === '/register/name' && 'is-active'} ${!regexPatterns.name.test(pathname) && 'is-complete'}`}
          data-step='3'
        >
          First and last name
        </li>
        <li
          onClick={() => navigate('/register/date-of-birth')}
          className={`step ${pathname === '/register/date-of-birth' && 'is-active'} ${!regexPatterns.dateofbirth.test(pathname) && 'is-complete'}`}
          data-step='4'
        >
          Date of birth
        </li>
        <li
          onClick={() => navigate('/register/gender')}
          className={`step ${pathname === '/register/gender' && 'is-active'} ${!regexPatterns.gender.test(pathname) && 'is-complete'}`}
          data-step='4'
        >
          Gender
        </li>
        <li
          onClick={() => navigate('/register/password')}
          className={`step ${pathname === '/register/password' && 'is-active'}`}
          data-step='4'
        >
          Password
        </li>
      </ol>
    </StepProgressBarStyled>
  )
}

export default StepProgressBar

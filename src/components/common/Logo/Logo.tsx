import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'

const LogoDiv = styled.div`
  font-family: 'Damion', cursive;
  color: #000;
  font-weight: bold;
  cursor: pointer;
`

const LogoText = styled.p`
  color: rgb(32 140 251);
  text-shadow: -5px 8px 14px #eaeaea;
`

interface LogoProps {
  showDrawer?: boolean
  toggleNavigation?: (path: string) => void
}

const Logo: React.FC<LogoProps> = ({ showDrawer, toggleNavigation }) => {
  const navigate = useNavigate()

  return (
    <LogoDiv
      onClick={() => {
        if (toggleNavigation && showDrawer) {
          toggleNavigation('/')
        } else {
          navigate('/')
        }
      }}
    >
      <LogoText className='text-2xl md:text-3xl md:-rotate-6'>
        RideShare
      </LogoText>
    </LogoDiv>
  )
}

export default Logo

import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'

const LogoDiv = styled.div`
  font-family: 'Damion', cursive;
  color: #000;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`

const LogoText = styled.p`
  color: rgb(32 140 251);
  text-shadow: -5px 8px 14px #eaeaea;
  rotate: -8deg;
`

const Logo: React.FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <LogoDiv onClick={handleClick}>
      <LogoText>RideShare</LogoText>
    </LogoDiv>
  )
}

export default Logo

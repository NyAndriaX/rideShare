import React from 'react'
import WelcomeBonus from './TripPostingBenefits/WelcomeBonus'
import Advantages from './TripPostingBenefits/Advantages'

const TripPostingBenefits: React.FC = () => {
  return (
    <div className='flex flex-col w-full'>
      <WelcomeBonus />
      <Advantages />
    </div>
  )
}

export default TripPostingBenefits

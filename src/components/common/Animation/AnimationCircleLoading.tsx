import React from 'react'
import Lottie from 'react-lottie'
import CircleLoading from '../../../assets/animation/Animation - 1715561199076.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: CircleLoading,
}

interface AnimationCircleLoadingProps {
  height: number
  width: number
}

const AnimationCircleLoading: React.FC<AnimationCircleLoadingProps> = ({
  height,
  width,
}) => {
  return (
    <Lottie
      options={defaultOptions}
      height={height ? height : 200}
      width={width ? width : 200}
    />
  )
}
export default AnimationCircleLoading

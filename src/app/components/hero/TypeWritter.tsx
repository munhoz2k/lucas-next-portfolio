'use client'
import { TypeAnimation } from 'react-type-animation'

interface TypeWritterProps {
  myJob: string
}

export default function TypeWritter({ myJob }: TypeWritterProps) {
  return (
    <TypeAnimation
      className='max-[768px]:h-16 max-[1280px]:h-20 text-3xl md:text-4xl lg:text-5xl text-black'
      sequence={[
        'Lucas Munhoz',
        1000,
        myJob,
        1000,
      ]}
      wrapper="div"
      speed={50}
      repeat={Infinity}
    />
  )
}
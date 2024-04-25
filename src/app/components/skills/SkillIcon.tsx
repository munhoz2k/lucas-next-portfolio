import React from 'react'
import Link from 'next/link'
import { MotionDiv } from '../motion/MotionDiv'

interface SkillIconProps {
  children: React.ReactNode
  redirectUrl: string
  description: string
  animationDelay: number
}

export default function SkillIcon({ children, description, redirectUrl, animationDelay }: SkillIconProps) {
  return (
    <MotionDiv
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: animationDelay, duration: .5 }}
      viewport={{ once: true, amount: 'some' }}
      className='group relative'
    >
      <Link
        className='relative flex justify-center items-center h-[180px] lg:h-[232px] p-1 py-4
        transition-all duration-300 text-black rounded-3xl hover:shadow-xl hover:shadow-zinc-700
        hover:-translate-y-3 hover:bg-brand-color hover:text-light-shades'
        href={redirectUrl}
      >
        {children}
      </Link>

      <span
        className='absolute z-20 px-3 py-2 -bottom-16 left-[50%] -translate-x-[50%]
        rounded-lg border border-gray-300 bg-white text-lg font-bold text-nowrap
        transition-all duration-300 origin-top ease-in-out scale-0 -translate-y-5 
        group-hover:scale-100 group-hover:-translate-y-0'
      >
        {description}
      </span>

    </MotionDiv>
  )
}
import React from 'react'
import Image from 'next/image'

import ilustration from '/public/images/ilustration-about-me.png'
import { MotionSection } from '../motion/MotionSection'

interface AboutSectionProps {
  title: string
  aboutText: string
}

export default function AboutSection({ title, aboutText }: AboutSectionProps) {
  return (
    <MotionSection
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: .7 }}
      className='text-dark-shades lg:-translate-x-10'
    >
      <div
        className='gap-10 items-center py-8 px-4 mt-24
        md:grid md:grid-cols-2 xl:gap-16'
      >
        <Image
          className='animated size-[420px] object-contain mb-8
          md:mb-0 max-md:mx-auto'
          src={ilustration}
          alt='Ilustração de um programador'
        />

        <div>
          <h1 className='mb-4 text-4xl font-bold text-black'>
            {title}
          </h1>

          <p className='text-base lg:text-lg'>
            {aboutText}
          </p>
        </div>
      </div>
    </MotionSection>
  )
}
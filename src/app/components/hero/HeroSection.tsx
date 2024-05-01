import Image from 'next/image'

import TypeWritter from './TypeWritter'
import { MotionSection } from '../motion/MotionSection'

import ilustration from '/public/images/ilustration-intro.png'
import Link from 'next/link'

interface HeroSectionProps {
  helloTitle: string
  myJob: string
  introText: string
  hireButton: string
  CVbutton: string
}

export default function HeroSection({ helloTitle, myJob, introText, hireButton, CVbutton }: HeroSectionProps) {
  return (
    <MotionSection
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1, }} 
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='max-md:mt-12 md:translate-x-12'
      id='hero-section'
    >
      <div className='grid grid-cols-1 md:grid-cols-12'>
        <div className='col-span-7 place-self-center'>
          <h1 className='mb-4 text-center md:text-left font-extrabold'>
            <span
              className='max-[500px]:text-3xl text-4xl md:text-5xl lg:text-6xl text-transparent
              bg-clip-text bg-gradient-to-br from-brand-color to-dark-accent'
            >
              {helloTitle}
            </span>

            <TypeWritter myJob={myJob} />
          </h1>

          <p className='text-dark-shades text-base md:text-lg lg:text-xl font-light mb-8'>
            {introText}
          </p>

          <div className='max-md:space-y-4'>
            <Link href='https://www.linkedin.com/in/lucas-munhoz-b946131a5/'>
              <button
                className='px-10 py-2 w-full bg-zinc-300 text-dark-shades text-lg
                rounded-xl shadow-md ring-1 ring-zinc-400 outline-none hover:ring-2
                hover:ring-brand-color hover:shadow-lg hover:shadow-brand-color hover:-translate-y-1
                md:mr-4 md:w-fit lg:px-10 lg:text-2xl transition-all duration-300'
              >
                {hireButton}
              </button>
            </Link>

            <button
              className='px-10 py-2 w-full bg-brand-color text-light-shades text-lg
              rounded-xl shadow-md outline-none hover:ring-2 hover:ring-brand-color
              hover:shadow-lg hover:shadow-brand-color hover:-translate-y-1
              lg:px-10 md:w-fit lg:text-2xl transition-all duration-300'
            >
              {CVbutton}
            </button>
          </div>
        </div>

        <div
          className='col-span-5 place-self-end mt-8 md:mt-0 max-md:hidden'
        >
          <Image
            className='md:animate-translateY md:size-[280px] lg:size-[420px] xl:size-[510px] 2xl:size-[600px]'
            src={ilustration}
            alt='GIF'
          />
        </div>
      </div>
    </MotionSection>
  )
}

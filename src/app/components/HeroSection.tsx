'use client'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

import ilustration from '../../../public/images/ilustration-intro.png'

export default function HeroSection() {
  return (
    <section className='max-md:mt-12 md:translate-x-12'>
      <div className='grid grid-cols-1 md:grid-cols-12'>
        <div className='col-span-7 place-self-center'>
          <h1 className='mb-4 text-center md:text-left font-extrabold'>
            <span
              className='text-4xl md:text-5xl lg:text-6xl text-transparent
              bg-clip-text bg-gradient-to-br from-brand-color to-dark-accent'
            >
              Hi, I'm
            </span>

            <TypeAnimation
              className='text-3xl md:text-4xl lg:text-5xl text-black'
              sequence={[
                'Lucas Munhoz',
                1000,
                'Front-end Developer',
                1000,
              ]}
              wrapper="div"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className='text-dark-shades text-base md:text-lg lg:text-xl font-light mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nemo
            commodi voluptates laboriosam, obcaecati, sit maiores est impedit ad
            aspernatur debitis repellat totam expedita officia praesentium,
            voluptatibus et omnis asperiores!
          </p>

          <div>
            <button
              className='px-6 py-2 mr-4 mb-2 w-full rounded-md bg-brand-color text-light-shades text-lg
              md:hover:px-12 hover:brightness-125 transition-all duration-500
              md:mb-0 md:w-fit lg:px-10 lg:text-2xl lg:hover:px-16'
            >
              Hire me
            </button>
            <button
              className='px-6 py-2 w-full rounded-md bg-dark-accent text-light-shades text-lg
              md:hover:px-12 hover:brightness-110 transition-all duration-500
              lg:px-10 md:w-fit lg:text-2xl lg:hover:px-16'
            >
              Download CV
            </button>
          </div>
        </div>

        <div
          className='col-span-5 place-self-end mt-8 md:mt-0 max-md:hidden'
        >
          <Image
            className='animated'
            src={ilustration}
            alt='GIF'
          />
        </div>
      </div>
    </section>
  )
}

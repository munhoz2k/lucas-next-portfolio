'use client'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

import ilustration from '/public/images/ilustration-intro.png'

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

          <div className='max-md:space-y-4'>
            <button
              className='px-10 py-2 w-full bg-zinc-300 text-dark-shades text-lg
              rounded-xl shadow-md ring-1 ring-zinc-400 outline-none hover:ring-2
              hover:ring-brand-color hover:shadow-lg hover:shadow-brand-color hover:-translate-y-1
              md:mr-4 md:w-fit lg:px-10 lg:text-2xl transition-all duration-300'
            >
              Hire me
            </button>

            <button
              className='px-10 py-2 w-full bg-dark-accent text-light-shades text-lg
              rounded-xl shadow-md outline-none hover:ring-2 hover:ring-brand-color
              hover:shadow-lg hover:shadow-brand-color hover:-translate-y-1
              lg:px-10 md:w-fit lg:text-2xl transition-all duration-300'
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

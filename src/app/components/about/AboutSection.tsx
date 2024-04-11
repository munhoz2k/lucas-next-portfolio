'use client'

import Image from 'next/image'
import React from 'react'

import ilustration from '/public/images/ilustration-about-me.png'
import Link from 'next/link'
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

export default function AboutSection() {
  return (
    <section className='text-dark-shades lg:-translate-x-10'>
      <div
        className='gap-10 items-center py-8 px-4 mt-20
        md:grid md:grid-cols-2 xl:gap-16'
      >
        <Image
          className='animated size-[420px] object-contain mb-8
          md:mb-0 max-md:mx-auto'
          src={ilustration}
          alt='Ilustração de um programador'
        />

        <div>
          <h2 className='mb-4 text-4xl font-bold text-black'>
            About Me
          </h2>

          <p className='text-base lg:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rem eos quaerat hic sint molestias perferendis, eligendi
            similique incidunt soluta mollitia quisquam blanditiis modi,
            explicabo tempore, ipsa saepe quo dolores molestiae.
          </p>

          <div className='flex gap-8 mt-10 max-[390px]:flex-col'>

            <div className='group relative'>
              <Link
                className='relative flex h-fit p-1 rounded-2xl transition-colors
                hover:bg-brand-color hover:text-light-shades'
                href="https://www.instagram.com/munhoz2k/"
              >
                <InstagramLogo size={64} />
              </Link>
              
              <span
                className='absolute z-20 px-3 py-2 -bottom-12 left-[50%] -translate-x-[50%]
                rounded-lg border border-gray-300 bg-white text-sm font-bold
                transition-all duration-300 origin-top ease-in-out scale-0 -translate-y-5 
                group-hover:scale-100 group-hover:-translate-y-0'
              >
                Instagram
              </span>
            </div>

            <div className='group relative'>
              <Link
                className='relative flex h-fit p-1 rounded-2xl transition-colors
                hover:bg-brand-color hover:text-light-shades'
                href="https://www.instagram.com/munhoz2k/"
              >
                <LinkedinLogo size={64} />
              </Link>
              
              <span
                className='absolute z-20 px-3 py-2 -bottom-12 left-[50%] -translate-x-[50%]
                rounded-lg border border-gray-300 bg-white text-sm font-bold
                transition-all duration-300 origin-top ease-in-out scale-0 -translate-y-5 
                group-hover:scale-100 group-hover:-translate-y-0'
              >
                LinkedIn
              </span>
            </div>

            <div className='group relative'>
              <Link
                className='relative flex h-fit p-1 rounded-2xl transition-colors
                hover:bg-brand-color hover:text-light-shades'
                href="https://www.instagram.com/munhoz2k/"
              >
                <GithubLogo size={64} />
              </Link>
              
              <span
                className='absolute z-20 px-3 py-2 -bottom-12 left-[50%] -translate-x-[50%]
                rounded-lg border border-gray-300 bg-white text-sm font-bold
                transition-all duration-300 origin-top ease-in-out scale-0 -translate-y-5 
                group-hover:scale-100 group-hover:-translate-y-0'
              >
                GitHub
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
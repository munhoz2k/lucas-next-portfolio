'use client'

import Image from 'next/image'
import React from 'react'

import ilustration from '../../../public/ilustration-about-me.png'
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
          className='size-[420px] object-contain mb-8
          md:mb-0 max-md:mx-auto'
          src={ilustration}
          alt='Ilustração de um programador'
        />

        <div>
          <h2 className='mb-4 text-4xl font-bold text-dark-shades'>
            About Me
          </h2>

          <p className='text-base lg:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rem eos quaerat hic sint molestias perferendis, eligendi
            similique incidunt soluta mollitia quisquam blanditiis modi,
            explicabo tempore, ipsa saepe quo dolores molestiae.
          </p>

          <div className='flex gap-8 mt-10'>
            <Link
              className='flex h-fit p-1 rounded-2xl transition-colors
              hover:bg-brand-color hover:text-light-shades'
              href="https://www.instagram.com/munhoz2k/"
            >
              <InstagramLogo size={64} />
            </Link>

            <Link
              className='flex h-fit p-1 rounded-2xl transition-colors
              hover:bg-brand-color hover:text-light-shades'
              href="https://www.instagram.com/munhoz2k/"
            >
              <LinkedinLogo size={64} />
            </Link>

            <Link
              className='flex h-fit p-1 rounded-2xl transition-colors
              hover:bg-brand-color hover:text-light-shades'
              href="https://www.instagram.com/munhoz2k/"
            >
              <GithubLogo size={64} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
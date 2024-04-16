'use client'

import Image from 'next/image'
import React from 'react'

import ilustration from '/public/images/ilustration-about-me.png'

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
            Passionate about web development, programming, softwares, how software works,
            how it is made and also passionate about games. In 2020 I was still wondering
            myself what I would do for living, it was at that time I learned how softwares
            were made. I decide to specialize in web development at the end of 2021 learning HTML,
            CSS, JavaScript and following the banck-end specialization path using Express,
            TypeScript and NodeJS. And today I'm working creating web pages with React and NextJS.
          </p>
        </div>
      </div>
    </section>
  )
}
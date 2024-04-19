'use client'

import Link from 'next/link'
import { Code } from 'phosphor-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className='footer bg-dark-shades'>
      <div
        className='container flex justify-between items-center p-10 mx-auto text-light-shades
        max-md:flex-col-reverse max-md:gap-8'
      >
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-4'>
            <Code className='size-10 max-sm:size-8' />
            <span>Made By Lucas Munhoz</span>
          </div>

          <p className='text-gray-400 text-sm max-sm:text-xs font-light'>
            Thanks everybody for your attention to my portfolio
          </p>
        </div>

        <span className='max-md:text-sm max-md:text-center'>
          Copyright © 2024{' '}
          <Link className='relative underline-hover text-brand-color' href=''>
            munhoz.tech
          </Link>.
          {' '}All rights reserved
        </span>
      </div>
    </footer>
  )
}
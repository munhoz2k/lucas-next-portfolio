'use client'

import Link from 'next/link'
import { Code } from 'phosphor-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className='footer bg-dark-shades'>
      <div className='container flex justify-between items-center p-10 mx-auto text-light-shades'>
        <div>
          <div className='flex items-center gap-4'>
            <Code size={32} />
            <span>Made By Lucas Munhoz</span>
          </div>

          <p className='text-gray-400 text-sm font-light'>
            Thanks everybody for your attention to my portfolio
          </p>
        </div>

        <span>
          Copyright © 2024{' '}
          <Link className='relative underline-hover text-brand-color' href=''>
            munhoz.tech
          </Link>.{' '}
          All rights reserved
        </span>
      </div>
    </footer>
  )
}
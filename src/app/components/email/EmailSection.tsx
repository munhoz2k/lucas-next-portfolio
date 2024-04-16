'use client'

import Link from 'next/link'
import React from 'react'
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

export default function EmailSection() {
  return (
    <section className='grid md:grid-cols-2 gap-4 mb-12 mt-48 py-24 px-4'>
      <div>
        <h5 className='text-xl text-black font-bold my-2'>
          Let's Connect
        </h5>

        <p className='text-dark-shades mb-4 max-w-md'>
          I'm currently looking for new oportunities, my inbox is always open.
          Whether you have a question or just want to say hi, i'll try my best
          to get back to you!
        </p>

        <div className='flex gap-8 mt-10 max-[390px]:flex-col'>
          <div className='group relative'>
            <Link
              className='relative flex h-fit p-1 -ml-2 rounded-2xl transition-colors
              hover:bg-brand-color hover:text-light-shades'
              href="https://www.linkedin.com/in/lucas-munhoz-b946131a5/"
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
              href="https://github.com/munhoz2k"
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

      <div className='mt-10 md:mt-0'>
        <form
          className='flex flex-col space-y-6 [&>div]:flex [&>div]:flex-col [&>div_label]:mb-1'  
        >
          <div>
            <label
              className='text-lg text-black font-medium ml-1'
              htmlFor="email"
            >
              Your email
            </label>
            <input
              className='px-4 py-2 outline-none duration-300 rounded-xl shadow-md bg-zinc-200 
              text-black/80 ring-1 ring-zinc-400 placeholder:text-black placeholder:opacity-50
              focus:ring-2 focus:ring-brand-color focus:shadow-lg focus:shadow-brand-color'
              placeholder='johndoe@example.com'
              type="email"
              id="email"
              required
            />
          </div>

          <div>
            <label
              className='text-lg text-black font-medium ml-1'
              htmlFor="email"
            >
              Subject
            </label>
            <input
              className='px-4 py-2 outline-none duration-300 rounded-xl shadow-md bg-zinc-200 
              text-black/80 ring-1 ring-zinc-400 placeholder:text-black placeholder:opacity-50
              focus:ring-2 focus:ring-brand-color focus:shadow-lg focus:shadow-brand-color'
              placeholder="Let's talk about..."
              type="text"
              id="subject"
              required
            />
          </div>

          <div>
            <label
              className='text-lg text-black font-medium ml-1'
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className='px-4 py-2 h-16 resize-none outline-none rounded-xl shadow-md bg-zinc-200
              text-black/80 ring-1 ring-zinc-400 placeholder:text-black placeholder:opacity-50
              focus:ring-2 focus:ring-brand-color focus:shadow-lg focus:shadow-brand-color
              transition-shadow duration-300 overflow-auto'
              placeholder="Hi, how are you? My name is John Doe..."
              id="message"
              required
            />
          </div>

          <button
            className='py-2 w-full bg-brand-color text-light-shades text-lg font-medium rounded-xl
            outline-none shadow-md hover:shadow-xl hover:shadow-brand-color/60 hover:-translate-y-1
            transition-all duration-300'
            type='submit'
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  )
}

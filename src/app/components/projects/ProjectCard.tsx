import React from 'react'
import Link from 'next/link'

import { MotionDiv } from '../motion/MotionDiv'

import { Code, Eye } from '@phosphor-icons/react/dist/ssr'

interface ProjectCardProps {
  imgUrl: string
  title: string
  description: string
  githubUrl: string
  host: {
    online: boolean
    pageUrl?: string
  }
}

export default function ProjectCard({
  imgUrl,
  title,
  description,
  githubUrl,
  host: { online, pageUrl },
}: ProjectCardProps) {
  return (
    <MotionDiv
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: .2, duration: 1 }}
      viewport={{ once: true, amount: .5 }}
      className='rounded-b-2xl rounded-t-2xl bg-brand-color shadow-style-2'
    >
      <div
        className='relative group h-72 bg-no-repeat rounded-t-2xl 
        max-[540px]:h-40 lg:h-52 xl:h-72 2xl:h-80'
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: '100% auto',
        }}
      >
        <div
          className='overlay absolute top-0 right-0 bottom-0 left-0
          flex justify-center items-center gap-8 rounded-t-2xl bg-black opacity-0
          group-hover:opacity-100 group-hover:bg-opacity-80 transition-all duration-500'
        >
          <Link
            className='p-4 transition-all duration-200 rounded-full text-stone-500
            border-opacity-0 border-2 border-stone-600
            hover:text-light-shades hover:bg-stone-600/30 hover:border-opacity-100'
            href={githubUrl}
          >
            <Code className='size-12' />
          </Link>

          {online && (
            <Link
              className='p-4 transition-all duration-200 rounded-full text-stone-500
              border-opacity-0 border-2 border-stone-600
              hover:text-light-shades hover:bg-stone-600/30 hover:border-opacity-100'
              href={pageUrl as string}
            >
              <Eye className='size-12' />
            </Link>
          )}
        </div>
      </div>

      <div className='py-3 px-4 text-light-shades'>
        <h5 className='text-xl font-semibold'>
          {title}
        </h5>

        <p className='text-light-shades/80'>
          {description}
        </p>
      </div>
    </MotionDiv>
  )
}
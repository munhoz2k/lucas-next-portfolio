import Link from 'next/link'
import { Code } from '@phosphor-icons/react/dist/ssr'

interface FooterProps {
  madeBy: string
  thanksText: string
  rightsText: string
}

export default function Footer({ madeBy, thanksText, rightsText }: FooterProps) {
  return (
    <footer className='footer bg-dark-shades'>
      <div
        className='container flex justify-between items-center gap-6 p-10 mx-auto text-light-shades
        max-md:flex-col max-md:gap-8'
      >
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-4'>
            <Code className='size-10 max-sm:size-8' />
            <span>{madeBy}</span>
          </div>

          <p className='text-gray-400 text-sm max-md:text-xs max-sm:text-center font-light'>
            {thanksText}
          </p>
        </div>

        <span className='max-md:text-sm max-md:text-center'>
          Copyright © 2024{' '}
          <Link className='relative underline-hover text-brand-color' href=''>
            munhoz.tech
          </Link>.{' '}
          {rightsText}
        </span>
      </div>
    </footer>
  )
}
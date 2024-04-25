'use client'

import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

import { GithubLogo, LinkedinLogo } from 'phosphor-react'

interface FormInputs extends HTMLFormControlsCollection {
  email: HTMLInputElement
  subject: HTMLInputElement
  message: HTMLTextAreaElement
}

interface EmailFormElement extends HTMLFormElement {
  readonly elements: FormInputs
}

interface EmailSectionProps {
  title: string
  text: string
  emailLabel: string
  subjectLabel: string
  subjectPlaceHolder: string
  messageLabel: string
  messageTextArea: string
  sendButton: string
}

export default function EmailSection({
  title,
  text,
  emailLabel,
  subjectLabel,
  subjectPlaceHolder,
  messageLabel,
  messageTextArea,
  sendButton
}: EmailSectionProps) {
  const [isFetchingEmail, setIsFetchingEmail] = useState(false)

  async function handleSubmit(e: React.FormEvent<EmailFormElement>) {
    setIsFetchingEmail(true)
    e.preventDefault()

    const formData = {
      email: e.currentTarget.elements.email.value,
      subject: e.currentTarget.elements.subject.value,
      message: e.currentTarget.elements.message.value
    }

    try {
      await axios.post('/api/sendmail', {
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })

      toast.success('E-mail has been sent successfully!')
    } catch (error) {
      toast.error('Failed to send the e-mail!')
    }

    setIsFetchingEmail(false)
  }
  
  return (
    <motion.section
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: .7 }}
      className='grid max-sm:p-0 md:grid-cols-2 gap-4 mb-12 mt-48 py-24 px-4'
    >
      <div>
        <h5 className='text-xl text-black font-bold my-2'>
          {title}
        </h5>

        <p className='text-dark-shades mb-4 max-w-md'>
          {text}
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
          onSubmit={handleSubmit}
        >
          <div>
            <label
              className='text-lg text-black font-medium ml-1'
              htmlFor="email"
            >
              {emailLabel}
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
              {subjectLabel}
            </label>
            <input
              className='px-4 py-2 outline-none duration-300 rounded-xl shadow-md bg-zinc-200 
              text-black/80 ring-1 ring-zinc-400 placeholder:text-black placeholder:opacity-50
              focus:ring-2 focus:ring-brand-color focus:shadow-lg focus:shadow-brand-color'
              placeholder={subjectPlaceHolder}
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
              {messageLabel}
            </label>
            <textarea
              className='px-4 py-2 h-16 resize-none outline-none rounded-xl shadow-md bg-zinc-200
              text-black/80 ring-1 ring-zinc-400 placeholder:text-black placeholder:opacity-50
              focus:ring-2 focus:ring-brand-color focus:shadow-lg focus:shadow-brand-color
              transition-shadow duration-300 overflow-auto'
              placeholder={messageTextArea}
              id="message"
              required
              />
          </div>

          <button
            className='py-2 w-full bg-brand-color text-light-shades text-lg font-medium rounded-xl
            outline-1 shadow-md enabled:hover:shadow-xl enabled:hover:shadow-brand-color/60
            enabled:hover:-translate-y-1 transition-all duration-300
            disabled:brightness-75 disabled:cursor-not-allowed'
            type='submit'
            disabled={isFetchingEmail}
            >
            {sendButton}
          </button>
        </form>
      </div>
    </motion.section>
  )
}

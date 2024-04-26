'use client'
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion"

import NavLink, { NavLinkProps } from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import CustomLanguageSelector from "./CustomLanguageSelector";

import { Code, List, X } from "phosphor-react";

interface NavBarProps {
  aboutLink: string
  skillsLink: string
  projectsLink: string
  contactLink: string
}

export default function NavBar({ aboutLink, skillsLink, projectsLink, contactLink }: NavBarProps) {
  const [navBarOpen, setNavBarOpen] = useState(false)
  
  const navLinks = [
    {
      title: aboutLink,
      id: 'about-section'
    },
    {
      title: skillsLink,
      id: 'skills-section'
    },
    {
      title: projectsLink,
      id: 'projects-section'
    },
    {
      title: contactLink,
      id: 'email-section'
    },
  ]

  function scrollIntoView(id: string) {
    const section = document.getElementById(id)

    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1, }} 
      transition={{ duration: 1 }}
      className='fixed top-0 left-0 right-0 z-10 bg-zinc-800/80'
    >
      <div className='flex flex-wrap items-center justify-between px-6 md:px-12 lg:px-20 py-4'>
        <Link
          className='md:text-3xl text-2xl font-semibold text-light-shades hover:text-brand-color'
          href='/'
        >
          <Code className="size-12 " />
        </Link>

        <div className="flex gap-4 md:gap-10">
          <CustomLanguageSelector />

          <div className='block md:hidden' id='mobile-menu'>
            {navBarOpen ? (
              <button
                onClick={() => setNavBarOpen(false)}
                className='flex items-center px-3 py-2 text-light-shades rounded border-2 border-light-shades
                hover:text-brand-color hover:border-brand-color'
              >
                <X className='h-5 w-5' weight='bold' />
              </button>
            ) : (
              <button
              onClick={() => setNavBarOpen(true)}
              className='flex items-center px-3 py-2 text-light-shades rounded border-2 border-light-shades
                hover:text-brand-color hover:border-brand-color'
              >
                <List className='h-5 w-5' weight='bold' />
              </button>
            )}
          </div>

          <div
            className='hidden md:flex md:w-auto items-center'
            id='menu'
          >
            <ul className='flex flex-row space-x-8'>
              {navLinks.map((link, index) => {
                return (
                  <li onClick={() => scrollIntoView(link.id)} key={index}>
                    <NavLink title={link.title} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </motion.nav>
  )
}
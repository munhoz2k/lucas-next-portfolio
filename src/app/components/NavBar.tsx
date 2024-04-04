'use client'

import Link from "next/link";
import { useState } from "react";

import NavLink, { NavLinkProps } from "./NavLink";
import { List, X } from "phosphor-react";
import MenuOverlay from "./MenuOverlay";

const navLinks: NavLinkProps[] = [
  {
    title: 'About',
    href: '#about'
  },
  {
    title: 'Projects',
    href: '#projects'
  },
  {
    title: 'Contact',
    href: '#contact'
  },
]

export default function NavBar() {
  const [navBarOpen, setNavBarOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-zinc-800/80'>
      <div className='flex flex-wrap items-center justify-between px-6 md:px-12 lg:px-20 py-4'>
        <Link
          className='md:text-3xl text-2xl font-semibold text-light-shades'
          href='/'
        >
          Logo
        </Link>

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

        <div className='hidden md:block md:w-auto' id='menu'>
          <ul className='flex p-0 flex-row space-x-8'>
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink href={link.href} title={link.title} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}
import Link from "next/link";

export interface NavLinkProps {
  href: string
  title: string
}

export default function NavLink({ href, title }: NavLinkProps) {
  return (
    <Link
      href={href}
      className='relative underline-hover p-2 text-lg font-normal text-light-shades
      hover:text-brand-color md:p-0 md:text-xl'
    >
      {title}
    </Link>
  )
}
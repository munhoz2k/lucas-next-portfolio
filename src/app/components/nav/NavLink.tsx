export interface NavLinkProps {
  title: string
}

export default function NavLink({ title }: NavLinkProps) {
  return (
    <a
      className='relative underline-hover p-2 text-lg font-normal text-light-shades
      hover:text-brand-color cursor-pointer md:p-0 md:text-xl'
    >
      {title}
    </a>
  )
}
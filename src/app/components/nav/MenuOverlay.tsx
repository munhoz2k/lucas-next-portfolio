import NavLink, { NavLinkProps } from "./NavLink"

interface MenuOverlayProps {
  links: {
    title: string
    id: string
  }[]
  scrollIntoView: (id: string) => void
}

export default function MenuOverlay({ links, scrollIntoView }: MenuOverlayProps) {
  return (
    <ul
      className='flex flex-col items-center pb-4 md:hidden'
    >
      {links.map((link, index) => {
        return (
          <li
            className='flex'
            key={index}
            onClick={() => scrollIntoView(link.id)}
          >
            <NavLink title={link.title} />
          </li>
        )
      })}
    </ul>
  )
}
import NavLink, { NavLinkProps } from "./NavLink"

interface MenuOverlayProsp {
  links: NavLinkProps[]
}

export default function MenuOverlay({ links }: MenuOverlayProsp) {
  return (
    <ul
      className='flex flex-col items-center pb-4 md:hidden'
    >
      {links.map((link, index) => {
        return (
          <li className='flex' key={index}>
            <NavLink href={link.href} title={link.title} />
          </li>
        )
      })}
    </ul>
  )
}
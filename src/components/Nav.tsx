'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { path: '/', name: 'Home' },
  { path: '/services', name: 'services' },
  { path: '/resume', name: 'resume' },
  { path: '/work', name: 'work' },
  { path: '/contact', name: 'contact' },
]

function Nav() {
  const pathName = usePathname()

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathName && 'text-accent border-b-2 border-accent'
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav

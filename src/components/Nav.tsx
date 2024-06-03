'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'services' },
  { path: '/resume', name: 'resume' },
  { path: '/work', name: 'work' },
  { path: '/contact', name: 'contact' },
]

function Nav() {
  return (
    <div>
      {links.map((link, index) => {
        return
      })}
    </div>
  )
}

export default Nav

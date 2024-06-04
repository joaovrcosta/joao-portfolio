import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/joaovrcosta' },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/jo%C3%A3o-victor-41b89013a/',
  },
]

interface SocialProps {
  containerStyles: any
  iconStyles: any
}

export function Socials({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

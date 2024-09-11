import React, { ReactNode } from 'react'

interface CircleLinkProps {
  link: string
  children: ReactNode
}

const CircleLink: React.FC<CircleLinkProps> = ({ link, children }) => {
  return (
    <a
      className="circle-link flex h-12 w-12 items-center justify-center"
      href={link}
    >
      {children}
    </a>
  )
}
export default CircleLink

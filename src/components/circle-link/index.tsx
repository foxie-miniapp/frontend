import React, { ReactNode } from 'react';

interface CircleLinkProps {
  link: string;
  children: ReactNode;
}

const CircleLink: React.FC<CircleLinkProps> = ({ link, children }) => {
  return <a className='w-12 h-12 flex justify-center items-center circle-link' href={link}>
    {children}
  </a>
}
export default CircleLink

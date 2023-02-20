import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return ( 
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto'>
      <div className='flex flex-row items-center'>
        {/* Logo */}
        <SocialIcon
          url="https://www.twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
      <SocialIcon
          url="https://www.instagram.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
      </div>
    </header>
  );
}
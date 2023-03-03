"use client";
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link';
import { PageInfo } from '@/typing';
import { urlFor } from '@/sanity';

type Props = {
	pageInfo : PageInfo,
}

function Hero({ pageInfo }: Props) {
    const [text,count] = useTypewriter({
        words: [`Hi I'm ${pageInfo?.name}`,"Flutter Developer","Web Developer","AI"],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {
		pageInfo?.heroImage &&
        <Image
          className="relative rounded-full w-32 h-32 mx-auto object-cover"
          src={urlFor(pageInfo?.heroImage).url()}
          width={128}
          height={128}
          alt="Avatar"
        />
      }

      <div className="z-20">
        <h2 className="text-sm md uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-4xl font-semibold px-10">
          {text}
          {/* <span className="mr-3">{text}</span> */}
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero
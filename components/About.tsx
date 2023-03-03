"use client";
import React from 'react'
import {motion} from 'framer-motion'
import { PageInfo } from '@/typing';
import urlFor from '@/sanity';
type Props = {
	pageInfo: PageInfo;
}

function About({pageInfo}: Props) {
	return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className='h-20'>

      </div>
      { pageInfo?.profilePic && 
        <motion.img
          className="w-40 h-30 md:mb-0 flex-shrink-0 rounded-full object-contain md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[5]"
          src={urlFor(pageInfo?.profilePic).url()}
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          alt="Image"
        />
      }
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background:
        </h4>
        <p className="text-justify text-sm sm:text-xl">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About
import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer  transition-opacity duration-150 overflow-hidden'>
      <motion.img
        initial={{ opacity: 0 ,y: -100}}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1 ,y: 0}}
        viewport={{once: true}}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://i.imgur.com/q39MtkT.jpeg"
        alt=""
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of PAPAFAM</h4>
        <p className='font-bold text-2xl mt-1'>PAPAFAM</p>
        <div className='flex space-x-2 my-2'>
            <img className='h-10 w-10 rounded-full' src='https://i.imgur.com/q39MtkT.jpeg' alt=''/>
            <img className='h-10 w-10 rounded-full' src='https://i.imgur.com/q39MtkT.jpeg' alt=''/>
            <img className='h-10 w-10 rounded-full' src='https://i.imgur.com/q39MtkT.jpeg' alt=''/>
            <img className='h-10 w-10 rounded-full' src='https://i.imgur.com/q39MtkT.jpeg' alt=''/>
            <img className='h-10 w-10 rounded-full' src='https://i.imgur.com/q39MtkT.jpeg' alt=''/>
        </div>
        <p className='uppercase py-5 text-gray-300'>Staryed work.... - Ended...</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary</li>
            <li>Summary</li>
            <li>Summary</li>
            <li>Summary</li>
            <li>Summary</li>
        </ul>
      </div>
    </article>
  );
}
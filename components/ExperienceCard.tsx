import urlFor from '@/sanity';
import { Experience } from '@/typing';
import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image'

type Props = {
	experience: Experience;
}

export default function ExperienceCard({experience}: Props) {
  console.log(experience.technologies[0]);
    return (
      
      <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] h-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
        <motion.img
          className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src={urlFor(experience?.companyImage).url()}
          alt="Image"
        />
        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
          <div className="flex space-x-2 my-2">
            {/* {experience?.technologies.map((technology) => (
              <Image
              className="relative rounded-full w-32 h-32 mx-auto object-cover"
              src={urlFor(technology.image).url()}
              width={128}
              height={128}
              alt="Avatar"
            />

            ))} */}
            {
              // pageInfo?.heroImage &&
              // <Image
              //   className="relative rounded-full w-32 h-32 mx-auto object-cover"
              //   src={urlFor(pageInfo?.heroImage).url()}
              //   width={128}
              //   height={128}
              //   alt="Avatar"
              // />
            }
          </div>
          <p className="uppercase py-5 text-gray-300">
            {new Date(experience.dateStarted).toDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </p>
          
          <ul className="list-disc space-y-4 ml-5 text-base h-70 max-w-40 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 text-">
            {experience.points.map((point,index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </article>
    );
}
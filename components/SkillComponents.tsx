import React from 'react'
import {motion} from 'framer-motion'
import { Skills } from '@/typing';
import urlFor from '@/sanity';


type Props = {
    directionLeft?: boolean;
	skill: Skills;
}

function Skill({directionLeft,skill}: Props) {
    return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
				initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				src={urlFor(skill?.image).url()}
				alt="Icon"
			/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
				<div className="flex items-center justify-center h-full">
					<p className="text-3xl font-bold text-black opacity-100">{skill.progres}%</p>
				</div>
			</div>
		</div>
	);
}

export default Skill
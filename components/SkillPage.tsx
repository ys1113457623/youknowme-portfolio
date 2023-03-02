"use client";
import { motion } from 'framer-motion'
import React from 'react'
import Skill from './SkillComponents';
import SkillComponents from './SkillComponents';
import { Skills } from '@/typing';


type Props = {
	skill: Skills[]
}

export default function SkillPage({skill}: Props) {
    return (
		<motion.div
			className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Skills
			</h3>

			<h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
				Hover over a skill for currency proficiency
			</h3>

			<div className="grid grid-cols-4 gap-5 pt-20">
				{
					skill?.slice(0,skill.length/2).map((skill) => {
						return <SkillComponents key={skill._id} skill={skill} />
					})

					
				}
				{
					skill?.slice(skill.length/2,skill.length).map((skill) => {
						return <SkillComponents key={skill._id} skill={skill} directionLeft/>
					})

					
				}
			</div>
		</motion.div>
	);
}
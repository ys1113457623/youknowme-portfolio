
import skill from '@/youknowme-portfolio/schemas/skill'
import {Experience, Project} from '../typing'

export const fetchSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)

    const data =  await res.json()

    const experience: Experience[] = data.experience


    return experience;

}
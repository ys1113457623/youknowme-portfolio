
import skill from '@/youknowme-portfolio/schemas/skill'
import {Social} from '../typing'

export const fetchSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocial`)

    const data =  await res.json()

    const social: Social[] = data.social

    return social;
}
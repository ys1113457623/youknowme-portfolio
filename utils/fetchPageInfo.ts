
import experience from '@/youknowme-portfolio/schemas/experience'
import skill from '@/youknowme-portfolio/schemas/skill'
import {PageInfo} from '../typing'

export const fetchSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProject`)

    const data =  await res.json()

    const pageInfo: PageInfo = data.project

    return pageInfo;
}
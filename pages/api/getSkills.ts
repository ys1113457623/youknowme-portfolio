import { Skills, Social } from '@/typing';
import type { NextApiRequest, NextApiResponse} from 'next';
import { groq } from 'next-sanity';
import {sanityClient} from '../../sanity';


const query = groq`
    *[_type == "skill"]
`
type Data = {
    skills: Skills[]; 
}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
){
    const skills: Skills[]  = await sanityClient.fetch(query);
    console.log(skills)

    res.status(200).json({
      skills,
    });
}

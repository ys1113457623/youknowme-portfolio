import { Project, Social } from '@/typing';
import type { NextApiRequest, NextApiResponse} from 'next';
import { groq } from 'next-sanity';
import {sanityClient} from '../../sanity';


const query = groq`
    *[_type == "project"]{
        ...,
        technologies[]->
    }
`;
type Data = {
    project: Project[]; 
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
){
    const project: Project[]  = await sanityClient.fetch(query);
    res.status(200).json({
      project,
    });
}

import {Social} from '../typing'

export const fetchSocial = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    const data =  await res.json()

    const social: Social[] = data.socials


    return social;

}



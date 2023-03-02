"use client";

import { GetStaticProps, NextPage } from "next"
import Head from 'next/head'
import Hero from "@/components/Hero"
import About from "@/components/About"
import WorkExperience from "@/components/WorkExperience"
import Projects from "@/components/Projects"
import ContactMe from "@/components/ContactMe"
import Link from "next/link"
import { Experience, PageInfo, Project , Skills, Social } from "@/typing"
import { fetchPageInfo } from "@/utils/fetchPageInfo"
import { fetchProject } from "@/utils/fetchProjects"
import { fetchSkills } from "@/utils/fetchSkills"
import { fetchSocial } from "@/utils/fetchSocial"
import { fetchExperience } from "@/utils/fetchExperience";
import Header from "@/components/Header";
import SkillPage from "@/components/SkillPage";
import urlFor from "@/sanity";

type Props = {
	pageInfo : PageInfo,
	experience: Experience[],
	projects: Project[],
    skills: Skills[],
	socials: Social[]
}



const Home = ({experience,pageInfo,projects,skills,socials}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>YouknowMe - Portfolio</title>
      </Head>
      <Header socials={socials}/>
      <section className="snap-start" id="hero">
        <Hero pageInfo={pageInfo}/>
      </section>
      <section className="snap-center" id="about">
        <About pageInfo = {pageInfo}/>
      </section>
      <section className="snap-center" id="experience">
        <WorkExperience experiences = {experience}/>
      </section>
      <section className="snap-start" id="skills">
        <SkillPage skill={skills}/>
      </section>
      <section className="snap-start" id="projects">
        <Projects projects={projects}/>
      </section>
      <section className="snap-start" id="contact">
        <ContactMe />
      </section>

      <Link legacyBehavior href="#hero">
        <a>
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <img
                className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                src={urlFor(pageInfo?.heroImage).url()}
                alt="Image"
              />
            </div>
          </footer>
        </a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const pageInfo = await fetchPageInfo();
  const experience = await fetchExperience();
  const projects = await fetchProject();
  const skills = await fetchSkills();
  const socials = await fetchSocial();
  console.log(skills[0].progres);
  
  return {
    props: {
      pageInfo,
      experience,
      projects,
      skills,
      socials
    },
    revalidate: 10
  }
}
// export as getStaticProps : GetStaticProps<Props> = async () =>{
// 	const pageInfo : PageInfo = await fetchPageInfo();
// 	const experience : Experience[] = await fetchExperience();
// 	const projects : Project[] = await fetchProject();
// 	const skills : Skill[] = await fetchSkills();
// 	const socials :	Social[] = await fetchSocial();
//   console.log(`Yeh Dekho`)
//   console.log(skills);

// 	return {
// 		props: {
// 			pageInfo,
// 			experience,
// 			skills,
// 			projects,
// 			socials,
// 		},

// 		revalidate: 10,
// 	}
// }

export default Home





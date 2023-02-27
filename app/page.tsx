import Header from "../components/Header"
import { NextPage } from "next"
import Head from 'next/head'
import Hero from "@/components/Hero"
import About from "@/components/About"
import WorkExperience from "@/components/WorkExperience"
import Projects from "@/components/Projects"
import ContactMe from "@/components/ContactMe"
import Link from "next/link"
import { Experience, PageInfo, Project , Skill } from "@/typing"
import Skills from "@/components/Skills"

type Props = {
	pageInfo : PageInfo,
	experience: Experience[],
	projects: Project[],
    skills: Skill[],
}

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>Sonny&apos;s Portfolio</title>
      </Head>
      <Header />
      <section className="snap-start" id="hero">
        <Hero />
      </section>
      <section className="snap-center" id="about">
        <About />
      </section>
      <section className="snap-center" id="experience">
        <WorkExperience />
      </section>
      <section className="snap-start" id="skills">
        <Skills />
      </section>
      <section className="snap-start" id="projects">
        <Projects />
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
                src="https://i.imgur.com/e2yvD6A.png"
                alt="Image"
              />
            </div>
          </footer>
        </a>
      </Link>
    </div>
  );
}

export default Home
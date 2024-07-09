import profile_me from './assets/Profile_me.webp'
import { technologies } from './constants'

import Header from './components/Header'
import { Home } from './components/Home'
import { Perfil } from './components/Perfil'
import { Section } from './components/Section'
import { TechIcon } from './components/TechIcon'
import { ProjectCard } from './components/ProjectCard'

function App() {
  return (
    <>
      <Header />
      <Home id="home" className={'flex'}>
        <Perfil image={profile_me} alt="profile pic">davi santos</Perfil>
        <p className='hidden tracking-[0.4rem] font-semibold lg:block'>&lt;/ Full Stack Developer&gt;</p>
      </Home>
      <Section id="about">
        <h2>about me</h2>
        <p>
          I’m a <span className='font-bold text-3'>computer engineering student</span> in a constant search of knowledge and personal development. I am passionate about finance and software development, being very captivated by both areas, always being willing to learn and teach about these subjects.
        </p>
      </Section>

      <Section id="technologies">
        <h2>technologies</h2>
        <p>Programming languages and tools</p>
        <div className='grid place-items-center grid-cols-3 gap-4 mt-10 md:grid-cols-7 lg:grid-cols-9'>
          {technologies.map((tech) => (
            <TechIcon key={tech.id} image={tech.url} alt={tech.title} />
          ))}
        </div>
      </Section>

      <Section id="projects">
        <h2>projects</h2>
        <div className='grid place-items-center grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-12'>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </Section>

      <footer className='h-80 bg-2'>
        <div className='flex justify-center items-center h-full'>
          <p className='text-xl'>🚧 Still working on this... 🚧</p>
        </div>
      </footer>
    </>
  )
}

export default App

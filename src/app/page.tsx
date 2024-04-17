import HeroSection from '@/app/components/hero/HeroSection'
import NavBar from '@/app/components/nav/NavBar'
import AboutSection from './components/about/AboutSection'
import ProjectsSection from './components/projects/ProjectsSection'
import EmailSection from './components/email/EmailSection'
import SkillSection from './components/skills/SkillSection'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar />

      <div className="container px-12 py-4 mt-24 mx-auto">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <EmailSection />
      </div>

      <Footer />
    </main>
  )
}

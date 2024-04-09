import HeroSection from '@/app/components/HeroSection'
import NavBar from '@/app/components/NavBar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar />

      <div className="container px-12 py-4 mt-24 mx-auto">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  )
}

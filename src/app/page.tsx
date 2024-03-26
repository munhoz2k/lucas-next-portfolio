import HeroSection from '@/app/components/HeroSection'
import NavBar from '@/app/components/NavBar'

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <NavBar />

      <div className="container h-full px-12 py-4 mt-24 mx-auto">
        <HeroSection />
      </div>
    </main>
  )
}

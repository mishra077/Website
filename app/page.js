import Image from 'next/image'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import EmailSection from '../components/EmailSection'
import Footer from '../components/Footer'
import Publication from '../components/Publication'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="continer mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <Publication />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}

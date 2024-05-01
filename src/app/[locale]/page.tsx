import { notFound } from 'next/navigation'
import { unstable_setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Toaster } from 'sonner'

import { localesTerm } from '@/locales'
import HeroSection from '@/app/components/hero/HeroSection'
import NavBar from '@/app/components/nav/NavBar'
import AboutSection from '../components/about/AboutSection'
import ProjectsSection from '../components/projects/ProjectsSection'
import EmailSection from '../components/email/EmailSection'
import SkillSection from '../components/skills/SkillSection'
import Footer from '../components/footer/Footer'

import '../globals.css'

interface HomeProps {
  params: { locale: string }
}

export default function Home({ params: { locale } }: HomeProps) {
  if (!localesTerm.includes(locale)) notFound()
  unstable_setRequestLocale(locale)

  const navBarMessages = useTranslations('navBar')
  const heroMessages = useTranslations('hero')
  const aboutMeMessages = useTranslations('aboutMe')
  const skillsMessages = useTranslations('skills')
  const projectsMessages = useTranslations('projects')
  const contactMessages = useTranslations('contact')
  const footerMessages = useTranslations('footer')

  return (
    <main className="bg-main flex flex-col">
      <Toaster
        toastOptions={{
          classNames: {
            success: 'bg-brand-color border-0 text-white',
            error: 'bg-zinc-200 border-0 text-rose-700'
          }
        }}
        theme='light'
      />

      <NavBar
        aboutLink={navBarMessages('aboutLink')}
        skillsLink={navBarMessages('skillsLink')}
        projectsLink={navBarMessages('projectsLink')}
        contactLink={navBarMessages('contactLink')}
      />

      <div className="container px-12 py-4 mt-24 mx-auto">
        <HeroSection
          helloTitle={heroMessages('helloTitle')}
          myJob={heroMessages('myJob')}
          introText={heroMessages('introText')}
          hireButton={heroMessages('hireButton')}
          CVbutton={heroMessages('CVbutton')}
        />

        <AboutSection
          title={aboutMeMessages('title')}
          aboutText={aboutMeMessages('aboutText')}
        />

        <SkillSection title={skillsMessages('title')} />

        <ProjectsSection
          title={projectsMessages('title')}
          ignitersDesc={projectsMessages('ignitersDesc')}
          pizzaShopDesc={projectsMessages('pizzaShopDesc')}
          githubBlogDesc={projectsMessages('githubBlogDesc')}
          santoCafeDesc={projectsMessages('santoCafeDesc')}
          dtMoneyDesc={projectsMessages('dtMoneyDesc')}
        />

        <EmailSection
          title={contactMessages('title')}
          text={contactMessages('text')}
          emailLabel={contactMessages('emailLabel')}
          subjectLabel={contactMessages('subjectLabel')}
          subjectPlaceHolder={contactMessages('subjectPlaceHolder')}
          messageLabel={contactMessages('messageLabel')}
          messageTextArea={contactMessages('messageTextArea')}
          sendButton={contactMessages('sendButton')}
        />
      </div>

      <Footer
        madeBy={footerMessages('madeBy')}
        thanksText={footerMessages('thanksText')}
        rightsText={footerMessages('rightsText')}
      />
    </main>
  )
}

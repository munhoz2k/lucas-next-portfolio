import React from 'react'

import { MotionSection } from '../motion/MotionSection'
import SkillIcon from './SkillIcon'

import { DiCss3 } from 'react-icons/di'
import { RiHtml5Fill, RiJavascriptLine, RiReactjsLine } from 'react-icons/ri'
import { SiStyledcomponents, SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'

interface SkillSectionProps {
  title: string
}

export default function SkillSection({ title }: SkillSectionProps) {
  return (
    <MotionSection
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: .7 }}
      className='mt-52'
    >
      <h2 className='mb-12 text-4xl font-bold text-black text-center'>
        {title}
      </h2>

      <div className='grid grid-cols-2 gap-8 max-w-[1080px] md:grid-cols-4 mx-auto'>

        <SkillIcon
          description='ReactJS'
          redirectUrl='https://react.dev/'
          animationDelay={0.8}
        >
          <RiReactjsLine size={180} />
        </SkillIcon>

        <SkillIcon
          description='NextJS'
          redirectUrl='https://nextjs.org/'
          animationDelay={1}
        >
          <TbBrandNextjs size={180} />
        </SkillIcon>

        <SkillIcon
          description='TypeScript'
          redirectUrl='https://www.typescriptlang.org/'
          animationDelay={1.2}
        >
          <TbBrandTypescript size={180} />
        </SkillIcon>

        <SkillIcon
          description='JavaScript'
          redirectUrl='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          animationDelay={1.4}
        >
          <RiJavascriptLine size={200} />
        </SkillIcon>

        <SkillIcon
          description='TailwindCSS'
          redirectUrl='https://tailwindcss.com/'
          animationDelay={1.6}
        >
          <SiTailwindcss size={180} />
        </SkillIcon>

        <SkillIcon
          description='Styled Components'
          redirectUrl='https://styled-components.com/'
          animationDelay={1.8}
        >
          <SiStyledcomponents size={180} />
        </SkillIcon>

        <SkillIcon
          description='HTML5'
          redirectUrl='https://developer.mozilla.org/pt-BR/docs/Web/HTML'
          animationDelay={2}
        >
          <RiHtml5Fill size={180} />
        </SkillIcon>

        <SkillIcon
          description='CSS3'
          redirectUrl='https://developer.mozilla.org/pt-BR/docs/Web/CSS'
          animationDelay={2.2}
        >
          <DiCss3 size={180} />
        </SkillIcon>
      </div>
    </MotionSection>
  )
}

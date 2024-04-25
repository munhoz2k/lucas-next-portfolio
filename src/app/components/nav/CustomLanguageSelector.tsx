'use client'
import { MouseEvent, useState, useTransition } from "react";
import { useParams, useRouter } from "next/navigation";
import { Locales, locales } from "@/locales";

import { CaretDown } from "@phosphor-icons/react/dist/ssr";

export default function CustomLanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  const { locale } = useParams<{ locale: Locales}>()
  const router = useRouter()
  
  async function handleLanguageSelect(e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) {
    const language = e.currentTarget.getAttribute('value')

    startTransition(() => {
      router.replace(`/${language}`)
    })
  }

  function handleOpenClose() {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <div className="relative">
      <button
        className="flex h-full items-center pr-8 py-1 px-4 cursor-pointer bg-zinc-500 text-light-shades rounded-lg
        hover:bg-zinc-500/40 hover:shadow-lg disabled:brightness-75 disabled:cursor-not-allowed"
        disabled={isPending}
        onClick={() => handleOpenClose()}
      >
        <span>{locales[locale]}</span>
        <CaretDown
          weight="bold"
          className={`absolute top-[52%] right-2 translate-y-[-50%] ${isOpen ? 'rotate-180' : 'rotate-0'} duration-300
          text-light-shades pointer-events-none`}
        />
      </button>

      <ul
        className={`absolute right-0 ${isOpen ? 'left-0 opacity-100' : 'left-[50%] opacity-0'} p-1 mt-[2px] space-y-[4px]
        bg-zinc-500 text-light-shades text-center rounded-lg shadow-md transition-all duration-300 overflow-hidden`}
      >
        <li
          className="py-1 rounded-lg cursor-pointer hover:bg-brand-color transition-all duration-300"
          onClick={handleLanguageSelect}
          value='en'
        >
          English
        </li>
        <li
          className="py-1 rounded-lg cursor-pointer hover:bg-brand-color transition-all duration-300"
          onClick={handleLanguageSelect}
          value='pt'
        >
          Portugês
        </li>
      </ul>
    </div>
  )
}
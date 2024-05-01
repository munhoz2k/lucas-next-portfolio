import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Inter } from 'next/font/google'
import { localesTerm } from '@/locales'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Munhoz Portfolio'
}

export async function generateStaticParams() {
  return localesTerm.map((locale) => ({ locale }))
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  if (!localesTerm.includes(locale)) notFound()
  unstable_setRequestLocale(locale)
  
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

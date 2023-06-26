import { Navbar } from '@/components/navbar/navbar'
import './globals.scss'
import { Exo } from 'next/font/google'
import { Socials } from '@/components/socials/socials'

const exo = Exo({ subsets: ['latin'] })

export const metadata = {
  title: 'Pablo Arismendi Rabe',
  description: 'Digital portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <Navbar />
        <Socials />
        {children}</body>
    </html>
  )
}

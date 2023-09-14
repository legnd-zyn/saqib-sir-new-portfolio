import Navbar from '@/components/navbar'
import './globals.css'
import { League_Spartan } from 'next/font/google'
import Footer from '@/components/footer'

const LP = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'Saqib Chaudhary | Portfolio',
  description: 'CLoud Architecture | DevOps Engineer | Experienced IOS Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={LP.className + " flex flex-col"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

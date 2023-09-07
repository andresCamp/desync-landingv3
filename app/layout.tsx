import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Ubuntu, Averia_Serif_Libre } from 'next/font/google'
import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })
const ubuntu = Ubuntu({ subsets: ['latin'], variable:'--font-ubuntu', weight: ['300', '400', '500', '700'] })
const averia = Averia_Serif_Libre({ subsets: ['latin'], variable:'--font-averia-serif-libre', weight: ['300', '400', '700'] })

// const averia = Averia_Serif_Libre({
//   subsets:['latin'],
//   variable: '--font-averia-serif-libre',
//   display: 'swap',
// })

// const ubuntu = Ubuntu({
//   subsets: ['latin']
// })

// const roboto_mono = Averia_Serif_Libre({ subsets: ['latin'], variable: '--font-roboto-mono',
//   display: 'swap',
// })

export const metadata: Metadata = {
  title: 'Desync.ai',
  description: 'Step into an era where AI reshapes the boundaries of what is possible.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${averia.variable}`}>
      <body >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}

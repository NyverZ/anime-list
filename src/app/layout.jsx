import Navbar from '@/components/Navbar'
import '@/app/globals.css'
import { Gabarito } from 'next/font/google'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'VerzAnimeList',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <meta name="google-site-verification" content="SPUZnTwkZ-Vbpw3TTxYKNvAUJqCMMPpHVrqOhK4WFMo" />
   </head>
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

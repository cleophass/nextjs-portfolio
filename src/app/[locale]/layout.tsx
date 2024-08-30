import './globals.css'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Cleophas',
  description: 'Portfolio de Cléophas Fournier. Réalisé avec NextJS 14',
}

export default function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers locale={params.locale}>
        {children}
        </Providers>
        </body>
    </html>
  )
}

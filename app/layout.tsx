import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.doblegpremoldeados.com'),
  title: {
    default: 'Dobleg Premoldeados | Galpones, Tambos, Tanques y Viviendas',
    template: '%s | Dobleg Premoldeados'
  },
  description: 'Premoldeados de hormigón armado en Entre Ríos: galpones industriales, tambos, tanques y viviendas con montaje profesional.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/img/doble_g_logo.webp', type: 'image/webp' }
    ],
    apple: '/img/doble_g_logo.webp'
  },
  alternates: {
    canonical: '/',
    languages: { 'es-AR': '/', 'x-default': '/' }
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Dobleg Premoldeados',
    url: '/',
    title: 'Premoldeados de Hormigón Armado en Entre Ríos | Dobleg Premoldeados',
    description: 'Galpones, tambos, tanques y viviendas premoldeadas con montaje profesional.',
    images: [{ url: '/img/og-cover.webp', width: 1200, height: 630, alt: 'Estructuras de hormigón armado' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premoldeados de Hormigón | Dobleg Premoldeados',
    description: 'Estructuras de hormigón: galpones, tambos, tanques y viviendas.',
    images: ['/img/og-cover.webp']
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

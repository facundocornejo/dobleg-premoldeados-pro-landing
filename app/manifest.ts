import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dobleg Premoldeados',
    short_name: 'Dobleg',
    description: 'Premoldeados de hormigón armado: galpones, tambos, tanques y viviendas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F9FA',
    theme_color: '#4DA1A9',
    icons: [
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/img/doble_g_logo.webp', sizes: '512x512', type: 'image/webp', purpose: 'maskable' },
      { src: '/img/doble_g_logo.webp', sizes: '512x512', type: 'image/webp', purpose: 'any' }
    ]
  }
}

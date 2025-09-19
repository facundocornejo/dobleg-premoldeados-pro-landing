import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.doblegpremoldeados.com'
  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1 },
  ]
}


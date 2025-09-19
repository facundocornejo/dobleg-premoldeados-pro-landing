import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4DA1A9',
        secondary: '#8EC7E0',
        accent: '#A7D3D8',
        dark: '#2E3C43'
      },
      boxShadow: {
        light: '0 2px 10px rgba(0,0,0,.1)',
        medium: '0 5px 20px rgba(0,0,0,.15)',
        heavy: '0 10px 30px rgba(0,0,0,.2)'
      }
    }
  },
  plugins: []
}

export default config


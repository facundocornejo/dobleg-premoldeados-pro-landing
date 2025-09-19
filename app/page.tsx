import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page(){
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <a href="https://wa.me/5493434806295" className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-heavy" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M20.52 3.48A11.77 11.77 0 0 0 12.02 0C5.41 0 .07 5.35.07 11.96c0 2.1.56 4.09 1.55 5.81L0 24l6.41-1.67a11.9 11.9 0 0 0 5.61 1.43h.01c6.61 0 11.96-5.35 11.96-11.96 0-3.2-1.25-6.21-3.47-8.33ZM12.03 22.1h-.01a9.83 9.83 0 0 1-5-1.37l-.36-.21-3.8.99 1.02-3.7-.24-.38a9.86 9.86 0 0 1-1.52-5.2c0-5.44 4.43-9.87 9.87-9.87 2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.89 6.97c0 5.44-4.43 9.87-9.84 9.87Zm5.4-7.36c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52 0 1.5 1.08 2.94 1.24 3.14.15.2 2.12 3.24 5.14 4.54.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35Z"/></svg>
      </a>
      <Footer />
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context':'https://schema.org',
        '@type':'LocalBusiness',
        name:'Dobleg Premoldeados',
        url:'https://www.doblegpremoldeados.com/',
        image:'https://www.doblegpremoldeados.com/img/og-cover.webp',
        logo:'https://www.doblegpremoldeados.com/img/doble_g_logo.webp',
        telephone:'+54 9 343 4806295',
        email:'rgermangomez@gmail.com',
        address:{'@type':'PostalAddress',addressLocality:'Paraná',addressRegion:'Entre Ríos',addressCountry:'AR'},
        areaServed:{'@type':'AdministrativeArea',name:'Entre Ríos, Argentina'}
      }) }} />
    </>
  )
}


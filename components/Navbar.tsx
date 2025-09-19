"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar(){
  const pathname = usePathname()
  const [open,setOpen]=useState(false)
  const isActive=(href:string)=> pathname===href
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <nav className="container-responsive flex items-center justify-between h-16">
        <Link href="#inicio" className="flex items-center gap-3" onClick={()=>setOpen(false)}>
          <img src="/img/doble_g_logo.webp" alt="Dobleg Premoldeados" className="h-10 w-auto rounded"/>
          <span className="font-extrabold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent lowercase tracking-wide">doblegpremoldeados</span>
        </Link>
        <button aria-label="Abrir menú" className="lg:hidden p-2" onClick={()=>setOpen(v=>!v)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4DA1A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <ul className="hidden lg:flex items-center gap-8">
          <li><a href="#inicio" className={`nav-underline ${isActive('/')?'aria-[current]:page':''}`}>Inicio</a></li>
          <li><a href="#productos" className="nav-underline">Productos</a></li>
          <li><a href="#nosotros" className="nav-underline">Nosotros</a></li>
          <li><a href="#contacto" className="nav-underline">Contacto</a></li>
        </ul>
      </nav>
      {open && (
        <div className="lg:hidden bg-white/95 shadow-sm border-t">
          <ul className="container-responsive py-4 space-y-2">
            {[
              ['#inicio','Inicio'],
              ['#productos','Productos'],
              ['#nosotros','Nosotros'],
              ['#contacto','Contacto']
            ].map(([href,label])=> (
              <li key={href}><a href={href} className="block py-2" onClick={()=>setOpen(false)}>{label}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}


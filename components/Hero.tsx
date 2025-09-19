import Image from 'next/image'

export default function Hero(){
  return (
    <section id="inicio" className="relative min-h-[88vh] grid place-items-center">
      <Image src="/img/galponIA.png" alt="Galpón premoldeado" fill priority className="object-cover -z-10" />
      <div className="absolute inset-0 hero-overlay -z-10"/>
      <div className="container-responsive text-center text-white space-y-6 pt-16">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow">Premoldeados de Hormigón Armado</h1>
        <p className="text-lg md:text-2xl opacity-95">Tu proyecto, nuestra estructura de calidad.</p>
        <p className="max-w-3xl mx-auto opacity-90">Fabricamos galpones industriales, tambos, tanques australianos, viviendas premoldeadas y soluciones a medida con estándares de calidad superiores en Entre Ríos.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://wa.me/5493434806295" target="_blank" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white shadow-light hover:shadow-medium">Consultar Ahora</a>
          <a href="#productos" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/80 text-white hover:bg-white hover:text-primary transition">Ver Productos</a>
        </div>
      </div>
    </section>
  )
}


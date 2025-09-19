export default function About(){
  return (
    <section id="nosotros" className="py-20">
      <div className="container-responsive grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-dark mb-6">Sobre Nosotros</h2>
          <p className="text-lg text-gray-700 mb-4">
            En <strong>Dobleg Premoldeados</strong> somos especialistas en la fabricación de estructuras de hormigón armado premoldeado.
            Operamos desde Entre Ríos para toda la región, combinando tecnología y equipo propio de montaje.
          </p>
          <p className="text-gray-700 mb-4">Experiencia, velocidad y calidad a medida de cada proyecto.</p>
          <div className="grid grid-cols-3 text-center mt-8">
            <div>
              <p className="text-3xl font-extrabold text-primary">23+</p>
              <p className="text-sm text-gray-600">Años</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary">500+</p>
              <p className="text-sm text-gray-600">Proyectos</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-primary">100%</p>
              <p className="text-sm text-gray-600">Satisfacción</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-medium">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/galpones.webp" alt="Estructuras de hormigón" className="w-full h-full object-cover" loading="lazy"/>
        </div>
      </div>
    </section>
  )
}


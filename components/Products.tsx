type Product = {
  key: string
  title: string
  desc: string
  img: string
  features: string[]
}

const products: Product[] = [
  {
    key: 'galpones',
    title: 'Galpones Industriales',
    img: '/img/galponultuima2.webp',
    desc: 'Estructuras robustas y personalizables para logística, producción y usos agropecuarios con máxima durabilidad.',
    features: ['Montaje eficiente y rápido', 'Diseños adaptados a tus necesidades']
  },
  {
    key: 'tambos',
    title: 'Tambos para Lecherías',
    img: '/img/tambos.webp',
    desc: 'Soluciones higiénicas y funcionales para producción lechera con eficiencia en el ordeñe.',
    features: ['Fácil mantenimiento y limpieza', 'Construcción de alta durabilidad']
  },
  {
    key: 'tanques',
    title: 'Tanques Australianos',
    img: '/img/tanque-autraliano.webp',
    desc: 'Tanques cilíndricos de gran capacidad, impermeables y resistentes para agua o uso industrial.',
    features: ['Alta capacidad de almacenamiento', 'Vida útil prolongada']
  },
  {
    key: 'tanques-bebederos',
    title: 'Tanques Bebederos',
    img: '/img/tanquebebederoo.webp',
    desc: 'Bebederos para ganado, con capacidades variables y opciones de llenado automático.',
    features: ['Diferentes capacidades', 'Resistentes a la intemperie']
  },
  {
    key: 'viviendas',
    title: 'Viviendas Prefabricadas',
    img: '/img/viviendas.webp',
    desc: 'Hogares modernos y eficientes, construidos con rapidez y acabados de primera calidad.',
    features: ['Construcción en tiempo récord', 'Diseño contemporáneo']
  },
  {
    key: 'bateas',
    title: 'Bateas para Bebederos/Comederos',
    img: '/img/bateaultima.webp',
    desc: 'Bateas de 2m x 60cm, 300L, unibles con caños de 2” para operar con un único flotante.',
    features: ['Acabados lisos que facilitan la limpieza', 'Resistentes a la intemperie']
  },
  {
    key: 'cerramientos',
    title: 'Cerramientos',
    img: '/img/cerramiento.webp',
    desc: 'Perimetrales de hormigón armado que brindan seguridad, privacidad y estética moderna.',
    features: ['Variedad de diseños y alturas', 'Instalación rápida y sencilla']
  },
  {
    key: 'piscinas',
    title: 'Piscinas',
    img: '/img/pisicinaultima.webp',
    desc: 'Piscinas prefabricadas de hormigón armado con durabilidad y estética contemporánea.',
    features: ['Construcción rápida y eficiente', 'Múltiples tamaños y formas']
  },
  {
    key: 'tapiales',
    title: 'Tapiales',
    img: '/img/tapiales.webp',
    desc: 'Tapiales con cara lisa y cara moldeada: practicidad y estética en una sola pieza.',
    features: ['Solución económica y durable', 'Instalación simple']
  }
]

export default function Products(){
  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Nuestros Productos</h2>
          <p className="text-gray-600 mt-3">Soluciones de hormigón armado diseñadas para la excelencia</p>
        </div>
        <div className="grid gap-8 md:gap-10">
          {products.map(p => (
            <article key={p.key} className="grid md:grid-cols-3 bg-white rounded-xl overflow-hidden shadow-light hover:shadow-heavy transition">
              <div className="relative md:col-span-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-dark mb-2">{p.title}</h3>
                <p className="text-gray-700 mb-4">{p.desc}</p>
                <ul className="text-sm text-gray-700 space-y-1 mb-6">
                  {p.features.map(f=> (
                    <li key={f} className="flex items-start gap-2"><span className="text-primary">•</span><span>{f}</span></li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/543434806295?text=${encodeURIComponent('Hola! Estoy interesado en '+p.title)}`}
                  target="_blank" rel="noopener"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-white hover:shadow-medium">
                  Solicitar Cotización
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


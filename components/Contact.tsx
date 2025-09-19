export default function Contact(){
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container-responsive">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold">Contactanos</h2>
          <p className="text-gray-600 mt-2">Estamos listos para hacer realidad tu proyecto</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border rounded-xl p-6 shadow-light">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-dark">WhatsApp & Teléfono</h3>
                <p className="text-gray-700">+54 9 343 4806295</p>
                <div className="flex gap-3 mt-2">
                  <a href="https://wa.me/5493434806295" target="_blank" className="px-3 py-2 rounded-full bg-green-500 text-white">WhatsApp</a>
                  <a href="tel:+5493434806295" className="px-3 py-2 rounded-full border border-primary text-primary">Llamar</a>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-dark">Correo</h3>
                <a href="mailto:rgermangomez@gmail.com" className="text-primary">rgermangomez@gmail.com</a>
              </div>
              <div>
                <h3 className="font-bold text-dark">Redes</h3>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/premoldeados_dobleg/?hl=es-la" target="_blank" className="underline">Instagram</a>
                  <a href="https://www.facebook.com/premoldeados.dobleG" target="_blank" className="underline">Facebook</a>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-dark">Ubicación</h3>
                <p className="text-gray-700">Paraná, Entre Ríos, Argentina</p>
              </div>
              <div>
                <h3 className="font-bold text-dark">Horarios</h3>
                <ul className="text-gray-700 text-sm">
                  <li>Lunes a Viernes: 8:00 - 18:00</li>
                  <li>Sábados: 8:00 - 13:00</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white border rounded-xl p-6 shadow-light">
            <form action="https://formspree.io/f/xldlnvwa" method="POST" className="grid gap-4">
              <input type="hidden" name="_subject" value="Nueva consulta - Dobleg Premoldeados" />
              <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
              <div>
                <label htmlFor="name" className="font-medium">Nombre *</label>
                <input id="name" name="name" required className="mt-1 w-full border rounded-md px-3 py-2"/>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="font-medium">Email *</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full border rounded-md px-3 py-2"/>
                </div>
                <div>
                  <label htmlFor="phone" className="font-medium">Teléfono</label>
                  <input id="phone" name="phone" className="mt-1 w-full border rounded-md px-3 py-2"/>
                </div>
              </div>
              <div>
                <label htmlFor="product" className="font-medium">Producto</label>
                <select id="product" name="product" className="mt-1 w-full border rounded-md px-3 py-2">
                  <option value="">Seleccionar producto</option>
                  <option value="galpones">Galpones</option>
                  <option value="tambos">Tambos</option>
                  <option value="tanques">Tanques redondos</option>
                  <option value="viviendas">Viviendas</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="font-medium">Mensaje</label>
                <textarea id="message" name="message" rows={5} className="mt-1 w-full border rounded-md px-3 py-2"/>
              </div>
              <button className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-md bg-primary text-white hover:shadow-medium">Enviar consulta</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


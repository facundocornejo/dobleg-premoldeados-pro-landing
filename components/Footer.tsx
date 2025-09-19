export default function Footer(){
  return (
    <footer className="bg-dark text-white py-8 mt-12">
      <div className="container-responsive text-center space-y-1">
        <p className="font-semibold">Dobleg Premoldeados</p>
        <p className="text-white/80">Especialistas en premoldeados de hormigón armado</p>
        <p className="text-white/60">Paraná, Entre Ríos, Argentina</p>
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} Dobleg Premoldeados. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}


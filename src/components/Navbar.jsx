import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-emerald-300 font-bold'
      : 'text-white hover:text-emerald-300 transition'

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Link to="/" className="text-2xl font-extrabold text-cyan-300 tracking-wide">
          AQUARIUMSTORE
        </Link>

        <div className="flex flex-wrap gap-4 text-sm md:text-base">
          <NavLink to="/" className={linkClass}>
            Inicio
          </NavLink>

          <NavLink to="/nosotros" className={linkClass}>
            Nosotros
          </NavLink>

          <NavLink to="/productos" className={linkClass}>
            Productos
          </NavLink>

          <NavLink to="/contacto" className={linkClass}>
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
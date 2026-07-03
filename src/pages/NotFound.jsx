import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="min-h-screen bg-emerald-50 flex items-center justify-center px-4">
      <div className="bg-white max-w-xl w-full text-center p-10 rounded-3xl shadow-lg border border-emerald-100">
        <p className="text-7xl mb-4">🐠</p>

        <h1 className="text-6xl font-extrabold text-emerald-600 mb-4">
          404
        </h1>

        <h2 className="text-2xl font-bold text-slate-900 mb-3">
          Página no encontrada
        </h2>

        <p className="text-slate-600 mb-7">
          La ruta que intentaste visitar no existe dentro de AQUARIUMSTORE.
        </p>

        <Link
          to="/"
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}

export default NotFound
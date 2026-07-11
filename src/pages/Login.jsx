import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const iniciarSesion = (e) => {
    e.preventDefault()

    if (correo === 'admin@aquariumstore.com' && password === '123456') {
      localStorage.setItem('adminLogueado', 'true')
      navigate('/admin')
    } else {
      setError('Correo o contraseña incorrectos.')
    }
  }

  return (
    <section className="bg-emerald-50 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg border border-emerald-100">
        <p className="text-emerald-600 font-semibold mb-2">
          Acceso administrador
        </p>

        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Iniciar sesión
        </h1>

        <form onSubmit={iniciarSesion} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Correo
            </label>

            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="admin@aquariumstore.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Contraseña
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="123456"
            />
          </div>

          {error && (
            <p className="bg-red-100 text-red-700 px-4 py-3 rounded-lg border border-red-200">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
          >
            Ingresar
          </button>
        </form>

        <div className="mt-6 bg-slate-50 p-4 rounded-xl text-sm text-slate-600">
          <p>
            <strong>Correo:</strong> admin@aquariumstore.com
          </p>
          <p>
            <strong>Contraseña:</strong> 123456
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login
import { useState } from 'react'

function Contact() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })

  const [error, setError] = useState('')
  const [confirmacion, setConfirmacion] = useState('')

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    })
  }

  const manejarEnvio = (e) => {
    e.preventDefault()

    if (!formulario.nombre || !formulario.correo || !formulario.mensaje) {
      setError('Todos los campos son obligatorios.')
      setConfirmacion('')
      return
    }

    if (!formulario.correo.includes('@')) {
      setError('Ingresa un correo válido.')
      setConfirmacion('')
      return
    }

    setError('')
    setConfirmacion('Mensaje enviado correctamente. Pronto nos comunicaremos contigo.')

    setFormulario({
      nombre: '',
      correo: '',
      mensaje: '',
    })
  }

  return (
    <section className="bg-emerald-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-emerald-600 font-semibold mb-2">
            Contacto
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Escríbenos sobre tu acuario
          </h1>

          <p className="text-slate-600 mb-6 leading-relaxed">
            Completa el formulario para consultar sobre peces ornamentales,
            alimentos o recomendaciones básicas para el cuidado de tu acuario.
          </p>

          <div className="bg-white rounded-2xl p-6 shadow border border-emerald-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Información de atención
            </h2>

            <div className="space-y-3 text-slate-600">
              <p>📍 Lima, Perú</p>
              <p>📧 contacto@aquariumstore.com</p>
              <p>🕘 Lunes a sábado: 9:00 a.m. - 6:00 p.m.</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={manejarEnvio}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-lg space-y-5 border border-emerald-100"
        >
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Nombre
            </label>

            <input
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={manejarCambio}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Ingresa tu nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Correo
            </label>

            <input
              type="email"
              name="correo"
              value={formulario.correo}
              onChange={manejarCambio}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Mensaje
            </label>

            <textarea
              name="mensaje"
              value={formulario.mensaje}
              onChange={manejarCambio}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
              rows="5"
              placeholder="Escribe tu consulta"
            ></textarea>
          </div>

          {error && (
            <p className="bg-red-100 text-red-700 px-4 py-3 rounded-lg border border-red-200">
              {error}
            </p>
          )}

          {confirmacion && (
            <p className="bg-green-100 text-green-700 px-4 py-3 rounded-lg border border-green-200">
              {confirmacion}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
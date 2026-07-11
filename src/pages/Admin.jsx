import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  obtenerProductos,
  agregarProducto,
  eliminarProducto,
} from '../services/productService'

function Admin() {
  const [productos, setProductos] = useState([])
  const [mensaje, setMensaje] = useState('')
  const [formulario, setFormulario] = useState({
    nombre: '',
    categoria: 'Peces',
    precio: '',
    stock: '',
    imagen: '',
    descripcion: '',
  })

  const navigate = useNavigate()

  useEffect(() => {
    const adminLogueado = localStorage.getItem('adminLogueado')

    if (adminLogueado !== 'true') {
      navigate('/login')
      return
    }

    cargarProductos()
  }, [navigate])

  const cargarProductos = async () => {
    const data = await obtenerProductos()
    setProductos(data)
  }

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    })
  }

  const manejarEnvio = async (e) => {
    e.preventDefault()

    if (
      !formulario.nombre ||
      !formulario.categoria ||
      !formulario.precio ||
      !formulario.stock ||
      !formulario.imagen ||
      !formulario.descripcion
    ) {
      setMensaje('Completa todos los campos.')
      return
    }

    const nuevoProducto = {
      nombre: formulario.nombre,
      categoria: formulario.categoria,
      precio: Number(formulario.precio),
      stock: Number(formulario.stock),
      imagen: formulario.imagen,
      descripcion: formulario.descripcion,
    }

    const productoCreado = await agregarProducto(nuevoProducto)

    if (productoCreado) {
      setMensaje('Producto agregado correctamente.')

      setFormulario({
        nombre: '',
        categoria: 'Peces',
        precio: '',
        stock: '',
        imagen: '',
        descripcion: '',
      })

      cargarProductos()
    } else {
      setMensaje('No se pudo agregar el producto.')
    }
  }

  const manejarEliminar = async (id) => {
    const confirmar = confirm('¿Seguro que deseas eliminar este producto?')

    if (!confirmar) return

    const eliminado = await eliminarProducto(id)

    if (eliminado) {
      setMensaje('Producto eliminado correctamente.')
      cargarProductos()
    } else {
      setMensaje('No se pudo eliminar el producto.')
    }
  }

  const cerrarSesion = () => {
    localStorage.removeItem('adminLogueado')
    navigate('/login')
  }

  return (
    <section className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <p className="text-emerald-600 font-semibold mb-2">
              Panel administrativo
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Gestión de productos
            </h1>

            <p className="text-slate-600 mt-2">
              Registra, lista y elimina peces o alimentos del catálogo.
            </p>
          </div>

          <button
            onClick={cerrarSesion}
            className="bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
          >
            Cerrar sesión
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <form
            onSubmit={manejarEnvio}
            className="bg-white p-6 rounded-2xl shadow border border-emerald-100 space-y-4"
          >
            <h2 className="text-xl font-bold text-slate-900">
              Agregar producto
            </h2>

            <input
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={manejarCambio}
              placeholder="Nombre del producto"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <select
              name="categoria"
              value={formulario.categoria}
              onChange={manejarCambio}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <option value="Peces">Peces</option>
              <option value="Alimentos">Alimentos</option>
            </select>

            <input
              type="number"
              name="precio"
              value={formulario.precio}
              onChange={manejarCambio}
              placeholder="Precio"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <input
              type="number"
              name="stock"
              value={formulario.stock}
              onChange={manejarCambio}
              placeholder="Stock"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <input
              type="text"
              name="imagen"
              value={formulario.imagen}
              onChange={manejarCambio}
              placeholder="URL de imagen"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <textarea
              name="descripcion"
              value={formulario.descripcion}
              onChange={manejarCambio}
              placeholder="Descripción"
              rows="4"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
            ></textarea>

            {mensaje && (
              <p className="bg-emerald-50 text-emerald-700 px-4 py-3 rounded-lg border border-emerald-100">
                {mensaje}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
            >
              Guardar producto
            </button>
          </form>

          <div className="bg-white p-6 rounded-2xl shadow border border-emerald-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Productos registrados
            </h2>

            {productos.length === 0 ? (
              <p className="text-slate-600">
                No hay productos registrados.
              </p>
            ) : (
              <div className="space-y-4 max-h-[620px] overflow-y-auto pr-2">
                {productos.map((producto) => (
                  <div
                    key={producto.id}
                    className="border border-slate-200 rounded-xl p-4 flex gap-4 items-center"
                  >
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900">
                        {producto.nombre}
                      </h3>

                      <p className="text-sm text-slate-600">
                        {producto.categoria} | S/ {producto.precio} | Stock:{' '}
                        {producto.stock}
                      </p>
                    </div>

                    <button
                      onClick={() => manejarEliminar(producto.id)}
                      className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 text-yellow-800 border border-yellow-200 p-4 rounded-xl text-sm">
          Nota: este módulo funciona como prototipo académico usando JSON Server.
          Para producción se recomienda usar una base de datos persistente.
        </div>
      </div>
    </section>
  )
}

export default Admin
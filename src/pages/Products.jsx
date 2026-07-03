import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { obtenerProductos } from '../services/productService'

function Products() {
  const [productos, setProductos] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('Todos')
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    async function cargarProductos() {
      const data = await obtenerProductos()
      setProductos(data)
      setCargando(false)
    }

    cargarProductos()
  }, [])

  const categorias = ['Todos', ...new Set(productos.map((producto) => producto.categoria))]

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())

    const coincideCategoria =
      categoria === 'Todos' || producto.categoria === categoria

    return coincideBusqueda && coincideCategoria
  })

  return (
    <section className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-emerald-600 font-semibold mb-2">
            Catálogo dinámico
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Productos de AQUARIUMSTORE
          </h1>

          <p className="text-slate-600 max-w-3xl">
            Estos productos se cargan desde una API simulada con JSON Server y se
            consumen usando Fetch API desde la carpeta Services.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow mb-6 grid md:grid-cols-2 gap-4 border border-slate-100">
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar producto..."
            className="border border-slate-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-emerald-400"
          />

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="border border-slate-300 rounded-lg px-4 py-3 w-full outline-none focus:ring-2 focus:ring-emerald-400"
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {!cargando && (
          <p className="text-sm text-slate-600 mb-6">
            Productos encontrados: <span className="font-bold text-emerald-700">{productosFiltrados.length}</span>
          </p>
        )}

        {cargando && (
          <div className="bg-white p-6 rounded-xl shadow text-slate-600">
            Cargando productos...
          </div>
        )}

        {!cargando && productosFiltrados.length === 0 && (
          <div className="bg-yellow-100 text-yellow-800 p-5 rounded-xl border border-yellow-200">
            No se encontraron productos con los filtros seleccionados.
          </div>
        )}

        {!cargando && productosFiltrados.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productosFiltrados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Products
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { obtenerProductos } from '../services/productService';

function Products() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function cargarProductos() {
      try {
        const data = await obtenerProductos();
        setProductos(data);
      } catch (error) {
        setError('No se pudieron cargar los productos. Intenta nuevamente.');
      } finally {
        setCargando(false);
      }
    }

    cargarProductos();
  }, []);

  const categorias = ['Todas', ...new Set(productos.map((producto) => producto.categoria))];

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === 'Todas' || producto.categoria === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">
        <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-sm font-semibold">
          Catálogo
        </span>

        <h1 className="text-4xl font-bold text-slate-900 mt-4">
          Productos para acuarios
        </h1>

        <p className="text-slate-600 mt-3 max-w-2xl">
          Explora peces, alimentos, filtros, accesorios y decoración para acuarios.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow p-5 mb-8 grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Buscar producto
          </label>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Ejemplo: filtro, alimento, acuario..."
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Categoría
          </label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {categorias.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      {cargando && (
        <div className="bg-blue-50 text-blue-700 p-4 rounded-xl">
          Cargando productos...
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-xl">
          {error}
        </div>
      )}

      {!cargando && !error && productosFiltrados.length === 0 && (
        <div className="bg-yellow-50 text-yellow-700 p-4 rounded-xl">
          No se encontraron productos con los filtros seleccionados.
        </div>
      )}

      {!cargando && !error && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productosFiltrados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;
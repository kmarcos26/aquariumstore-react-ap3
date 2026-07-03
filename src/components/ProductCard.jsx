function ProductCard({ producto }) {
  const stockBajo = producto.stock <= 10

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition overflow-hidden border border-emerald-100">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="text-lg font-bold text-slate-900">
            {producto.nombre}
          </h3>

          <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
            {producto.categoria}
          </span>
        </div>

        <p className="text-slate-600 text-sm mb-5 min-h-10">
          {producto.descripcion}
        </p>

        <div className="flex justify-between items-center mb-5">
          <p className="text-2xl font-bold text-emerald-700">
            S/ {producto.precio}
          </p>

          <p
            className={
              stockBajo
                ? 'text-sm font-semibold text-red-600'
                : 'text-sm font-semibold text-green-600'
            }
          >
            Stock: {producto.stock}
          </p>
        </div>

        <button className="w-full bg-emerald-600 text-white py-2.5 rounded-xl font-semibold hover:bg-emerald-700 transition">
          Ver detalle
        </button>
      </div>
    </div>
  )
}

export default ProductCard
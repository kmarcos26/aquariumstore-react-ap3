function ProductCard({ producto }) {
  const verDetalle = () => {
    alert(
      `Producto: ${producto.nombre}\nCategoría: ${producto.categoria}\nPrecio: S/ ${producto.precio}\nStock: ${producto.stock}`
    );
  };

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl font-bold text-slate-900">
            {producto.nombre}
          </h3>

          <span className="bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">
            {producto.categoria}
          </span>
        </div>

        <p className="text-slate-600 text-sm mb-4">
          {producto.descripcion}
        </p>

        <div className="flex items-center justify-between mb-4">
          <p className="text-2xl font-bold text-cyan-700">
            S/ {Number(producto.precio).toFixed(2)}
          </p>

          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${producto.stock > 10
              ? 'bg-green-100 text-green-700'
              : 'bg-yellow-100 text-yellow-700'
              }`}
          >
            Stock: {producto.stock}
          </span>
        </div>

        <button
          onClick={verDetalle}
          className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-cyan-700 transition"
        >
          Ver detalle
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
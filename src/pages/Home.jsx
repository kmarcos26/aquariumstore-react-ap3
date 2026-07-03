import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="bg-white">
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-5">
                🐠 Tienda especializada en acuarios
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-5">
                Crea un acuario
                <span className="text-emerald-600"> natural y lleno de vida</span>
              </h1>

              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                En AQUARIUMSTORE encontrarás peces ornamentales, acuarios,
                alimentos, filtros y accesorios para mantener un ambiente
                acuático saludable y atractivo.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/productos"
                  className="bg-emerald-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition shadow"
                >
                  Explorar catálogo
                </Link>

                <Link
                  to="/contacto"
                  className="bg-white text-emerald-700 px-7 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition border border-emerald-200"
                >
                  Consultar ahora
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-200 rounded-full opacity-60"></div>

              <div className="relative bg-white rounded-[2rem] shadow-xl border border-emerald-100 p-8">
                <div className="bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-[1.5rem] p-8 text-center">
                  <div className="text-8xl mb-4">🐟</div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Todo para tu mundo acuático
                  </h2>

                  <p className="text-slate-600">
                    Productos seleccionados para peces, acuarios y mantenimiento.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-5">
                  <div className="bg-emerald-50 rounded-xl p-3 text-center">
                    <p className="text-2xl">🌿</p>
                    <p className="text-xs font-semibold text-slate-700">Plantas</p>
                  </div>

                  <div className="bg-emerald-50 rounded-xl p-3 text-center">
                    <p className="text-2xl">🧽</p>
                    <p className="text-xs font-semibold text-slate-700">Limpieza</p>
                  </div>

                  <div className="bg-emerald-50 rounded-xl p-3 text-center">
                    <p className="text-2xl">🏺</p>
                    <p className="text-xs font-semibold text-slate-700">Acuarios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p className="text-emerald-600 font-semibold mb-2">
            Categorías principales
          </p>

          <h2 className="text-3xl font-bold text-slate-900">
            Encuentra productos para cada necesidad
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mb-5">
              🐠
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Peces ornamentales</h3>
            <p className="text-sm text-slate-600">
              Variedades ideales para acuarios pequeños y comunitarios.
            </p>
          </div>

          <div className="group bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mb-5">
              🏺
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Acuarios</h3>
            <p className="text-sm text-slate-600">
              Acuarios de vidrio y kits para iniciar tu espacio acuático.
            </p>
          </div>

          <div className="group bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mb-5">
              🧪
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Filtros y cuidado</h3>
            <p className="text-sm text-slate-600">
              Productos para mantener el agua limpia y segura para los peces.
            </p>
          </div>

          <div className="group bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mb-5">
              🌿
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Decoración</h3>
            <p className="text-sm text-slate-600">
              Plantas, rocas y accesorios para personalizar tu acuario.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-3xl p-8 shadow border border-emerald-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Compra pensando en el cuidado de tus peces
            </h2>

            <p className="text-slate-600 mb-6 leading-relaxed">
              Nuestro catálogo está organizado para que encuentres fácilmente
              lo necesario para alimentar, decorar y mantener tu acuario en buen
              estado.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  ✓
                </span>
                <p className="text-slate-700">
                  Productos separados por categoría.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  ✓
                </span>
                <p className="text-slate-700">
                  Catálogo dinámico consumido desde una API.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  ✓
                </span>
                <p className="text-slate-700">
                  Interfaz responsive desarrollada con Tailwind CSS.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <p className="text-5xl mb-3">🐡</p>
              <h3 className="font-bold text-slate-900">Peces</h3>
              <p className="text-sm text-slate-600 mt-1">Color y vida</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow text-center mt-8">
              <p className="text-5xl mb-3">💧</p>
              <h3 className="font-bold text-slate-900">Agua limpia</h3>
              <p className="text-sm text-slate-600 mt-1">Filtros y cuidado</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <p className="text-5xl mb-3">🌱</p>
              <h3 className="font-bold text-slate-900">Ambiente</h3>
              <p className="text-sm text-slate-600 mt-1">Decoración natural</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow text-center mt-8">
              <p className="text-5xl mb-3">🛒</p>
              <h3 className="font-bold text-slate-900">Catálogo</h3>
              <p className="text-sm text-slate-600 mt-1">Productos dinámicos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
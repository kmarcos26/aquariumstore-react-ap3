function About() {
  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
          <div>
            <p className="text-emerald-600 font-semibold mb-2">
              Sobre nosotros
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5">
              Cuidamos el mundo acuático desde casa
            </h1>

            <p className="text-slate-600 leading-relaxed mb-4">
              En AQUARIUMSTORE somos una tienda virtual dedicada a la venta de
              peces ornamentales y alimentos para peces. Nuestro objetivo es
              ayudar a que cada persona pueda iniciar o mantener su acuario de
              manera sencilla.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Ofrecemos productos pensados para aficionados al mundo acuático,
              con un catálogo fácil de revisar y organizado por categorías.
            </p>
          </div>

          <div className="bg-emerald-50 rounded-3xl p-10 text-center border border-emerald-100 shadow-sm">
            <p className="text-8xl mb-5">🐠</p>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              AQUARIUMSTORE
            </h2>
            <p className="text-slate-600">
              Una tienda pensada para quienes disfrutan de los peces,
              acuarios y el cuidado de la vida acuática.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Peces ornamentales
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Contamos con variedad de peces para acuarios domésticos, ideales
              para dar vida y color a tus espacios.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Alimentos
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ofrecemos alimentos básicos y tropicales para mantener a tus peces
              saludables y activos.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Atención sencilla
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Presentamos la información de forma clara para que puedas elegir
              productos según tus necesidades.
            </p>
          </div>
        </div>

        <div className="bg-emerald-600 rounded-3xl p-8 md:p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Nuestro compromiso
          </h2>

          <p className="text-emerald-50 leading-relaxed max-w-4xl">
            Buscamos brindar una experiencia de compra simple, ordenada y
            agradable, mostrando productos relacionados con el cuidado de peces
            y acuarios de manera clara y accesible.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
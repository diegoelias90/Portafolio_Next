export default function Home(){
  return(
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <section className="text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Diego Elías
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Odio hacer páginas web
        </p>

        <p className="mt-6 text-lg text-gray-500">
          Desplegando con Vercel.
        </p>
      </section>

      <section className="text-left">
        <p className="mt-4 text-lg text-black-600">
          Estoy intentando...
        </p>

        <p className="mt-3 text-lg text-gray-300">
          Es muy dificil de establecer una verdadera compatibilidad <br/>
          con algo que has pasado intentando durante tanto tiempo <br/>
          y ahora lo vez como una carga, pero es tu futuro, y no sabés <br/>
          con eso...
        </p>
      </section>
    </main>
  )
}
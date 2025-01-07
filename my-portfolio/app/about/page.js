export default function About() {
  return (
    <section>
      <div>
        <div
          className='h-60 w-full bg-cover bg-center flex flex-col justify-center'
          style={{
            backgroundImage: "url('yaroslav-a-0rSrUYHg5l8-unsplash.jpg')",
          }}>
          <h1 className='font-bold text-3xl lg:text-6xl text-white self-center'>
            About
          </h1>
        </div>
        <main className="p-4 flex flex-col justify-center">
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="font-semibold text-2xl mb-4"></h2>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}

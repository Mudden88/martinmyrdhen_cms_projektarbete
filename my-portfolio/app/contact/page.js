export default function Contact() {

  return (
    <>
      <section>
        <div className="h-60 w-full bg-cover bg-center flex flex-col justify-center"
          style={{ backgroundImage: "url(/yaroslav-a-0rSrUYHg5l8-unsplash.jpg)" }}>

        </div>
      </section>
      <main className="p-4 flex-auto flex flex-col justify-center">
        <section>
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact</h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea name="message" id="message" rows={5} required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </section>
      </main>
    </>
  )
}

import ContactForm from "@/components/contactform"

export const metadata = {
  title: 'Martin Myrdhén - Contact'
}

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
          <ContactForm />
        </section>
      </main>
    </>
  )
}

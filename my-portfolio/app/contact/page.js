"use client"
import { useEffect } from "react"
import ContactForm from "@/components/contactform"
import { useMetadata } from "../context/metadataContext"


export default function Contact() {
  const metadataCF = useMetadata()

  useEffect(() => {
    document.title = 'Martin Myrdhén - Contact'
  }, [])

  return (
    <>
      <section>
        <div className="h-60 w-full bg-cover bg-center flex flex-col justify-center"
          style={{ backgroundImage: `url(${metadataCF[0]?.heroImage.url}?fm=webp)` }}>

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

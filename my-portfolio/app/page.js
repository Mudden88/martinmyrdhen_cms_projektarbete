"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMetadata } from "./context/metadataContext";
import { getCardInfo } from "@/lib/api";



export default function Home() {
  const [cardInfo, setCardInfo] = useState()
  const metadata = useMetadata();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCardInfo()
        setCardInfo(data)
      } catch (error) {
        console.error("Error fetching cardInfo", error)
      }
    }
    fetchData()
  }, [])

  const buttonClass = "bg-purple-900 text-white mt-4 py-2 px-4 rounded-lg hover:bg-purple-950 focus:outline-none text-center";

  if (!cardInfo) {
    return <div>Loading...</div>
  }
  const techStack = cardInfo?.[0]?.techstackImagesCollection?.items || [];
  return (
    <>
      <section>
        <div className="h-60 w-full bg-cover bg-center flex flex-col justify-center"
          style={{ backgroundImage: "url('yaroslav-a-0rSrUYHg5l8-unsplash.jpg')" }}>
          <h1 className="font-bold text-3xl lg:text-6xl text-white self-center">{metadata[0]?.heroTitle}</h1>
          <p className="text-white self-center mt-2">{metadata[0]?.heroText}</p>
        </div>
      </section>
      <main className="p-4 flex-auto flex flex-col justify-center">
        <div className="max-w-sm w-full lg:max-w-full lg:flex self-center mt-4">
          <div
            className="h-56 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage: `url(${cardInfo[0]?.image?.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} title="Martin">
          </div>
          <div className="bg-gray-200 rounded-b lg:rounded-b p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <article>
                <div className="text-gray-900 font-bold text-3xl mb-2">{cardInfo[0]?.cardTitle}</div>
                <p className="text-base">{cardInfo[0]?.shortInfo}</p>
                <p className="text-2xl mb-0 mt-3 font-semibold">{cardInfo[0]?.title2}</p>
                <div className="flex flex-col text-center">
                  <div className="flex lg:space-x-4">
                    {techStack.length > 0 ? (
                      techStack.map((item, index) => (
                        <Image
                          key={index}
                          src={item.url}
                          alt={item.title}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                      ))
                    ) : (
                      <div>Loading...</div>
                    )}
                  </div>
                  <div className="mt-10 space-x-2 lg:space-x-4">
                    <Link href="/projects"
                      className={buttonClass}>
                      Projects
                    </Link>
                    <Link href="/contact"
                      className={buttonClass}>
                      Contact
                    </Link>
                    <Link href="/about"
                      className={buttonClass}>
                      About
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMetadata } from "./context/metadataContext";
import { getCardInfo } from "@/lib/api";

export default function Home() {
  const [cardInfo, setCardInfo] = useState(null);
  const metadataCF = useMetadata();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCardInfo();
        setCardInfo(data);
      } catch (error) {
        console.error("Error fetching card info:", error);
      }
    };

    fetchData();
  }, []);

  const buttonClass =
    "bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition";
  const techStack = cardInfo?.[0]?.techstackImagesCollection?.items || [];

  if (!cardInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section>
        <div
          className='h-60 w-full bg-cover bg-center flex flex-col justify-center'
          style={{
            backgroundImage: `url(${metadataCF[0]?.heroImage.url}?fm=webp)`,
          }}>
          <h1 className='font-bold text-3xl lg:text-6xl text-white self-center'>
            {metadataCF[0]?.heroTitle}
          </h1>
          <p className='text-white self-center mt-2'>{metadataCF[0]?.heroText}</p>
        </div>
      </section>
      <main className='p-4 flex-auto flex flex-col justify-center'>
        <div className='max-w-sm w-full lg:max-w-full lg:flex self-center mt-4'>
          <div
            className='h-56 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
            style={{
              backgroundImage: `url(${cardInfo[0]?.image?.url}?fm=webp)`,
            }}
            title='Martin'></div>
          <div className='bg-gray-200 rounded-b lg:rounded-b p-4 flex flex-col justify-between leading-normal'>
            <div className='mb-8'>
              <article>
                <div className='text-gray-900 font-bold text-3xl mb-2'>
                  {cardInfo[0]?.cardTitle}
                </div>
                <p className='text-base'>{cardInfo[0]?.shortInfo}</p>
                <p className='text-2xl mb-0 mt-3 font-semibold'>
                  {cardInfo[0]?.title2}
                </p>
                <div className='flex flex-col text-center mt-3'>
                  <div className='flex w-[350px] flex-wrap'>
                    {techStack.length > 0 ? (
                      techStack.map((item, index) => (
                        <div key={index} className='mb-4 mr-4'>
                          <Image
                            src={`${item.url}?fm=webp`}
                            alt={item.title}
                            width={50}
                            height={50}
                          />
                        </div>
                      ))
                    ) : (
                      <div>Loading...</div>
                    )}
                  </div>
                  <div className='mt-10 space-x-2 lg:space-x-4' aria-label="Site Links">
                    <Link href='/projects' className={buttonClass}>
                      Projects
                    </Link>
                    <Link href='/contact' className={buttonClass}>
                      Contact
                    </Link>
                    <Link href='/about' className={buttonClass}>
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

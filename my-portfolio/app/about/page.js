import RichTextRenderer from '@/components/RichTextRender'
import { getAboutMe } from '@/lib/api'
import Image from 'next/image'

export default async function About() {

  const aboutMe = await getAboutMe()
  const items = aboutMe[0]

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
        <main className="p-4 flex flex-col items-center space-y-8">

          <div className="bg-white container shadow-md rounded-lg p-6 flex flex-col">
            <h2 className="font-semibold text-2xl mb-4">{items.titleAbout}</h2>
            <div className='flex flex-col lg:flex-row'>

              <Image
                src={`${items?.image?.url}?fm=webp`}
                alt={items?.image?.title}
                layout='intrinsic'
                width={350}
                height={300}
                className='rounded-lg lg:rounded-br-full  shadow-lg opacity-80'>
              </Image>
              <div className='max-w-md lg:ml-3'>
                <RichTextRenderer content={items.aboutMeText.json} />
              </div>
            </div>
          </div>

          <div className='bg-white container shadow-md rounded-lg p-6'>
            <h2 className='font-semibold text-2xl mb-4'>{items.educationTitle}</h2>
            <RichTextRenderer content={items.educationList.json} />
          </div>

          <div className='bg-white container shadow-md rounded-lg p-6'>
            <h2 className='font-semibold text-2xl mb-4'>{items.workTitle}</h2>
            <RichTextRenderer content={items.workList.json} />
          </div>
        </main>
      </div>
    </section>
  )
}

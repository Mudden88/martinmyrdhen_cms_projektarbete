import { getProjectBySlug } from "@/lib/api"
import RichTextRenderer from "@/components/RichTextRender"
import Image from "next/image"
import Link from "next/link"

export default async function ProjectSingle({params}) {
  const project = await getProjectBySlug(params.post)


  return (
    <>    
    <section>
      <div className="h-60 w-full bg-cover bg-center flex flex-col justify-center"
      style={{ backgroundImage: "url(/yaroslav-a-0rSrUYHg5l8-unsplash.jpg)" }}>
      <h1 className="font-bold text-3xl lg:text-6xl text-white self-center">{project?.title}</h1>
    </div>
    </section>
    <main className="p-4 flex-auto flex flex-col justify-center">
      <section>
        <div className="container mx-auto py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
            src={project?.image?.url} 
            alt={project?.image?.title} 
            layout="responsive" 
            objectFit="cover" 
            width={100} 
            height={100}></Image>
          </div>
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">{project?.title}</h2>
            <div className="text-gray-700">
<RichTextRenderer content={project?.details?.json} />
            </div>
            <div className="flex space-x-2">
              <Link href={project?.siteUrl} target="_blank" className="text-blue-500 hover:underline mt-2 block">Visit</Link>
              <Link href={project?.urlGithub} target="_blank" className="text-blue-500 hover:underline mt-2 block">Github</Link>
            </div>
            <Link href="/projects" className="text-blue-400 hover:underline mt-2 block">Back</Link>
          </div>
        </div>
      </section>
    </main> 
  </>
  )
}

import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/lib/api";

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <>
      <section>
        <div
          className='h-60 w-full bg-cover bg-center flex flex-col justify-center'
          style={{
            backgroundImage: "url('yaroslav-a-0rSrUYHg5l8-unsplash.jpg')",
          }}>
          <h1 className='font-bold text-3xl lg:text-6xl text-white self-center'>
            Projects
          </h1>
        </div>
      </section>
      <main className='p-4 flex flex-col justify-center'>
        <section>
          <div className='container mx-auto py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className='bg-white rounded-lg shadow-md overflow-hidden'>
                  <Image
                    src={project?.image?.url}
                    width={1}
                    height={1}
                    layout='responsive'
                    objectFit='cover'
                    alt={project?.image?.title}
                    className='max-h-[283px]'></Image>

                  <div className='p-4'>
                    <h2 className='font-bold text-xl mb-2'>{project?.title}</h2>
                    <p className="text-gray-700">{console.log(project?.details?.json?.data)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

"use client"
import { useEffect, useState } from "react";
import { getProjectBySlug } from "@/lib/api";
import RichTextRenderer from "@/components/RichTextRender";
import Image from "next/image";
import Link from "next/link";
import SwiperComponent from "@/components/swiper";
import { useParams } from 'next/navigation';

export default function ProjectSingle() {
  const params = useParams();
  const [project, setProject] = useState(null);
  const projectImages = project?.projectImagesCollection?.items;

  useEffect(() => {
    const fetchProject = async () => {
      const projectData = await getProjectBySlug(params.post);
      setProject(projectData);
    };

    fetchProject();
  }, [params.post]);

  if (!project) {
    return <div>Loading...</div>;
  }

  if (project) {
    document.title = `Martin Myrdhén - ${project.title}`
  }

  return (
    <>
      <section>
        <div
          className="h-60 w-full bg-cover bg-center flex flex-col justify-center"
          style={{ backgroundImage: "url(/yaroslav-a-0rSrUYHg5l8-unsplash.jpg)" }}
        >
          <h1 className="font-bold text-3xl lg:text-6xl text-white self-center">
            {project?.title}
          </h1>
        </div>
      </section>
      <main className="p-4 flex-auto flex flex-col justify-center">
        <section>
          <div className="container mx-auto py-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={`${project?.image?.url}?fm=webp`}
                alt={project?.image?.title}
                width={1920}
                height={1080}
                layout="responsive"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-xl mb-0">{project?.title}</h2>
              {project?.category ? project?.category.map((item, index) => (
                <span key={index} className="font-light text-gray-400 mb-2">{item + " "}</span>
              )) : <div>No categories available</div>}
              <div className="text-gray-700">
                <RichTextRenderer content={project?.details?.json} />
              </div>
              {/* Send ProjectImages to child component */}
              <SwiperComponent projectImages={projectImages} />

              <div className="flex items-center space-x-2">
                <Link href={project?.siteUrl} target="_blank" className="text-blue-500 hover:underline mt-2 block">Visit</Link>
                <Link href={project?.urlGithub} target="_blank" className="text-blue-500 hover:underline mt-2 block">Github</Link>
                <Link href="/projects" className="text-blue-400 hover:underline mt-2 block">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

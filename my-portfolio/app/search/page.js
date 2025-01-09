"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/lib/api";


export default function SearchResults() {

    const [project, setProject] = useState([])

    const searchParams = useSearchParams();
    const query = searchParams.get("query");

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getAllProjects()
            setProject(data)
        };
        fetchProjects()
    }, [])


    // Filter projects based on the search query parameter    
    const filteredProjects = project.filter((project) =>
        project.category.includes(query)
    )
    console.log(filteredProjects)
    return (

        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Search Results</h1>
            <p className="mb-2">
                You searched for: <span className="font-semibold">{query}</span>
            </p>
            <div>
                <main className="p-4 flex flex-col justify-center">
                    <section>
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Render projects filtered by choosen category */}
                                {filteredProjects.length > 0 ? filteredProjects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="bg-white rounded-lg shadow-md overflow-hidden"
                                    >
                                        <div className="relative h-64 w-full">
                                            <Image
                                                src={project?.image?.url}
                                                layout="fill"
                                                objectFit="cover"
                                                alt={project?.image?.title}
                                                className="w-full h-full"
                                            ></Image>
                                        </div>
                                        <div className="p-4">
                                            <h2 className="font-bold text-xl mb-2">{project?.title}</h2>
                                            <p className="text-gray-700">
                                                {/* Substring to simulate excerpt with 250 chars */}
                                                {project?.details?.json?.content[0].content[0].value?.substring(
                                                    0,
                                                    250
                                                )}
                                                {project?.details?.json?.content[0].content[0].value
                                                    ?.length > 250 && "..."}
                                            </p>
                                            <Link
                                                href={`/projects/${project?.slug}`}
                                                className="text-blue-500 hover:underline mt-2 block"
                                            >
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                )) : <div><p className="mb-3">No results were found for <span className="font-bold">&quot;{query}&quot;</span></p>
                                    <Link
                                        href="/projects"
                                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition">See All Projects</Link></div>}
                            </div>
                        </div>
                    </section>
                </main>

            </div>
        </div>
    );
}

"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getAllProjects } from "@/lib/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getAllProjects();
      console.log("Fetched projects data:", projectsData); // Debugging the fetched data
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  // Get unique categories from the projects after data is loaded
  const categories = [
    ...new Set(projects.map((project) => project.category)),
  ];

  console.log("Categories:", categories); // Debugging the categories list

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  return (
    <>
      <section>
        <div
          className="h-60 w-full bg-cover bg-center flex flex-col justify-center"
          style={{
            backgroundImage: "url('yaroslav-a-0rSrUYHg5l8-unsplash.jpg')",
          }}
        >
          <h1 className="font-bold text-3xl lg:text-6xl text-white self-center">
            Projects
          </h1>
        </div>
      </section>
      <main className="p-4 flex flex-col justify-center">
        <section>
          <div className="container mx-auto py-8">
            {/* Dropdown categories */}
            <div className="mb-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
              >
                <option value="">All Categories</option>
                {categories.length > 0 && // Ensure categories are present
                  categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredProjects.map((project) => (
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
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

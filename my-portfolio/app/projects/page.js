import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
  return (
    <main className='p-4 flex-auto flex flex-col justify-center'>
      <section>
        <div className='container mx-auto py-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden'></div>
          </div>
        </div>
      </section>
    </main>
  );
}

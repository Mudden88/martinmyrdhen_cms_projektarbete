import Link from "next/link";

export default function Home() {

  const buttonClass = "bg-purple-900 text-white mt-4 py-2 px-4 rounded-lg hover:bg-purple-950 focus:outline-none text-center"

  return (
    <>
      <section>
        <div className="h-60 w-full bg-cover bg-center flex flex-col justify-center"
          style={{ backgroundImage: "url('yaroslav-a-0rSrUYHg5l8-unsplash.jpg')" }}>
          <h1 className="font-bold text-3xl lg:text-6xl text-white self-center">Contentful Title</h1>
          <p className="text-white self-center mt-2">Contentful text</p>
        </div>
      </section>
      <main className="p-4 flex-auto flex flex-col justify-center">
        <div className="max-w-sm w-full lg:max-w-full lg:flex self-center mt-4">
          <div
            className="h-56 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: " embedded picture url('./img/1697911452505.jpg')" }} title="Martin">
            {/* ContentfulPicture Swap Style backgroundImage */}
          </div>
          <div className="bg-gray-200 rounded-b lg:rounded-b p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <article>
                <div className="text-gray-900 font-bold text-3xl mb-2">Hello!*</div>
                <p className="text-base">Contentful PlaceHolder text</p>
                <p className="text-2xl mb-0 mt-3 font-semibold">Techstack*</p>
                <div className="flex flex-col text-center">
                  <div className="flex lg:space-x-4">
                    Contentful PlaceHolder Images
                  </div>
                </div>
                <div className="mt-10 space-x-2 lg:space-x-4">
                  <Link href={"/projects"} className={buttonClass}>Projects</Link>
                  <Link href={"/contact"} className={buttonClass}>Contact</Link>
                  <Link href={"/about"} className={buttonClass}>About</Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </>

  );
}

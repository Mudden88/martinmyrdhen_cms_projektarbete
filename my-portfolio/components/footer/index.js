import { getMetaData } from "@/lib/api"
import { getSocialLinks } from "@/lib/api"
import Link from "next/link"


export default async function Footer() {
  const metadata = await getMetaData()
  const socials = await getSocialLinks()

  //Connect name with URL. As of now shows correct values ONLY if name and URL is on same index in both arrays.
  const connectSocials = socials[0].socialName.map((name, index) => ({
    name,
    url: socials[0].socialUrl[index]
  }))

  return (
    <footer
      className="w-full text-white bg-gradient-to-r from-cyan-900 to-blue-950 py-4 mt-auto flex justify-between items-end px-4">
      <p className="text-center">&copy; 2024 {metadata[0]?.siteTitle}. All rights reserved.</p>
      <div className="flex flex-col space-y-2">
        <p className="text-xl">{socials[0].title}</p>
        {connectSocials.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            className="text-gray-50 hover:text-gray-300"
            target="_blank">
            <i className={`fa-brands fa-${social.name.toLowerCase()}`}></i> {social.name}</Link>
        ))}
      </div>
    </footer>
  )
}

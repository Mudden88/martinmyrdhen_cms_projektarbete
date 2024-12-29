import Image from "next/image"
import Link from "next/link"

export default async function Projects() {

  return (
    <div>
      Här kommer projekten
      <p>
        <Link href={"projects/MinFörstaPost"}>Läsmer testpost</Link>
      </p>
      <div className="space-y-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        </div>
      </div>
    </div>
  )
}

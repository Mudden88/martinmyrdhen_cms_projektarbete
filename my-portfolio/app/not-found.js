import Link from "next/link";

export default function Page404() {
    return (
        <>
            <main className="flex-auto text-center bg-black text-white">
                <div className="mt-12" >

                    <h1 className="text-6xl font-bold">OH NO!</h1>
                    <h2 className="text-9xl font-bold">404</h2>
                    <p className="text-xl font-semibold">This page does not exist!</p>
                    <p className="text-4xl font-bold">But No Problem</p>
                    <Link href="/" className="text-3xl font-bold hover:underline">CLICK HERE</Link>
                    <p className="text-xl">It might return you to the frontpage</p>
                </div>
            </main>
        </>
    )
}
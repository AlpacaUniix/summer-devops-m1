import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center p-24 bg-red-200">
      <div className="w-full items-center justify-center font-mono lg:flex">
        <h1 className="font-bold text-5xl text-teal-700">Hello World, UNIIX</h1>
        <div>
          <Image src="/cuteDino.svg" width={500} height={500} alt="Cute Dino" />
        </div>
      </div>
    </main>
  );
}

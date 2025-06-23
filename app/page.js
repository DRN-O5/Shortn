import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex justify-center text-center text-xl bg-linear-to-t from-white to-blue-500 p-10">
        <div>
          <p className="text-bold text-3xl mb-4">
            The best URL shortener in the market
          </p>
        </div>
      </section>
    </main>
  );
}

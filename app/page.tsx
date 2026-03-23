import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col justify-center items-center text-center bg-gray-200">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Mwisho Mwisho Tourist Hotel
        </h1>
        <p className="mb-6">
          Experience comfort, culture, and relaxation in Siaya Town
        </p>
        <Link
          href="/booking"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Book Your Stay
        </Link>
      </section>

      {/* Rooms Preview */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Rooms</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 shadow rounded">Standard Room</div>
          <div className="p-4 shadow rounded">Deluxe Room</div>
          <div className="p-4 shadow rounded">Executive Suite</div>
        </div>
      </section>
    </main>
  );
}
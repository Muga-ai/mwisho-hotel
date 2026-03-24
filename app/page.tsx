"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";

export const dynamic = "force-dynamic";

const rooms = [
  {
    id: "1",
    name: "Standard Room",
    price: 3000,
    image: "mwisho-hotel/rooms/room1",
  },
  {
    id: "2",
    name: "Deluxe Room",
    price: 5000,
    image: "mwisho-hotel/rooms/room2",
  },
  {
    id: "3",
    name: "Executive Suite",
    price: 8000,
    image: "mwisho-hotel/rooms/room3",
  },
];

const galleryImages = [
  "mwisho-hotel/gallery/gallery1",
  "mwisho-hotel/gallery/gallery2",
  "mwisho-hotel/gallery/gallery3",
];

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="relative h-[90vh]">
        <CldImage
          src="mwisho-hotel/hero/hotel-hero"
          fill
          alt="Mwisho Mwisho Hotel"
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Welcome to Mwisho Mwisho Hotel
          </h1>
          <p className="mb-6 text-lg md:text-xl text-white">
            Luxury stays, delicious meals, and unforgettable experiences in Siaya
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/rooms"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              View Rooms
            </Link>

            <a
              href="https://wa.me/254711378910?text=Hello!%20I%20want%20to%20book%20a%20room"
              target="_blank"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About Mwisho Mwisho Hotel
        </h2>

        <p className="text-gray-700 mb-6">
          Experience comfort and elegance in Siaya Town. Our hotel offers
          spacious rooms, a friendly atmosphere, delicious dining, and a perfect
          location for travelers and business guests.
        </p>

        <CldImage
          src="mwisho-hotel/gallery/gallery1"
          width={800}
          height={500}
          alt="Hotel Interior"
          className="mx-auto rounded-lg shadow-lg"
        />
      </section>

      {/* Rooms */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Our Rooms
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.id} className="shadow-lg rounded-xl overflow-hidden">
              <CldImage
                src={room.image}
                width={500}
                height={300}
                alt={room.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-bold">{room.name}</h3>
                <p className="text-gray-600 mt-1">
                  KES {room.price} per night
                </p>

                <a
                  href="https://wa.me/254711378910?text=Hello!%20I%20want%20to%20book%20a%20room"
                  target="_blank"
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((src, i) => (
            <CldImage
              key={i}
              src={src}
              width={500}
              height={300}
              alt={`Gallery image ${i + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Visit Us
        </h2>

        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Shop+20A+NextGen+Mall+Mombasa+Road+Siaya+Town&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
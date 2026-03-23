     "use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";

const Hero = () => {
  return (
    <section className="relative h-[90vh]">
      {/* Hero Image */}
      <CldImage
        src="mwisho-hotel/hero/hotel-hero"
        fill
        alt="Mwisho Mwisho Hotel"
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Mwisho Mwisho Hotel
        </h1>
        <p className="mb-6 text-lg md:text-xl">
          Luxury stays, delicious meals, and unforgettable experiences in Siaya
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/rooms"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            View Rooms
          </Link>

          <a
            href="https://wa.me/2547XXXXXXXX?text=Hello!%20I%20want%20to%20book%20a%20room"
            target="_blank"
            className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Book via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
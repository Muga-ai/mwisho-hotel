"use client";
import { CldImage } from "next-cloudinary";

const images = [
  "mwisho-hotel/gallery/gallery1",
  "mwisho-hotel/gallery/gallery2",
  "mwisho-hotel/gallery/gallery3",
];

export default function Gallery() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <CldImage
            key={i}
            src={src}
            width={500}
            height={300}
            alt={`Gallery image ${i + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>
    </main>
  );
}
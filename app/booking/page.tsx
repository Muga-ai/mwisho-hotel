"use client";

import { useState } from "react";

export default function BookingPage() {
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleBooking = () => {
    const message = `Hello, I would like to book a room:
Name: ${name}
Check-in: ${checkIn}
Check-out: ${checkOut}`;

    const whatsappUrl = `https://wa.me/2547XXXXXXXX?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Book Your Stay</h1>

      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border mb-4"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="date"
        className="w-full p-3 border mb-4"
        onChange={(e) => setCheckIn(e.target.value)}
      />

      <input
        type="date"
        className="w-full p-3 border mb-4"
        onChange={(e) => setCheckOut(e.target.value)}
      />

      <button
        onClick={handleBooking}
        className="w-full bg-green-600 text-white py-3 rounded-lg"
      >
        Book via WhatsApp
      </button>
    </main>
  );
}
"use client";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/254711378910?text=Hello!%20I%20want%20to%20book%20a%20room%20at%20Mwisho%20Mwisho%20Hotel"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition"
    >
      💬 <span className="hidden sm:inline">Book Now</span>
    </a>
  );
};

export default WhatsAppButton;
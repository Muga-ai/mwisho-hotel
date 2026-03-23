import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">Mwisho Mwisho</h1>

      <div className="space-x-6 hidden md:flex">
        <Link href="/">Home</Link>
        <Link href="/rooms">Rooms</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <Link
        href="/booking"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Book Now
      </Link>
    </nav>
  );
};

export default Navbar;
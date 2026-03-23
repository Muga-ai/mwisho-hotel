import RoomCard from "@/components/RoomCard";
import { Room } from "@/types";

const rooms: Room[] = [
  {
    id: "1",
    name: "Standard Room",
    price: 3000,
    image: "mwisho-hotel/rooms/room1",
    description: "Comfortable room with basic amenities.",
  },
  {
    id: "2",
    name: "Deluxe Room",
    price: 5000,
    image: "mwisho-hotel/rooms/room2",
    description: "Spacious room with premium comfort.",
  },
  {
    id: "3",
    name: "Executive Suite",
    price: 8000,
    image: "mwisho-hotel/rooms/room3",
    description: "Luxury suite with top-tier amenities.",
  },
];

export default function RoomsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Our Rooms</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </main>
  );
}
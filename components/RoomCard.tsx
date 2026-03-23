import { Room } from "@/types";
import { CldImage } from "next-cloudinary";

interface Props {
  room: Room;
}

const RoomCard = ({ room }: Props) => {
  return (
    <div className="shadow-lg rounded-xl overflow-hidden">
      <CldImage
        src={room.image}
        width={500}
        height={300}
        alt={room.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold">{room.name}</h3>
        <p className="text-sm text-gray-600">{room.description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-semibold">KES {room.price}</span>
          <a
            href="/booking"
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Book
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
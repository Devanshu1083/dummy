
import RoomOccupancyCard from "@/components/RoomOccupancyCard";
import RoomManagement from "../components/Management";
import Floor from "@/components/Floor";

// data for rooms
const roomData = {
  totalBeds: 80,
  availableBeds: 15,
  vacatingInDays: 4,
  occupiedBeds: 65,
};

export default function Home() {
  return (
    <div xlassName="bg-gray-500">
    <main className="flex min-h-screen flex-col p-5 pl-8 pr-8">
      <RoomManagement/>
      <RoomOccupancyCard {...roomData}/>
      <Floor floorno={0} vacating={4}/>
      <Floor floorno={1} vacating={7}/>
      <Floor floorno={2} vacating={1}/>
    </main>
    </div>
  );
}

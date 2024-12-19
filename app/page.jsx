import Goals from "@/components/Goals";
import Header from "@/components/Header";
import Member from "@/components/Member";
import VisionMission from "@/components/VisionMission";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Goals />
      <VisionMission />
      <Member />
    </div>
  );
}

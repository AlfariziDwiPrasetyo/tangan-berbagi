import Goals from "@/components/Goals";
import LogoMeaningSection from "@/components/profile/LogoMeaningSection";
import VisionMission from "@/components/VisionMission";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="py-12 flex flex-col items-center justify-center">
      {/* logo dan deskripsi */}
      {/* deskripsi */}
      <div className="py-12 flex flex-col justify-center text-center max-w-x px-5 md:px-12">
        <h2 className="text-2xl font-bold text-green-600">
          Deskripsi Organisasi
        </h2>
        <p>
          Organisasi ini merupakan kelompok atau komunitas yang berfokus pada
          kegiatan sosial, kepedulian, dan kolaborasi, terutama dalam konteks
          akademik atau program studi manajemen pemasaran.
        </p>
      </div>
      {/* <div className="py-12 px-5"></div> */}
      <LogoMeaningSection />
      {/* visi misi */}
      <VisionMission />
      {/* tujuan */}
      <Goals />
    </div>
  );
}

export default page;

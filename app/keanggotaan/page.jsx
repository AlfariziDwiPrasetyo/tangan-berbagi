import ART from "@/components/keanggotaan/ART";
import Meeting from "@/components/keanggotaan/Meeting";
import StructureOrganization from "@/components/keanggotaan/StructureOrganization";
import Card from "@/components/reusable/Card";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="py-12 flex px-5 flex-col items-center space-y-6">
      <div className="w-full max-w-4xl">
        <Image
          src={"/images/member/allMember.jpeg"}
          width={1200}
          height={400}
          alt="all member"
          className="rounded-lg object-cover"
        />
        <StructureOrganization />

        {/* Rapat */}
        <Meeting />
        {/*  */}

        {/* ART */}
        <ART />
      </div>
    </div>
  );
}

export default page;

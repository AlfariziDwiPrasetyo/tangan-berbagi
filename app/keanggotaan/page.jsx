"use client";
import StructureOrganization from "@/components/keanggotaan/StructureOrganization";
import ScrollProgress from "@/components/ui/scroll-progress";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="py-32 flex px-5 flex-col items-center space-y-6">
      <ScrollProgress className="top-[77px]" />

      <div className="w-full max-w-4xl">
        <Image
          src={"/images/member/allMember2.jpg"}
          width={1200}
          height={400}
          alt="all member"
          className="rounded-lg object-cover"
        />
        <StructureOrganization />
      </div>
    </div>
  );
}

export default page;

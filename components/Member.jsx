import React from "react";
import CardMember from "./reusable/CardMember";
import Image from "next/image";

function Member() {
  return (
    <div className="flex px-5 py-12 flex-col items-center space-y-6">
      <h2 className="text-2xl  text-green-600 text-center font-bold">
        Anggota
      </h2>
      <div className="w-full max-w-4xl">
        <Image
          src={"/images/member/allMember2.jpg"}
          width={1200}
          height={400}
          alt="all member"
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default Member;

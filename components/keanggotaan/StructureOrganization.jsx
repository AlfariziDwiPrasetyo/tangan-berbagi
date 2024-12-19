"use client";
import React from "react";
import CardMember from "../reusable/CardMember";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
import { listMember } from "@/lib/data";

function StructureOrganization() {
  return (
    <div className="flex flex-col justify-center py-12 px-5">
      <h2 className="text-green-600 text-2xl font-bold py-5">
        Struktur Organisasi
      </h2>
      <div className="w-full flex justify-center">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1} // Default for mobile (1 slide per view)
          scrollbar={{ draggable: true }}
          breakpoints={{
            640: {
              // On screens >= 640px (Mobile Portrait)
              slidesPerView: 1, // 1 slide per view
            },
            768: {
              // On screens >= 768px (Tablet/Small Laptop)
              slidesPerView: 2, // 2 slides per view
            },
            1024: {
              // On screens >= 1024px (Medium Screens)
              slidesPerView: 3, // 3 slides per view
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {listMember.map((member, key) => (
            <SwiperSlide key={key}>
              <CardMember
                imageUrl={member.imageUrl}
                title={member.title}
                name={member.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default StructureOrganization;

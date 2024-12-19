"use client";
import CardImage from "@/components/reusable/CardImage";
import BlurFade from "@/components/ui/blur-fade";
import ScrollProgress from "@/components/ui/scroll-progress";
import { documentationPhotos } from "@/lib/data";
import React from "react";

function page() {
  return (
    <div className="flex flex-col justify-center py-32 px-5">
      <ScrollProgress className="top-[77px]" />

      <h2 className="font-bold text-2xl text-green-600">Dokumentasi</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 py-12">
        {documentationPhotos.map((photo, key, idx) => (
          <div key={key}>
            <BlurFade key={key} delay={0.25 + idx * 0.05} inView>
              <CardImage imageUrl={photo.url} />
            </BlurFade>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;

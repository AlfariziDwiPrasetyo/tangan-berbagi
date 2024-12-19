import CardImage from "@/components/reusable/CardImage";
import { documentationPhotos } from "@/lib/data";
import React from "react";

function page() {
  return (
    <div className="flex flex-col justify-center py-12 px-5">
      <h2 className="font-bold text-2xl text-green-600">Dokumentasi</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 py-12">
        {documentationPhotos.map((photo, key) => (
          <div key={key}>
            <CardImage imageUrl={photo.url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;

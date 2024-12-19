import React from "react";
import Card from "../reusable/Card";

function Meeting() {
  return (
    <div className="flex flex-col justify-center py-12">
      <h2 className="text-2xl text-green-600 font-bold py-5">
        Rapat Dan Musyarawah
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <Card
          title={"Rapat anggota"}
          description={
            "Rapat anggota merupakan forum pengambilan keputusan tertinggi dalam Tangan berbagi. Rapat Anggota, yaitu rapat yang diselenggarakan apabila keadaan mengharuskan adanya Keputusan"
          }
        />
        <Card
          title={"Rapat kerja"}
          description={
            "Rapat Kerja, yaitu rapat yang dihadiri oleh seluruh anggota"
          }
        />
      </div>

      <div className="flex flex-col text-white bg-green-600 rounded-md p-5 mt-12">
        <h3 className="text-lg font-bold">Tata Cara Pengambilan Keputusan</h3>
        <ul>
          <li>1. Identifikasi masalah</li>
          <li>2. Tentukan tujuan</li>
          <li>3. Kumpulkan informasi</li>
          <li>5. Evaluasi alternative</li>
          <li>5. Evaluasi alternative</li>
          <li>6. Pilih alternatif terbaik</li>
          <li>7. Implementasikan keputusan</li>
          <li>8. Evaluasi implementasi keputusan</li>
        </ul>
      </div>
    </div>
  );
}

export default Meeting;

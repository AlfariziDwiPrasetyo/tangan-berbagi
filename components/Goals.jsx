import React from "react";
import Card from "./reusable/Card";

function Goals() {
  return (
    <div className="bg-green-600 flex flex-col py-12">
      <h2 className="text-white text-2xl text-center font-bold">Tujuan</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-3 pt-5">
        <Card
          title={"Tujuan Bakti Sosial ke Panti Asuhan"}
          description={
            "Menyediakan kebutuhan dasar seperti makanan, pakaian, perlengkapan sekolah, atau obat-obatan untuk anak-anak panti asuhan"
          }
        />
        <Card
          title={"Menumbuhkan rasa kepedulian"}
          description={
            "Mengajarkan nilai-nilai sosial seperti empati, berbagi, dan gotong royong kepada para peserta bakti sosial."
          }
        />
        <Card
          title={"Memberikan dukungan moral"}
          description={
            "Memberikan semangat dan motivasi kepada anak-anak panti asuhan agar mereka tetap optimis dan bersemangat dalam menjalani hidup."
          }
        />
      </div>
    </div>
  );
}

export default Goals;

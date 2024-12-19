import Image from "next/image";
import React from "react";

function LogoMeaningSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-5">
      <Image src={"/images/logo.png"} width={1200} height={1200} alt="logo" />

      <div className="">
        <h2 className="text-center text-2xl text-green-600 font-bold">
          Makna Logo
        </h2>
        <ul className="mt-5 space-y-4 px-10 list-decimal">
          <li className="">
            Warna hijau mempresentasikan pertumbuhan melalui berbagi atau
            harapan akan masa depan yang lebih baik bagi mereka yang dibantu.
          </li>
          <li>
            Warna putih melambangkan kesucian, niat baik, dan ketulusan dalam
            berbagi.
          </li>
          <li>
            Logo Tangan Berbagi melambangkan kepedulian, kebersamaan, dan
            semangat berbagi, di mana tangan besar melindungi dan mendukung
            tangan kecil, mencerminkan solidaritas serta tolong-menolong.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LogoMeaningSection;

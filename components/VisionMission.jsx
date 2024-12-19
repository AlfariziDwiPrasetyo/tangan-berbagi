import Image from "next/image";
import React from "react";

function VisionMission() {
  return (
    <div className="flex flex-col md:flex-row">
      <Image
        src={"/images/visi-misi.svg"}
        alt="visi-misi"
        width={500}
        height={500}
      />
      <div className="flex-col md:mt-12 justify-center px-12 md:px-5">
        <h2 className="text-2xl text-center font-bold text-green-600">
          Visi dan Misi
        </h2>
        <p className="mt-5">
          Peduli, berbagi dan membawa kebahagiaan kepada masyarakat yang
          membutuhkan dengan membantu meringankan penderitaan sesama yang
          membutuhkan, dalam bidang kemanusiaan, sosial, pendidikan dan
          lingkungan/komunitas untuk mencapai dan newujudkan kualitas hidup yang
          lebih baik.
        </p>
        <ul className="mt-5 space-y-3 list-disc">
          <li>
            Mendukung program pencerdasan bangsa yang berkarakter dan memiliki
            ketrampilan
          </li>
          <li>
            Mendukung peningkatan kesejahteraan hidup bangsa Indonesia melalui
            program kerja kesehatan, lingkungan dan pemberdayaan masyarakat.
          </li>
          <li>Meringankan beban masyarakat yang mengalami bencana.</li>
        </ul>
      </div>
    </div>
  );
}

export default VisionMission;

import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-12 px-12 md:py-0 md:px-12">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-green-600">Tangan Berbagi</h1>
        <p className="mt-5">
          Tangan Berbagi adalah organisasi sosial yang berfokus pada kegiatan
          kemanusiaan, sosial, pendidikan, dan lingkungan. Organisasi ini
          bertujuan untuk meringankan penderitaan masyarakat yang membutuhkan
          serta meningkatkan kualitas hidup melalui berbagai program kerja.
        </p>
      </div>
      <div>
        <Image src="/images/logo.png" width={1500} height={1500} alt="header" />
      </div>
    </div>
  );
}

export default Header;

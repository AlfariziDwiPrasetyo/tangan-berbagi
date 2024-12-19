import React from "react";

function ART() {
  return (
    <div className="px-6 py-12 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-green-600 mb-6">
          Anggaran Rumah Tangga (ART)
        </h1>

        {/* Keanggotaan Section */}
        <section className="mb-8">
          <h2 className="text-1xl font-semibold text-green-500">
            a. Keanggotaan
          </h2>
          <ul className="list-disc pl-6 mt-4">
            <li>Mekanisme pendaftaran anggota</li>
            <li>Ketentuan iuran anggota (jika ada)</li>
            <li>Penanganan pelanggaran anggota</li>
          </ul>
        </section>

        {/* Kepengurusan Section */}
        <section className="mb-8">
          <h2 className="text-1xl font-semibold text-green-500">
            b. Kepengurusan
          </h2>
          <ul className="list-disc pl-6 mt-4">
            <li>Tata cara pemilihan pengurus</li>
            <li>Masa jabatan pengurus</li>
            <li>Mekanisme pergantian pengurus jika diperlukan</li>
          </ul>
        </section>

        {/* Kegiatan dan Program Kerja Section */}
        <section className="mb-8">
          <h2 className="text-1xl font-semibold text-green-500">
            c. Kegiatan dan Program Kerja
          </h2>
          <ul className="list-disc pl-6 mt-4">
            <li>Jenis kegiatan yang akan dilakukan organisasi</li>
            <li>Mekanisme penyusunan dan pelaksanaan program kerja</li>
          </ul>
        </section>

        {/* Rapat dan Musyawarah Section */}
        <section className="mb-8">
          <h2 className="text-1xl font-semibold text-green-500">
            d. Rapat dan Musyawarah
          </h2>
          <ul className="list-disc pl-6 mt-4">
            <li>Prosedur pelaksanaan rapat</li>
            <li>Tata cara penyusunan agenda rapat</li>
            <li>Ketentuan kuorum dan pengambilan suara</li>
          </ul>
        </section>

        {/* Keuangan Section */}
        <section className="mb-8">
          <h2 className="text-1xl font-semibold text-green-500">e. Keuangan</h2>
          <ul className="list-disc pl-6 mt-4">
            <li>Pengelolaan anggaran organisasi</li>
            <li>Penyusunan laporan keuangan</li>
            <li>Mekanisme audit internal (jika ada)</li>
          </ul>
        </section>

        {/* Sanksi dan Penyelesaian Masalah Section */}
        <section className="mb-8">
          <h2 className="text-1xl font-semibold text-green-500">
            f. Sanksi dan Penyelesaian Masalah
          </h2>
          <ul className="list-disc pl-6 mt-4">
            <li>
              Ketentuan sanksi bagi anggota atau pengurus yang melanggar aturan
            </li>
            <li>Prosedur penyelesaian konflik internal</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ART;

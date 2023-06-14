import React from "react";
import CardArtikelProperti from "./Card/CardArtikelProperti";

const artikel = [
  {
    subjudul:
      "KPR Ditolak Bank? Ini Alasannya, Dari Penghasilan Hingga Masa Kerja",
    isi:
      "Hal yang paling mendebarkan dalam pengajuan KPR adalah saat mengetahui hasil pengambilan KPR",
    link: "/",
  },
  {
    subjudul:
      "KPR Ditolak Bank? Ini Alasannya, Dari Penghasilan Hingga Masa Kerja",
    isi:
      "Hal yang paling mendebarkan dalam pengajuan KPR adalah saat mengetahui hasil pengambilan KPR",
    link: "/",
  },
  {
    subjudul:
      "KPR Ditolak Bank? Ini Alasannya, Dari Penghasilan Hingga Masa Kerja",
    isi:
      "Hal yang paling mendebarkan dalam pengajuan KPR adalah saat mengetahui hasil pengambilan KPR",
    link: "/",
  },
  {
    subjudul:
      "KPR Ditolak Bank? Ini Alasannya, Dari Penghasilan Hingga Masa Kerja",
    isi:
      "Hal yang paling mendebarkan dalam pengajuan KPR adalah saat mengetahui hasil pengambilan KPR",
    link: "/",
  },
];

const CompInfoProperti = () => {
  return (
    <div className="my-4 md:mx-5 xl:mx-20">
      {/* Subjudul */}
      <div className="text-center justify-center align-middle mb-6 mx-2 md:w-full md:text-left">
        <p className="text-xl font-bold mb-2">Info Properti</p>
        <p className="text-md">
          Kumpulan artikel menarik seputar dunia properti.
        </p>
      </div>
      {/* testimonial */}
      <CardArtikelProperti items={artikel} />
    </div>
  );
};

export default CompInfoProperti;

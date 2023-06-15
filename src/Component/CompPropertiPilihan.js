import React from "react";
import CompCarousel from "./Card/CardCarousel";

const images = [
  {
    src:
      "https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/06/13135011/Y2-3-592x444.jpg",
    alt: "Gambar 1",
    caption: "Rumah Modern Klasik Di Lokasi Strategis Poros Jalan Provinsi.",
    ukuran: "KT:2 42m",
    jenis: "Rumah",
    harga: "Rp459.000.000",
  },
  {
    src:
      "https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/06/13140234/X1-592x444.jpeg",
    alt: "Gambar 2",
    caption: "Rumah Modern Klasik Di Lokasi Strategis Poros Jalan Provinsi.",
    ukuran: "KT:2 42m",
    jenis: "Rumah",
    harga: "Rp379.000.000",
  },
  {
    src:
      "https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/06/13140627/X4-592x444.jpeg",
    alt: "Gambar 3",
    caption: "Rumah Modern Klasik Di Lokasi Strategis Poros Jalan Provinsi.",
    ukuran: "KT:2 42m",
    jenis: "Rumah",
    harga: "Rp589.000.000",
  },
  {
    src:
      "https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/06/13140627/X4-592x444.jpeg",
    alt: "Gambar 3",
    caption: "Rumah Modern Klasik Di Lokasi Strategis Poros Jalan Provinsi.",
    ukuran: "KT:2 42m",
    jenis: "Rumah",
    harga: "Rp589.000.000",
  },
  {
    src:
      "https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/06/13140627/X4-592x444.jpeg",
    alt: "Gambar 3",
    caption: "Rumah Modern Klasik Di Lokasi Strategis Poros Jalan Provinsi.",
    ukuran: "KT:2 42m",
    jenis: "Rumah",
    harga: "Rp589.000.000",
  },
  {
    src:
      "https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/06/13140627/X4-592x444.jpeg",
    alt: "Gambar 3",
    caption: "Rumah Modern Klasik Di Lokasi Strategis Poros Jalan Provinsi.",
    ukuran: "KT:2 42m",
    jenis: "Rumah",
    harga: "Rp589.000.000",
  },
  {
    src:
      "https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/06/13140627/X4-592x444.jpeg",
    alt: "Gambar 3",
    caption: "Rumah Modern Klasik Di Lokasi Strategis Poros Jalan Provinsi.",
    ukuran: "KT:2 42m",
    jenis: "Rumah",
    harga: "Rp589.000.000",
  },
];

const CompPropertiPilihan = () => {
  return (
    <div className="mb-16 lg:mb-28 md:mx-5 xl:mx-20">
      <div className="md:flex">
        {/* Subjudul */}
        <div className="text-center justify-center align-middle mb-2 md:w-full md:text-left">
          <p className="text-xl font-bold">Properti Pilihan Kami</p>
          <p className="text-md">
            Temukan berbagai macam properti unggulan di sini
          </p>
        </div>
        <div className="text-center justify-center align-middle mb-4 m-4">
          <a
            href="/"
            className="bg-blue-500 rounded-xl py-2 text-white w-full md:w-52 block"
          >
            Lihat Semua
          </a>
        </div>
      </div>
      {/* Corousel */}
      <div>
        <CompCarousel images={images} />
      </div>
    </div>
  );
};

export default CompPropertiPilihan;

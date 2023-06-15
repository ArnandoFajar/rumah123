import React from "react";
import CardPropertiBaru from "./Card/CardPropertiBaru";

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

const CompDaftarPropertiBaru = () => {
  return (
    <div className="bg-gray-100 my-4 mb-16 lg:mb-28 md:mx-5 xl:mx-20">
      {/* Subjudul */}
      <div className="text-center md:text-left md:ml-2 align-middle justify-center mb-4">
        <h1 className="font-bold text-lg text-gray-700 mb-2">
          Daftar Properti Baru
        </h1>
        <p className="text-md text-gray-700">
          Cari hunian impian anda, dari rumah minimalis hingga apartemen mewah
          di halorumah.id
        </p>
      </div>
      {/* Card  */}
      <div>
        <CardPropertiBaru images={images} />
      </div>
    </div>
  );
};

export default CompDaftarPropertiBaru;

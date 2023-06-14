import React from "react";
import TestimonialCard from "./Card/CardTesimonial";

const testimonial = [
  {
    icon:
      "https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/03/14092215/testi-1.webp",
    name: "Yudhi Gandasasra",
    message:
      "Pertama kali dapat penawaran dari Halorumah yang bikin saya sangat tertarik adalah paket ekonomis 149k member 12 bulan 6 iklan 1 feature listing & yang paling menarik di share di 5 platform terkemuka jualan rumah. Saya mencoba utk membuktikannya dan hasilnya luar biasa sih. Pasang iklan pagi, siangnya dapet info by wa kalau ada enquiry. Pelayanannya pun cepat, sales dan CSnya ramah, meskipun saya banyak bertanya tapi dilayani dengan ramah.",
    type: "Agen",
  },
  {
    icon:
      "https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/03/14092215/testi-1.webp",
    name: "Yudhi Gandasasra",
    message:
      "Pertama kali dapat penawaran dari Halorumah yang bikin saya sangat tertarik adalah paket ekonomis 149k member 12 bulan 6 iklan 1 feature listing & yang paling menarik di share di 5 platform terkemuka jualan rumah. Saya mencoba utk membuktikannya dan hasilnya luar biasa sih. Pasang iklan pagi, siangnya dapet info by wa kalau ada enquiry. Pelayanannya pun cepat, sales dan CSnya ramah, meskipun saya banyak bertanya tapi dilayani dengan ramah.",
    type: "Agen",
  },
  {
    icon:
      "https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/03/14092215/testi-1.webp",
    name: "Yudhi Gandasasra",
    message:
      "Pertama kali dapat penawaran dari Halorumah yang bikin saya sangat tertarik adalah paket ekonomis 149k member 12 bulan 6 iklan 1 feature listing & yang paling menarik di share di 5 platform terkemuka jualan rumah. Saya mencoba utk membuktikannya dan hasilnya luar biasa sih. Pasang iklan pagi, siangnya dapet info by wa kalau ada enquiry. Pelayanannya pun cepat, sales dan CSnya ramah, meskipun saya banyak bertanya tapi dilayani dengan ramah.",
    type: "Agen",
  },
];

const CompReview = () => {
  return (
    <div className="my-4 md:mx-5 xl:mx-20">
      {/* Subjudul */}
      <div className="text-center justify-center align-middle mb-6 mx-2 md:w-full md:text-left">
        <p className="text-xl font-bold mb-2">Review Pengguna Halorumah</p>
        <p className="text-md">
          Kata Mereka yang Sudah Menggunakan Layanan Halorumah.id
        </p>
      </div>
      {/* testimonial */}
      <TestimonialCard items={testimonial} />
    </div>
  );
};

export default CompReview;

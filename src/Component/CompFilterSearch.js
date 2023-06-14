import { useState } from "react";
import React from "react";

const kategori = [
  { value: "Apartemen" },
  { value: "Komersial" },
  { value: "Gudang" },
  { value: "Hotel" },
  { value: "Kios" },
  { value: "Ruko" },
  { value: "Rumah Tinggal" },
  { value: "Rumah" },
  { value: "Villa" },
  { value: "Tanah" },
];

const CompFilterSearch = () => {
  const [inputkategori, setInputKategori] = useState("");
  const [inputText, setInputText] = useState("");

  const handleSelectInputKategoriChange = (event) => {
    setInputKategori(event.target.value);
  };
  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="md:bg-blue-300 md:h-96">
      {/* Subjudul */}
      <div className="hidden md:block justify-center text-center p-10 font-bold text-black text-3xl">
        <p>Jual, Sewa & Bekerja Sama Properti</p>
      </div>
      {/* card  */}
      <div className="bg-white boxShadow shadow-xl rounded-xl overflow-hidden m-5 md:m-10 ">
        {/* tombol  */}
        <div className="px-4 pt-4 flex justify-left gap-1">
          <button className="bg-sky-500 text-white font-medium py-2 px-4 rounded">
            Semua
          </button>
          <button className=" text-black font-medium py-2 px-4 rounded">
            Dijual
          </button>
          <button className=" text-black font-medium py-2 px-4 rounded">
            Sewa
          </button>
        </div>

        {/*Section input pertama */}
        <div className="px-4 py-4 inline-block w-full md:flex gap-1 ">
          <select
            value={inputkategori}
            onChange={handleSelectInputKategoriChange}
            className="form-select hidden md:block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-400 focus:border-slate-400"
          >
            <option value="" selected={true}>
              Apapun
            </option>
            {kategori.map((item, index) => (
              <option key={index} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={inputText}
            placeholder="Masukan lokasi atau nama proyek"
            onChange={handleInputTextChange}
            className="w-full mb-4 md:mb-0 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-400 focus:border-slate-400"
          />
          <button className="w-full bg-sky-500 text-white font-medium py-2 px-9 rounded-xl">
            Cari
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompFilterSearch;

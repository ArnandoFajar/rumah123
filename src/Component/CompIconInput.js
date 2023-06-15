import React from "react";
import { FiHome } from "react-icons/fi";

const CompIconInput = () => {
  return (
    <div>
      {/* card icon row */}
      <div className="m-4 mb-10 lg:mx-52 xl:mx-80">
        {/* Section input logo  */}
        <div className="grid grid-rows-2 grid-flow-col md:grid-rows-1 w-full gap-4">
          <div className="bg-white rounded-lg shadow-xl p-4 flex flex-col items-center">
            <img
              className="mb-2 h-14 md:h-10 lg:h-10"
              src="https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/05/24223127/jual-rumah.webp"
            />
            <h2 className="text-xs md:text-sm">Beli Rumah</h2>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-4 flex flex-col w-full items-center">
            <img
              className="mb-2 h-14 md:h-10 lg:h-10"
              src="https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/05/24223439/sewa-rumah.webp"
            />
            <h2 className="text-xs md:text-sm">Sewa Rumah</h2>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-4 flex flex-col w-full items-center">
            <img
              className="mb-2 h-14 md:h-10 lg:h-10"
              src="https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/05/24223245/kpr.webp"
            />
            <h2 className="text-xs md:text-sm">KPR</h2>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-4 flex flex-col w-full items-center">
            <img
              className="mb-2 h-14 md:h-10 lg:h-10"
              src="https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/05/24223302/jual-apt.webp"
            />
            <h2 className="text-xs md:text-sm">Beli Apart</h2>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-4 flex flex-col w-full items-center">
            <img
              className="mb-2 h-14 md:h-10 lg:h-10"
              src="https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/05/24223303/sewa-apt.webp"
            />
            <h2 className="text-xs md:text-sm">Sewa Apart</h2>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-4 flex flex-col w-full items-center">
            <img
              className="mb-2 h-14 md:h-10 lg:h-10"
              src="https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/05/24223333/agen-halorumah.webp"
            />
            <h2 className="text-xs md:text-sm">Cari Agen</h2>
          </div>
        </div>
      </div>
      {/* posting Iklan */}
      <div className="text-center justify-center align-middle mb-4 bg-gray-100 py-2">
        <div className="mb-3">
          <p>Apakah Anda Pemiliki Properti?</p>
        </div>
        <div className="py-3">
          <a href="/" className="bg-teal-600 rounded-md py-3 text-white px-9">
            Posting Iklan Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompIconInput;

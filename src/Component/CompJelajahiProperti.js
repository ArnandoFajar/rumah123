import React from "react";

const CompJelajahiProperti = () => {
  return (
    <div className="mb-6">
      <div className="mb-4 md:flex">
        {/* Subjudul */}
        <div className="text-center justify-center align-middle mb-2 mx-2 md:w-full md:text-left">
          <p className="text-xl font-bold">Jelajahi Properti</p>
          <p className="text-md">
            Kami memililki berbagai pilihan untuk jenis properti. Silakan
            jelajahi dari listing kami yang berkualitas di lokasi strategis
          </p>
        </div>
      </div>
      {/* Grid 4 jenis rumah */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4">
        <div className="relative">
          <img
            className="rounded-xl object-cover h-32 md:h-24 w-full"
            src="https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/01/25161152/tanah.webp"
          />
          <div className="absolute z-10 bottom-0 h-full w-full bg-black bg-opacity-25 rounded-xl"></div>
          <div className="absolute z-20 top-1 left-2 md:top-7 md:left-7 h-full rounded-xl font-semibold text-white text-lg md:text-xl">
            Tanah
          </div>
        </div>
        <div className="relative">
          <img
            className="rounded-xl object-cover h-32 md:h-24 w-full"
            src="https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/02/02095928/rumah-home.webp"
          />
          <div className="absolute z-10 bottom-0 h-full w-full bg-black bg-opacity-25 rounded-xl"></div>
          <div className="absolute z-20 top-1 left-2 md:top-7 md:left-7 h-full rounded-xl font-semibold text-white text-lg md:text-xl">
            Rumah
          </div>
        </div>
        <div className="relative">
          <img
            className="rounded-xl object-cover h-32 md:h-24 w-full"
            src="https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/02/02100020/apartemen.webp"
          />
          <div className="absolute z-10 bottom-0 h-full w-full bg-black bg-opacity-25 rounded-xl"></div>
          <div className="absolute z-20 top-1 left-2 md:top-7 md:left-7 h-full rounded-xl font-semibold text-white text-lg md:text-xl">
            Apartemen
          </div>
        </div>
        <div className="relative">
          <img
            className="rounded-xl object-cover h-32 md:h-24 w-full"
            src="https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/02/02100106/image-7.webp"
          />
          <div className="absolute z-10 bottom-0 h-full w-full bg-black bg-opacity-25 rounded-xl"></div>
          <div className="absolute z-20 top-1 left-2 md:top-7 md:left-7 h-full rounded-xl font-semibold text-white text-lg md:text-xl">
            Ruko
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompJelajahiProperti;

import React from "react";

const CompCardPropertiBaru = ({ images }) => {
  return (
    <div className="mx-4 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
        {images.map((image, index) => (
          <div key={index}>
            <div className="relative ">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 rounded-md md:h-64"
              />
              <div className="absolute z-0 bottom-1 bg-black bg-opacity-30 blur-xl hover:bg-transparent text-white text-center font-bold text-lg pt-36 w-full"></div>
              <div className="absolute z-10 text-xl text-white font-bold left-5 bottom-4 ">
                {image.harga}
              </div>
            </div>
            <div className="text-sm text-center text-black p-2">
              {image.caption}
            </div>
            <div className="text-sm text-left text-black mb-1">
              {image.ukuran}
            </div>
            <div className="text-sm text-left text-black">{image.jenis}</div>
            <hr className="border-t-2 border-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompCardPropertiBaru;

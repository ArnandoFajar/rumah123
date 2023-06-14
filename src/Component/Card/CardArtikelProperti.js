import React from "react";

const CardArtikelProperti = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
      {items.map((item, index) => (
        <div key={index}>
          <div className="bg-white rounded">
            <h1 className="text-gray-600 font-bold mb-4">{item.subjudul}</h1>
            <p className="text-gray-600 mb-4">{item.isi}</p>
            <a className="text-blue-600 mb-4" href={item.link}>
              Continue reading
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardArtikelProperti;

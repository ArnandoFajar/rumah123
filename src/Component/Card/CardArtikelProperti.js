import React from "react";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    const truncated = text.slice(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(" ");
    return truncated.slice(0, lastSpaceIndex) + "...";
  }
  return text;
};

const CardArtikelProperti = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
      {items.slice(0, 4).map((item, index) => (
        <div key={index}>
          <div className="bg-white rounded">
            <h1 className="text-gray-600 font-bold mb-4">{item.title}</h1>
            <p className="text-gray-600 mb-4">{truncateText(item.text, 100)}</p>
            <a className="text-blue-600 mb-4" href="">
              Continue reading
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardArtikelProperti;

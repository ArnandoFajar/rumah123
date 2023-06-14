import React from "react";

const CardTesimonial = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-4">
      {items.map((item, index) => (
        <div key={index}>
          <div className="bg-white rounded shadow boxShadow p-4">
            <p className="text-gray-600 mb-4">{item.message}</p>
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <img
                  src={item.icon}
                  alt="Icon"
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="block">
                <div className="font-bold">{item.name}</div>
                <div className="font-sm">{item.type}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTesimonial;

import React from "react";

const CompFooter = () => {
  return (
    <footer className="bg-gray-800 text-white p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:mx-5 xl:mx-20">
        <div className="items-center mb-4">
          <img
            src="https://halorumah.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/04/28103347/white-logo-halorumah.png"
            alt="Logo"
            className="h-10 w-100 mr-2 mb-8"
          />
          <p>Email: cs@halorumah.id </p>
          <p>Customer Service: +6281290518080 </p>
          <p> ©2022 PT. Halo Rumah Indonesia. All Rights Reserved.</p>
        </div>
        <div className="">
          <ul className="list-none p-2">
            <li className="mb-2">
              <a>{">"} Mengenai Halorumah</a>
            </li>
            <li className="mb-2">
              <a>{">"} Blog</a>
            </li>
            <li className="mb-2">
              <a>{">"} Virtual Renovation</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-none p-2">
            <li className="mb-1">{">"} Saran</li>
            <li className="mb-1">{">"} KPR</li>
            <li className="mb-1">{">"} Membership</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default CompFooter;

import React from "react";
import { useEffect, useState } from "react";
import CardArtikelProperti from "./card/CardArtikelProperti";
import axios from "axios";
import { API_URL_articles } from "../constants";

const CompInfoProperti = () => {
  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      const options = {
        method: "GET",
        url: API_URL_articles,
      };

      try {
        const response = await axios.request(options);
        setArtikel(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticle();
  }, []);

  return (
    <div className="my-4 mb-16 lg:mb-28 md:mx-5 xl:mx-20">
      {/* Subjudul */}
      <div className="text-center justify-center align-middle mb-6 mx-2 md:w-full md:text-left">
        <p className="text-xl font-bold mb-2">Info Properti</p>
        <p className="text-md">
          Kumpulan artikel menarik seputar dunia properti.
        </p>
      </div>
      {/* testimonial */}
      <CardArtikelProperti items={artikel} />
    </div>
  );
};

export default CompInfoProperti;

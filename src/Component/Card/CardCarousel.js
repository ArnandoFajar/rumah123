import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompCarousel = ({ images }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-4 mb-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="mx-2">
              <div className="relative ">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full rounded-md h-80"
                />
                <div className="absolute z-10 text-xl text-white font-bold left-5 bottom-4 ">
                  {image.harga}
                </div>
                <div className="absolute z-0 bottom-1 bg-black bg-opacity-30 blur-xl hover:bg-transparent text-white text-center font-bold text-lg pt-36 w-full"></div>
              </div>
              <div className="text-sm text-center text-black p-2">
                {image.caption}
              </div>
              <div className="text-sm text-left text-black mb-1">
                {image.ukuran}
              </div>
              <div className="text-sm text-left text-black">{image.jenis}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompCarousel;

/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-blue-500 hover:bg-blue-700 rounded-full p-2 text-sm md:text-base shadow-lg"
      onClick={onClick}
      style={{ zIndex: 10 }}
    >
      Next
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-blue-500 hover:bg-blue-700 rounded-full p-2 text-sm md:text-base shadow-lg"
      onClick={onClick}
      style={{ zIndex: 10 }}
    >
      Prev
    </button>
  );
};

// eslint-disable-next-line react/prop-types
function Carausel({ images, length, restCard, shape }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: length,
    slidesToScroll: restCard,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(length, 3),
          slidesToScroll: Math.min(restCard, 3),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(length, 2),
          slidesToScroll: Math.min(restCard, 2),
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
    <div
      className={`w-full max-w-8xl mx-auto mt-4 md:mt-10 rounded-md px-2 md:px-10 space-x-3 md:space-x-12 ${
        shape === "L" ? "scale-90" : ""
      }`}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="text-center flex flex-col justify-center items-center p-1 md:p-2"
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className={`w-full h-auto ${
                shape === "L"
                  ? "max-w-[180px] max-h-[180px]"
                  : "max-w-[50px] max-h-[50px]"
              }`}
            />
            <p
              className={`mt-1 md:mt-2 ${
                shape === "L" ? "text-base md:text-lg" : "text-xs md:text-sm"
              } text-gray-600`}
            >
              {image.text}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carausel;

import Slider from "react-slick";
import MenuCard from "./MenuCard"; // Import your MenuCard component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Using react-icons for arrows

function Menu() {
  const trendingCardDetails = [
    {
      image: "assets/trending1.png",
      name: "The Famous Cousine",
      region: "North Indian",
      country: "Indian",
      type: "veg",
      time: "30-35 min",
      price: "250",
      discount: "65%",
    },
    {
      image: "assets/trending1.png",
      name: "The Famous Cousine",
      region: "North Indian",
      country: "Indian",
      type: "veg",
      time: "30-35 min",
      price: "250",
      discount: "65%",
    },
    {
      image: "assets/trending1.png",
      name: "The Famous Cousine",
      region: "North Indian",
      country: "Indian",
      type: "veg",
      time: "30-35 min",
      price: "250",
      discount: "65%",
    },
    {
      image: "assets/trending1.png",
      name: "The Famous Cousine",
      region: "North Indian",
      country: "Indian",
      type: "veg",
      time: "30-35 min",
      price: "250",
      discount: "65%",
    },
    {
      image: "assets/trending1.png",
      name: "The Famous Cousine",
      region: "North Indian",
      country: "Indian",
      type: "veg",
      time: "30-35 min",
      price: "250",
      discount: "65%",
    },
  ];

 
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    nextArrow: (
      <button className="slick-next absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-blue-600 hover:bg-blue-700 rounded-full p-3 shadow-md z-10">
        <FaArrowRight />
      </button>
    ), 
    prevArrow: (
      <button className="slick-prev absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-blue-600 hover:bg-blue-700 rounded-full p-3 shadow-md z-10">
        <FaArrowLeft />
      </button>
    ), 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 md:px-24 py-10">
      <h2 className="text-2xl font-semibold mb-4">Trending This Week</h2>
      <Slider {...settings}>
        {trendingCardDetails?.map((elem, index) => (
          <div key={index} className="p-4">
            <MenuCard
              image={elem.image}
              name={elem.name}
              region={elem.region}
              country={elem.country}
              type={elem.type}
              time={elem.time}
              price={elem.price}
              discount={elem.discount}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Menu;

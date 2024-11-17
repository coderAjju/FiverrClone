import { popularSerivices } from "@/helpers/popularServices";
import Slider from "react-slick";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
    
      onClick={onClick}
      className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-white rounded-full shadow-lg cursor-pointer flex items-center justify-center w-10 h-10 hover:scale-110 transition-transform"
    >
      <FiArrowRight className="text-gray-700" size={20} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
      <div
      style={{
        display: "flex",
        position: "absolute",
        left: "-20px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
      }}
        onClick={onClick}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow-lg cursor-pointer flex items-center justify-center w-10 h-10 hover:scale-110 transition-transform"

      >
        <FiArrowLeft className="text-gray-700" size={20} />
      </div>
  );
}

export function PopularServices() {
  const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container my-10 py-10">
      <h1 className="text-6xl font-normal mb-10 text-gray-800">Popular Services</h1>
      <Slider {...settings}>
        {popularSerivices.map((item, index) => {
          return (
            <div key={index}>
            <div className={`relative w-[200px] h-[250px] rounded-2xl ${item.bgColor}`}>
              <h3 className="text font-semibold text-xl pt-4 px-4 text-white">
                {item.service}
              </h3>
              <img className={"absolute w-[90%] bottom-2 rounded-lg left-[10px]"} src={item.image} alt="" />
            </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

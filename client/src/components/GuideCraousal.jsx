import { services } from "@/helpers/VontelleServices";
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

export function GuideCraousal() {
  const settings = {
    infinite: false,
    slidesToShow: 3,
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
    <div className="slider-container my-5 py-7">
      <h1 className="text-4xl font-normal mb-10 text-gray-800">Guides to help you grow</h1>
      <Slider {...settings}>
        {services.map((item, index) => {
          return (
            <div key={index} className="py-3 px-5">
            <div
            
            className={`relative w-[250px] h-[190px] rounded-2xl flex justify-center items-center flex-col ${item.bgColor} shadow-xl hover:shadow-2xl border-[1px]`}>
              <img className={"w-20 h-20 rounded-lg left-[10px]"} src={item.image} alt="" />
              <h3 className=" text-center text font-semibold text-lg pt-4 px-4 text-[#2C2D2F]">
                {item.title}              </h3>
            </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

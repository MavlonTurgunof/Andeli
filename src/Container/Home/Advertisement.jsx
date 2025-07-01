import React, { useState } from "react";
import Container from "../../Components/Container";

const slides = [
  {
    id: 1,
    img: "/img/Slide1.jpg",
  },
  {
    id: 2,
    img: "/img/Slide2.jpg",
  },
  {
    id: 3,
    img: "/img/Slide3.jpg",
  },
];

function Advertisement() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  return (
    <Container>
      <div className="relative py-[20px]">
        <div className="overflow-hidden rounded-[16px] h-[310px] mx-[43px]">
          <img
            src={slides[currentIndex].img}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full object-fill h-[310px]"
          />

          <div className=" left-[0px] top-[35%] w-[86px] h-[86px] bg-white absolute rounded-full flex justify-center items-center">
            <button
              onClick={prevSlide}
              className=" bg-[#F3F9FB] rounded-full hover:shadow-2xl hover:shadow-blue-300 p-[20px]"
            >
              <img src="/img/left.svg" alt="" />
            </button>
          </div>

          <div className=" right-[0px] top-[35%] w-[86px] h-[86px] bg-white absolute rounded-full flex justify-center items-center">
            <button
              onClick={nextSlide}
              className=" bg-[#F3F9FB] hover:shadow-2xl hover:shadow-blue-300 rounded-full p-[20px]"
            >
              <img src="/img/right.svg" alt="" />
            </button>
          </div>
          <div className="absolute bottom-[39px] left-[90px] flex items-center gap-2">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-6 h-2 rounded-full bg-white"
                    : "w-2 h-2 rounded-full bg-white/70"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Advertisement;

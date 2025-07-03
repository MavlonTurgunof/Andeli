import React from "react";
import Container from "../../Components/Container";
import { Link } from "react-router-dom";

function TypePro() {
  return (
    <Container>
      <div className="max-md:px-[10px] md:my-[120px]">
        <div className="border-b-1 border-[#EDEDED] mb-[40px]">
          <div>
            <h1 className="text-[#666666] text-[18px] font-semibold md:text-[24px] md:font-bold max-md:border-b-2 max-md:border-[#008ECC] w-fit">
              Виды <span className="text-[#008ECC]">стабилизаторов</span>
            </h1>
            <div className="bg-[#008ECC] h-[3px] w-[378px] max-md:hidden" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between max-md:gap-4 md:mx-[37px] ">
          <Link
            to={"products/Настенное"}
            className="hover:scale-105 hover:shadow-2xl shadow-blue-400 hover:rounded-[36px] transition-all duration-500 cursor-pointer  "
          >
            <img
              src="/img/Banner1.svg"
              alt=""
              className="rounded-[16px] md:rounded-[30px] md:w-[517px] md:h-[207px]"
            />
          </Link>
          <Link
            to={"products/Напольное"}
            className="hover:scale-105 hover:shadow-2xl shadow-blue-400 hover:rounded-[36px] transition-all duration-500 cursor-pointer  "
          >
            <img
              src="/img/Type2.svg"
              alt=""
              className="rounded-[16px] md:rounded-[30px] md:w-[517px] md:h-[207px]"
            />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default TypePro;

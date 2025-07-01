import React from "react";
import Container from "../../Components/Container";

function TypePro() {
  return (
    <Container>
      <div className="max-md:px-[10px]">
        <div className="border-b-1 border-[#EDEDED] mb-[40px]">
          <div>
            <h1 className="text-[#666666] text-[18px] font-semibold md:text-[24px] md:font-bold max-md:border-b-2 max-md:border-[#008ECC] w-fit">
              Виды <span className="text-[#008ECC]">стабилизаторов</span>
            </h1>
            <div className="bg-[#008ECC] h-[3px] w-[378px] max-md:hidden" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between max-md:gap-4 md:mx-[37px] md:mb-[148px]">
          <img src="/img/Type1.svg" alt="" />
          <img src="/img/Type2.svg" alt="" />
        </div>
      </div>
    </Container>
  );
}

export default TypePro;

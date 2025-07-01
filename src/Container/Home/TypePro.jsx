import React from "react";
import Container from "../../Components/Container";

function TypePro() {
  return (
    <Container>
      <div className="border-b-1 border-[#EDEDED] mb-[40px]">
        <div>
          <h1 className="text-[#666666] text-[24px] font-bold">
            Виды <span className="text-[#008ECC]">стабилизаторов</span>
          </h1>
          <div className="bg-[#008ECC] h-[3px] w-[378px]" />
        </div>
      </div>
      <div className="flex justify-between mx-[37px] mb-[148px]">
        <img src="/img/Type1.svg" alt="" />
        <img src="/img/Type2.svg" alt="" />
      </div>
    </Container>
  );
}

export default TypePro;

import React from "react";
import Container from "../../Components/Container";
import ProCard from "../../Components/ProCard";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image: "/img/Stablizators/img1.svg",
    name: "ANDELI SVC-D1000VA",
    description: "Стабилизатор напряжений",
    type: "Вертикальный",
  },
  {
    id: 2,
    image: "/img/Stablizators/img2.svg",
    name: "ANDELI SVC-D1000VA",
    description: "Стабилизатор напряжений",
    type: "Вертикальный",
  },
  {
    id: 3,
    image: "/img/Stablizators/img3.svg",
    name: "ANDELI SVC-D1000VA",
    description: "Стабилизатор напряжений",
    type: "Вертикальный",
  },
  {
    id: 4,
    image: "/img/Stablizators/img4.svg",
    name: "ANDELI SVC-D1000VA",
    description: "Стабилизатор напряжений",
    type: "Вертикальный",
  },
  {
    id: 5,
    image: "/img/Stablizators/img1.svg",
    name: "ANDELI SVC-D1000VA",
    description: "Стабилизатор напряжений",
    type: "Вертикальный",
  },
];

function LatestPro() {
  return (
    <Container>
      <div className="my-[40px] md:my-[102px] max-md:px-[10px]">
        <div className="border-b-1 border-[#EDEDED] flex justify-between items-center">
          <div>
            <h1 className="text-[#666666] text-[18px] font-semibold md:text-[24px] md:font-bold max-md:border-b-2 max-md:border-[#008ECC] w-fit">
              Andeli <span className="text-[#008ECC]">Стабилизатор</span>
            </h1>
            <div className="bg-[#008ECC] h-[3px] w-[378px] max-md:hidden" />
          </div>
          <div className="flex items-center cursor-pointer">
            <Link
              to={"/products"}
              className="md:font-medium font-normal max-md:text-[12px] "
            >
              Показать все
            </Link>
            <img src="/img/right.svg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 mt-[41px] md:gap-x-[16px] md:gap-y-[84px] gap-2">
          {data.map((prod) => (
            <ProCard prod={prod} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default LatestPro;

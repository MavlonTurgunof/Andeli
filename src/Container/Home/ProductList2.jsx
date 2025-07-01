import React from "react";
import Container from "../../Components/Container";
import ProCard from "../../Components/ProCard";

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
  {
    id: 6,
    image: "/img/Stablizators/img2.svg",
    name: "ANDELI SVC-D1000VA",
    description: "Стабилизатор напряжений",
    type: "Вертикальный",
  },
  {
    id: 7,
    image: "/img/Stablizators/img3.svg",
    name: "ANDELI SVC-D1000VA",
    description: "Стабилизатор напряжений",
    type: "Вертикальный",
  },
  {
    id: 8,
    image: "/img/Stablizators/img4.svg",
    name: "ANDELI SVC-D1000VA",
    description: "Стабилизатор напряжений",
    type: "Вертикальный",
  },
  {
    id: 9,
    image: "/img/Stablizators/img3.svg",
    name: "ANDELI SVC-D1000VA",
    description: "Стабилизатор напряжений",
    type: "Вертикальный",
  },
  {
    id: 10,
    image: "/img/Stablizators/img4.svg",
    name: "ANDELI SVC-D1000VA",
    description: "Стабилизатор напряжений",
    type: "Вертикальный",
  },
];

function ProductList2() {
  return (
    <Container>
      <div className="my-[120px]">
        <div className="border-b-1 border-[#EDEDED] flex justify-between items-center">
          <div>
            <h1 className="text-[#666666] text-[24px] font-bold">
              Все виды <span className="text-[#008ECC]">Cтабилизаторов</span>
            </h1>
            <div className="bg-[#008ECC] h-[3px] w-[378px]" />
          </div>
          <div className="flex items-center cursor-pointer">
            <h1 className="font-medium">Показать все</h1>
            <img src="/img/right.svg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-5 mt-[41px] gap-x-[16px] gap-y-[84px]">
          {data.map((prod) => (
            <ProCard prod={prod} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default ProductList2;

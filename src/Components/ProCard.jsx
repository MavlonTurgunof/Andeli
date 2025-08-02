import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ProCard({ prod, setIsOpenModal }) {
  return (
    <div
      onClick={() => setIsOpenModal(true)}
      className="max-w-[250px] md:w-[250px] max-h-[356px] rounded-[16px] border-1 border-[#EDEDED] hover:shadow-2xl hover:scale-105 hover:transition-all cursor-pointer"
    >
      <div className="bg-[#F0EEED] h-[180px] md:h-[280px] flex justify-center items-center rounded-t-[16px]">
        <img src={`${prod.image}`} alt="" className="w-[90%] h-[90%]" />
      </div>
      <div className="py-[14px] px-[9px]">
        <h3
          className={` text-[14px] font-semibold ${
            prod.type === "Настенный" ? "text-[#008ECC]" : "text-[#F5A623]"
          } `}
        >
          {prod.type}
        </h3>

        <h1 className="md:text-[20px] text-[14px] font-normal ">{prod.name}</h1>
      </div>
    </div>
  );
}

export default ProCard;

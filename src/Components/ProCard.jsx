import React from "react";
import { Link } from "react-router-dom";

function ProCard({ prod }) {
  return (
    <Link
      to={"/products/detail"}
      className=" rounded-[16px] border-1 border-[#EDEDED] hover:shadow-2xl hover:scale-105 hover:transition-all cursor-pointer"
    >
      <div className="bg-[#F5F5F5] h-[187px] flex justify-center items-center rounded-t-[16px]">
        <img src={`${prod.image}`} alt="" className="w-[150px] h-[150px]" />
      </div>
      <div>
        <div className="border-b-1 border-[#EDEDED]">
          <div className="p-[12px] font-semibold text-[14px]">
            <h1>{prod.name}</h1>
            <h2>{prod.description}</h2>
          </div>
        </div>
        <h3 className="p-[10px] text-[14px] font-semibold text-[#249B3E]">
          {prod.type}
        </h3>
      </div>
    </Link>
  );
}

export default ProCard;

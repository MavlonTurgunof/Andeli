import React from "react";
import Container from "./Container";

function PostHeader() {
  return (
    <div className="max-md:hidden border-b-1 border-[#EDEDED]">
      <Container>
        <div className="flex items-center py-[21px] gap-[208px]">
          <img src="/img/Logo.svg" alt="" className="" />
          <div className="relative">
            <img
              src="/img/Search.svg"
              alt=""
              className="absolute top-[18px] left-[16px]"
            />

            <input
              type="text"
              placeholder="Поиск..."
              className="bg-[#F3F9FB] w-[507px] pl-[50px] py-[15px] rounded-[10px] outline-none focus:border-[#008ECC] focus:border-2"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PostHeader;

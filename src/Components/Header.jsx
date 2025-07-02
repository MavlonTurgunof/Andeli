import React from "react";
import Container from "./Container";

function Header() {
  return (
    <div className="bg-[#F5F5F5]">
      <Container>
        <div className="flex justify-between py-[14px] text-[#666666] text-[14px]">
          <div className="font-normal max-md:px-[10px]">
            <h1>Добро пожаловать в мир Мегамарт!</h1>
          </div>
          <div className="flex max-md:hidden">
            <div className="flex gap-[6px] border-r-2 border-[#D9D9D9] pr-[18px]">
              <img src="/img/delivery.svg" alt="" />
              <h1>
                Доставка на <span className="font-bold text-black">423651</span>
              </h1>
            </div>
            <div className="flex gap-[6px] border-r-2 border-[#D9D9D9] pl-[16px] pr-[18px]">
              <img src="/img/Location.svg" alt="" />
              <h1>Отслеживайте свой заказ</h1>
            </div>
            <div className="flex pl-[16px] gap-[6px]">
              <img src="/img/Discount.svg" alt="" />
              <h1>Все предложения</h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;

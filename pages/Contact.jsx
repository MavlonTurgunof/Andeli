import React from "react";
import Container from "../src/Components/Container";

function Contact() {
  return (
    <Container>
      <div className="my-8 px-4 sm:px-6 lg:px-0">
        <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] mb-5 font-normal">
          Контакная информация
        </h1>

        <div className="flex flex-col lg:flex-row items-start justify-between py-8 px-6 sm:px-10 lg:px-16 bg-[#FAFAFA] rounded-[14px] gap-10 mb-5">
          <h1 className="text-[#0067B3] text-[28px] sm:text-[36px] lg:text-[56px] font-bold leading-tight">
            Andeli и слоган (текст)
          </h1>

          <div className="flex flex-col sm:flex-row gap-10 lg:gap-[64px] ">
            {/* Email & Working Hours */}
            <div className="">
              <h2 className="text-[14px] sm:text-[16px] font-medium mb-6">
                АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ
              </h2>
              <h3 className="text-[14px] sm:text-[16px] font-bold mb-4">
                andeli@gmail.com
              </h3>
              <div className="flex gap-6 text-sm sm:text-[16px] text-[#434343]">
                <div className="space-y-1">
                  <p>Понедельник</p>
                  <p>Вторник</p>
                  <p>Среда</p>
                  <p>Четверг</p>
                  <p>Пятница</p>
                  <p>Суббота</p>
                  <p>Воскресенье</p>
                </div>
                <div className="space-y-1">
                  <p>с 6:00 по 16:00</p>
                  <p>с 6:00 по 16:00</p>
                  <p>с 6:00 по 16:00</p>
                  <p>с 6:00 по 16:00</p>
                  <p>с 6:00 по 16:00</p>
                  <p>с 6:00 по 14:00</p>
                  <p>-</p>
                </div>
              </div>
            </div>

            {/* Phone & Address */}
            <div className="">
              <h2 className="text-[14px] sm:text-[16px] font-medium mb-6">
                НОМЕР
              </h2>
              <h3 className="text-[14px] sm:text-[16px] font-bold mb-4">
                +998 97 773 98 99
              </h3>
              <div className="text-sm sm:text-[16px] font-normal text-black/60 space-y-2">
                <p>
                  <span className="font-bold">Адрес:</span> Toshkent shaxar,
                  Usta
                  <br /> shirin kòchasi 125
                </p>
                <p>
                  <span className="font-bold">Магазин:</span> Jomiy 13 B
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div>
          <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] mt-8 mb-5 font-normal">
            Локация
          </h1>
          <img src="/img/Map.svg" alt="Map" className="w-full rounded-md" />
        </div>
      </div>
    </Container>
  );
}

export default Contact;

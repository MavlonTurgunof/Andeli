import React from "react";
import { BiCalendar, BiPhone, BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationPin } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";
import { MdEmail, MdLocationOn } from "react-icons/md";

function ContactInfo() {
  return (
    <div className="bg-[#008ECC] text-white rounded-[10px] p-[40px] pr-[114px]">
      <h1 className="text-[28px] font-semibold">Contact Information</h1>
      <p className="text-[18px] font-normal mb-[42px]">
        Say something to start a live chat!
      </p>
      <div className="flex flex-col gap-[50px]">
        <div className="flex gap-[25px] items-center">
          <BiSolidPhoneCall color="white" size={24} />
          <h1 className="text-[16px] font-normal">+998977739899</h1>
        </div>
        <div className="flex gap-[25px] items-center">
          <MdEmail color="white" size={24} />
          <h1 className="text-[16px] font-normal">gdimpex@mail.ru</h1>
        </div>
        <div className="flex gap-[25px] items-center">
          <MdLocationOn color="white" size={24} />
          <h1 className="text-[16px] font-normal">
            г. Ташкент, ул. Уста-Ширин, 125/1-87 <br />
            (1 этаж, 87-магазин)
          </h1>
        </div>
        <div className="flex gap-[25px]">
          <IoCalendarNumber color="white" size={24} />
          <div>
            <h1>Режим работы</h1>
            <p>Пн-Сб</p>
            <p>c 9:00 до 17:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

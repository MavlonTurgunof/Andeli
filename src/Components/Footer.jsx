import React from "react";
import { FaPhone } from "react-icons/fa";
import Container from "./Container";

function Footer() {
  return (
    <div className="relative bg-[#008ECC] text-white">
      <Container>
        <div className=" grid grid-cols-1  md:grid-cols-3 pb-[50px] md:pb-[210px] w-[95%] pt-[30px] md:pt-[81px] max-md:pl-[40px]">
          {/* Left - Logo & Contact */}
          <div className="pb-[20px]">
            <img src="/img/LogoWhite.svg" alt="" className="mb-[49px]" />

            <p className="mt-2 text-[20px] font-bold">Contact Us</p>
            <div className="mt-[20px] flex items-start gap-2">
              <img src="/img/Call.svg" alt="" />
              <div>
                <h1 className="text-[16px] font-medium">Telephone</h1>
                <span>+998977739899</span>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-[20px]">
              <img src="/img/Call.svg" alt="" />
              <div>
                <h1 className="text-[16px] font-medium">Telephone</h1>
                <span>+998977739899</span>
              </div>
            </div>
          </div>

          {/* Middle - Info */}
          <div className="border-t-1 border-[#05ABF3] py-[20px]">
            <div className="mb-[]">
              <h2 className=" font-semibold text-[20px] mb-2 md:border-b-3 md:border-white w-fit pb-[8px]">
                Information
              </h2>
            </div>
            <ul className="text-[16px] font-medium space-y-5 list-disc pl-4 mt-[18px]">
              <li>
                Сервис Центр:
                <a href="tel:+998983020012" className="underline">
                  +998983020012
                </a>
              </li>
              <li>
                Филиал Изяк:
                <a href="tel:+998951700103" className="underline">
                  +998951700103
                </a>
              </li>
              <li>
                Филиал Куйлюк:
                <a href="tel:+998974502295" className="underline">
                  +998974502295
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Social Media */}
          <div className="border-t-1 border-[#05ABF3] pt-[20px]">
            <h2 className="text-[20px] font-semibold md:border-b-3 md:border-white w-fit pb-[8px]">
              Social Media
            </h2>

            <ul className="text-[16px] font-medium space-y-4 list-disc pl-4 pt-[18px]">
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t-1 border-[#05ABF3] py-[30px] text-center text-[15px] md:text-[20px] font-normal ">
          © 2022 All rights reserved. Reliance Retail Ltd.
        </div>
      </Container>
      <div className="max-md:hidden absolute top-0 right-0">
        <img src="/img/CircleCorner.svg" alt="" />
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import Container from "./Container";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#F0F0F0]">
      <Container>
        <div className="px-4 sm:px-6 lg:px-[70px]">
          {/* Top Section */}
          <div className="pt-[80px] pb-[40px] flex flex-col lg:flex-row gap-10 lg:gap-[101px] border-b border-black/10">
            <div className="max-w-[248px]">
              <img
                src="/img/Logo.svg"
                alt="Logo"
                className="w-full max-w-[150px]"
              />
              <p className="text-sm sm:text-[14px] text-black/60 mt-6 mb-6 leading-relaxed">
                We have clothes that suit your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex gap-3">
                {[FaTwitter, FaFacebook, FaInstagram, FaGithub].map(
                  (Icon, index) => (
                    <div
                      key={index}
                      className="h-8 w-8 rounded-full flex items-center justify-center bg-white"
                    >
                      <Icon size={16} color="#0067B3" />
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="">
              <h1 className="text-base font-medium mb-6">COMPANY</h1>
              <div className="flex flex-col gap-3 text-sm sm:text-[16px] text-black/60">
                <Link to="/">All Products</Link>
                <Link to="/">AI Assistant</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about-us">About Us</Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 lg:gap-[64px]">
              <div>
                <h1 className="text-base font-medium mb-6">EMAIL ADDRESS</h1>
                <p className="text-sm sm:text-base font-bold mb-4">
                  andeli@gmail.com
                </p>
                <div className="flex gap-4 text-sm sm:text-[16px] text-[#434343]">
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
              <div>
                <h1 className="text-base font-medium mb-6">NUMBER</h1>
                <p className="text-sm sm:text-base font-bold mb-4">
                  +998 97 773 98 99
                </p>
                <div className="text-sm sm:text-base text-black/60 space-y-2">
                  <p>
                    <span className="font-bold">Адрес:</span> Toshkent shaxar,
                    Usta <br />
                    shirin kòchasi 125
                  </p>
                  <p>
                    <span className="font-bold">Do'kon:</span> Jomiy 13 B
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-[14px] text-black/60 mt-6 pb-20">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
